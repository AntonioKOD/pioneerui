import { NextRequest, NextResponse } from "next/server"
import { and, eq, sql } from "drizzle-orm"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db, communityComponents, componentSaves } from "@/lib/db"

export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const userId      = session.user.id
  const componentId = params.id

  const [existing] = await db
    .select()
    .from(componentSaves)
    .where(and(eq(componentSaves.userId, userId), eq(componentSaves.componentId, componentId)))
    .limit(1)

  if (existing) {
    await db
      .delete(componentSaves)
      .where(and(eq(componentSaves.userId, userId), eq(componentSaves.componentId, componentId)))

    await db
      .update(communityComponents)
      .set({ saveCount: sql`${communityComponents.saveCount} - 1` })
      .where(eq(communityComponents.id, componentId))

    return NextResponse.json({ saved: false })
  } else {
    await db.insert(componentSaves).values({ userId, componentId })

    await db
      .update(communityComponents)
      .set({ saveCount: sql`${communityComponents.saveCount} + 1` })
      .where(eq(communityComponents.id, componentId))

    return NextResponse.json({ saved: true })
  }
}
