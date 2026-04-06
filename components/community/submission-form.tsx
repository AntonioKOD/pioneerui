"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion } from "motion/react"
import { ChevronRight, ChevronLeft, Check, Loader2, X } from "lucide-react"
import { cn } from "@/lib/utils"

const CATEGORIES = ["Button", "Card", "Background", "Effect", "Navigation", "Form", "Text", "Loader", "Other"]

const STEPS = [
  { label: "Info",         description: "Title, description, category" },
  { label: "Component",   description: "Your component source code" },
  { label: "Demo",        description: "Usage example code" },
  { label: "Review",      description: "Confirm & submit" },
]

interface FormState {
  title: string
  description: string
  category: string
  tags: string[]
  componentCode: string
  demoCode: string
  dependencies: string[]
}

export function SubmissionForm() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [tagInput, setTagInput] = useState("")
  const [depInput, setDepInput] = useState("")
  const [form, setForm] = useState<FormState>({
    title: "",
    description: "",
    category: "",
    tags: [],
    componentCode: "",
    demoCode: "",
    dependencies: [],
  })

  function update(key: keyof FormState, value: string | string[]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function addTag() {
    const tag = tagInput.trim().toLowerCase()
    if (tag && !form.tags.includes(tag) && form.tags.length < 5) {
      update("tags", [...form.tags, tag])
      setTagInput("")
    }
  }

  function removeTag(tag: string) {
    update("tags", form.tags.filter((t) => t !== tag))
  }

  function addDep() {
    const dep = depInput.trim()
    if (dep && !form.dependencies.includes(dep)) {
      update("dependencies", [...form.dependencies, dep])
      setDepInput("")
    }
  }

  function removeDep(dep: string) {
    update("dependencies", form.dependencies.filter((d) => d !== dep))
  }

  function canProgress() {
    if (step === 0) return form.title.trim() && form.description.trim() && form.category
    if (step === 1) return form.componentCode.trim().length > 50
    if (step === 2) return form.demoCode.trim().length > 10
    return true
  }

  async function handleSubmit() {
    setLoading(true)
    try {
      const res = await fetch("/api/community/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const err = await res.json()
        alert(err.error ?? "Submission failed")
        return
      }

      router.push("/community?submitted=1")
    } catch {
      alert("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Step indicator — layered track + fill approach */}
      <div className="relative mb-10 flex items-start justify-between">
        {/* Background track */}
        <div className="absolute left-0 right-0 top-[18px] h-px bg-border" />
        {/* Progress fill */}
        <div
          className="absolute left-0 top-[18px] h-px bg-violet-600 transition-all duration-500"
          style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}
        />
        {STEPS.map((s, i) => (
          <div key={s.label} className="relative z-10 flex flex-col items-center gap-2 bg-background px-1">
            <div
              className={cn(
                "flex size-9 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
                i < step
                  ? "border-violet-600 bg-violet-600 text-white"
                  : i === step
                    ? "border-violet-600 bg-background text-violet-600"
                    : "border-border bg-background text-muted-foreground",
              )}
            >
              {i < step ? <Check className="size-4" /> : i + 1}
            </div>
            <p className={cn("whitespace-nowrap text-xs font-medium", i === step ? "text-foreground" : "text-muted-foreground")}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Step panels with slide transitions */}
      <div className="rounded-2xl border border-border bg-card p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
        {step === 0 && (
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold">Component Info</h2>

            <Field label="Title *">
              <input
                type="text"
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                placeholder="e.g. Glassmorphism Card"
                className="input-base"
                maxLength={80}
              />
            </Field>

            <Field label="Description *">
              <textarea
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                placeholder="What does this component do?"
                rows={3}
                className="input-base resize-none"
                maxLength={300}
              />
            </Field>

            <Field label="Category *">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => update("category", cat.toLowerCase())}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-sm transition-colors",
                      form.category === cat.toLowerCase()
                        ? "bg-violet-600 text-white"
                        : "border border-border text-muted-foreground hover:bg-accent",
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Tags (max 5)">
              <div className="flex flex-wrap gap-1.5">
                {form.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 rounded-full bg-violet-500/10 px-2 py-0.5 text-xs text-violet-400"
                  >
                    {tag}
                    <button onClick={() => removeTag(tag)}><X className="size-2.5" /></button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  placeholder="Add a tag…"
                  className="input-base flex-1"
                />
                <button type="button" onClick={addTag} className="btn-outline-sm">
                  Add
                </button>
              </div>
            </Field>

            <Field label="npm Dependencies">
              <div className="flex flex-wrap gap-1.5">
                {form.dependencies.map((dep) => (
                  <span
                    key={dep}
                    className="flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {dep}
                    <button onClick={() => removeDep(dep)}><X className="size-2.5" /></button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={depInput}
                  onChange={(e) => setDepInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addDep())}
                  placeholder="e.g. framer-motion"
                  className="input-base flex-1 font-mono text-sm"
                />
                <button type="button" onClick={addDep} className="btn-outline-sm">
                  Add
                </button>
              </div>
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-xl font-semibold">Component Code</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Paste the full TSX/JSX source of your component.
              </p>
            </div>
            <textarea
              value={form.componentCode}
              onChange={(e) => update("componentCode", e.target.value)}
              placeholder={'// Your component source code\n"use client"\n\nexport function MyComponent() {\n  return <div>…</div>\n}'}
              rows={20}
              className="input-base resize-y font-mono text-sm"
              spellCheck={false}
            />
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-xl font-semibold">Demo Code</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Show how to use your component. Keep it minimal — just what&apos;s needed to see it work.
              </p>
            </div>
            <textarea
              value={form.demoCode}
              onChange={(e) => update("demoCode", e.target.value)}
              placeholder={'import { MyComponent } from "@/components/my-component"\n\nexport default function Demo() {\n  return <MyComponent />\n}'}
              rows={14}
              className="input-base resize-y font-mono text-sm"
              spellCheck={false}
            />
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-semibold">Review & Submit</h2>

            <dl className="flex flex-col gap-3 rounded-xl border border-border bg-muted/30 p-5 text-sm ring-1 ring-violet-500/10">
              <Row label="Title" value={form.title} />
              <Row label="Category" value={form.category} />
              <Row label="Tags" value={form.tags.join(", ") || "—"} />
              <Row label="Dependencies" value={form.dependencies.join(", ") || "—"} />
              <Row label="Description" value={form.description} />
              <Row label="Component code" value={`${form.componentCode.split("\n").length} lines`} />
              <Row label="Demo code" value={`${form.demoCode.split("\n").length} lines`} />
            </dl>

            <p className="text-sm text-muted-foreground">
              Your component will be reviewed before it goes public. We&apos;ll check for quality,
              accessibility, and originality.
            </p>
          </div>
        )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 0}
            className="btn-outline-sm flex items-center gap-1.5 disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
            Back
          </button>

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canProgress()}
              className="btn-primary flex items-center gap-1.5 disabled:opacity-50"
            >
              Next
              <ChevronRight className="size-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="btn-primary flex items-center gap-1.5 disabled:opacity-50"
            >
              {loading ? (
                <><Loader2 className="size-4 animate-spin" /> Submitting…</>
              ) : (
                <><Check className="size-4" /> Submit for Review</>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      {children}
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <dt className="w-32 shrink-0 text-muted-foreground">{label}</dt>
      <dd className="font-medium text-foreground">{value}</dd>
    </div>
  )
}
