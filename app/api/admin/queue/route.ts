import { NextResponse } from "next/server"
import { asc, eq } from "drizzle-orm"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db, communityComponents, profiles } from "@/lib/db"

const ADMIN_USERNAMES = (process.env.ADMIN_GITHUB_USERS ?? "AntonioKOD")
  .split(",")
  .map((s) => s.trim().toLowerCase())

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const username = (session as { user: { username?: string } }).user?.username?.toLowerCase()
  if (!username || !ADMIN_USERNAMES.includes(username)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const data = await db
    .select({
      id:            communityComponents.id,
      slug:          communityComponents.slug,
      title:         communityComponents.title,
      description:   communityComponents.description,
      category:      communityComponents.category,
      status:        communityComponents.status,
      createdAt:     communityComponents.createdAt,
      author: {
        id:        profiles.id,
        username:  profiles.username,
        name:      profiles.name,
        avatarUrl: profiles.avatarUrl,
      },
    })
    .from(communityComponents)
    .leftJoin(profiles, eq(communityComponents.authorId, profiles.id))
    .where(eq(communityComponents.status, "pending"))
    .orderBy(asc(communityComponents.createdAt))
    .limit(50)

  return NextResponse.json(data)
}
