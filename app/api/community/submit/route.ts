import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db, communityComponents } from "@/lib/db"

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await req.json()
  const { title, description, category, tags, componentCode, demoCode, dependencies } = body

  if (!title || !description || !category || !componentCode || !demoCode) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const slug = `${slugify(title)}-${Date.now().toString(36)}`

  try {
    const [component] = await db
      .insert(communityComponents)
      .values({
        authorId:      session.user.id,
        slug,
        title:         title.trim(),
        description:   description.trim(),
        category,
        tags:          tags ?? [],
        componentCode,
        demoCode,
        dependencies:  dependencies ?? [],
        status:        "pending",
      })
      .returning({ id: communityComponents.id, slug: communityComponents.slug })

    return NextResponse.json({ id: component.id, slug: component.slug }, { status: 201 })
  } catch (err) {
    console.error("DB insert error:", err)
    return NextResponse.json({ error: "Failed to submit component" }, { status: 500 })
  }
}
