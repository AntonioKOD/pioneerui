import { NextRequest, NextResponse } from "next/server"
import { eq, sql } from "drizzle-orm"
import { db, communityComponents } from "@/lib/db"

export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await db
      .update(communityComponents)
      .set({ copyCount: sql`${communityComponents.copyCount} + 1` })
      .where(eq(communityComponents.id, params.id))
  } catch (err) {
    console.error("Copy count error:", err)
  }

  return NextResponse.json({ ok: true })
}
