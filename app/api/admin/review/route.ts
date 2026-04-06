import { NextRequest, NextResponse } from "next/server"
import { eq } from "drizzle-orm"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db, communityComponents, componentReviews } from "@/lib/db"

const ADMIN_USERNAMES = (process.env.ADMIN_GITHUB_USERS ?? "AntonioKOD")
  .split(",")
  .map((s) => s.trim().toLowerCase())

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const username = (session as { user: { username?: string } }).user?.username?.toLowerCase()
  if (!username || !ADMIN_USERNAMES.includes(username)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { componentId, status, feedback } = await req.json()

  if (!componentId || !status) {
    return NextResponse.json({ error: "Missing componentId or status" }, { status: 400 })
  }

  const validStatuses = ["approved", "rejected", "changes_requested", "featured"]
  if (!validStatuses.includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 })
  }

  const updateData: Partial<typeof communityComponents.$inferInsert> = { status }
  if (status === "approved" || status === "featured") {
    updateData.approvedAt = new Date()
  }
  if (status === "featured") {
    updateData.featured = true
  }

  await db
    .update(communityComponents)
    .set(updateData)
    .where(eq(communityComponents.id, componentId))

  await db.insert(componentReviews).values({
    componentId,
    reviewerId: session.user.id,
    status,
    feedback:   feedback ?? null,
  })

  return NextResponse.json({ ok: true })
}
