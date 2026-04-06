"use client"

import { useEffect, useState } from "react"
import { Check, X, MessageSquare, ChevronDown, ChevronUp, Loader2, Eye, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface PendingComponent {
  id: string
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  component_code: string
  demo_code: string
  dependencies: string[]
  status: string
  view_count: number
  copy_count: number
  created_at: string
  author: {
    username: string
    name: string | null
    avatar_url: string | null
  }
}

export default function AdminReviewPage() {
  const [components, setComponents] = useState<PendingComponent[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [feedbackMap, setFeedbackMap] = useState<Record<string, string>>({})
  const [processingId, setProcessingId] = useState<string | null>(null)

  useEffect(() => {
    fetchQueue()
  }, [])

  async function fetchQueue() {
    setLoading(true)
    try {
      const res = await fetch("/api/admin/queue")
      if (res.ok) {
        const data = await res.json()
        setComponents(data)
      }
    } finally {
      setLoading(false)
    }
  }

  async function handleReview(componentId: string, status: string) {
    setProcessingId(componentId)
    try {
      const res = await fetch("/api/admin/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          componentId,
          status,
          feedback: feedbackMap[componentId] ?? null,
        }),
      })

      if (res.ok) {
        setComponents((prev) => prev.filter((c) => c.id !== componentId))
      } else {
        alert("Review failed")
      }
    } finally {
      setProcessingId(null)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="size-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="min-h-screen py-14">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-foreground">Review Queue</h1>
          <p className="mt-2 text-muted-foreground">
            {components.length} component{components.length !== 1 ? "s" : ""} pending review
          </p>
        </div>

        {components.length === 0 ? (
          <div className="py-20 text-center">
            <Check className="mx-auto mb-4 size-12 text-emerald-500" />
            <p className="text-lg font-medium">All caught up!</p>
            <p className="text-muted-foreground">No components pending review.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {components.map((comp) => (
              <div
                key={comp.id}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-4">
                    {comp.author.avatar_url ? (
                      <img src={comp.author.avatar_url} alt={comp.author.username} className="size-9 rounded-full" />
                    ) : (
                      <div className="flex size-9 items-center justify-center rounded-full bg-violet-500/20 text-sm font-bold text-violet-400">
                        {comp.author.username.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-foreground">{comp.title}</p>
                      <p className="text-xs text-muted-foreground">
                        by @{comp.author.username} · {comp.category} ·{" "}
                        {new Date(comp.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Stats */}
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Eye className="size-3" />{comp.view_count}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Copy className="size-3" />{comp.copy_count}
                    </span>

                    {/* Expand */}
                    <button
                      onClick={() => setExpandedId(expandedId === comp.id ? null : comp.id)}
                      className="ml-2 rounded-lg border border-border p-1.5 text-muted-foreground hover:bg-accent"
                    >
                      {expandedId === comp.id ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                    </button>

                    {/* Actions */}
                    <button
                      disabled={processingId === comp.id}
                      onClick={() => handleReview(comp.id, "approved")}
                      className="flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-500 disabled:opacity-50"
                    >
                      <Check className="size-3.5" />
                      Approve
                    </button>
                    <button
                      disabled={processingId === comp.id}
                      onClick={() => handleReview(comp.id, "featured")}
                      className="flex items-center gap-1 rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-violet-500 disabled:opacity-50"
                    >
                      ✦ Feature
                    </button>
                    <button
                      disabled={processingId === comp.id}
                      onClick={() => handleReview(comp.id, "changes_requested")}
                      className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground hover:bg-accent disabled:opacity-50"
                    >
                      <MessageSquare className="size-3.5" />
                      Changes
                    </button>
                    <button
                      disabled={processingId === comp.id}
                      onClick={() => handleReview(comp.id, "rejected")}
                      className="flex items-center gap-1 rounded-lg bg-red-600/10 px-3 py-1.5 text-xs text-red-400 hover:bg-red-600/20 disabled:opacity-50"
                    >
                      <X className="size-3.5" />
                      Reject
                    </button>
                  </div>
                </div>

                {/* Expanded */}
                {expandedId === comp.id && (
                  <div className="border-t border-border px-6 py-5">
                    <p className="mb-4 text-sm text-muted-foreground">{comp.description}</p>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Component Code</p>
                        <pre className="max-h-64 overflow-auto rounded-lg bg-zinc-950 p-3 text-xs text-zinc-300">
                          <code>{comp.component_code}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Demo Code</p>
                        <pre className="max-h-64 overflow-auto rounded-lg bg-zinc-950 p-3 text-xs text-zinc-300">
                          <code>{comp.demo_code}</code>
                        </pre>
                      </div>
                    </div>

                    {/* Feedback */}
                    <div className="mt-4">
                      <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Feedback (optional — sent with &quot;Changes Requested&quot;)
                      </p>
                      <textarea
                        rows={3}
                        value={feedbackMap[comp.id] ?? ""}
                        onChange={(e) =>
                          setFeedbackMap((prev) => ({ ...prev, [comp.id]: e.target.value }))
                        }
                        placeholder="What should the author change?"
                        className={cn(
                          "w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground",
                          "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50",
                        )}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
