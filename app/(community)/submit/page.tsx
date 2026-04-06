import { Metadata } from "next"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { SubmissionForm } from "@/components/community/submission-form"

export const metadata: Metadata = {
  title: "Submit a Component | Pioneer UI",
  description: "Share your animated React component with the Pioneer UI community.",
}

export default async function SubmitPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/submit")
  }

  return (
    <div className="min-h-screen py-14">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Submit a Component
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Share your work with the community. Once reviewed and approved, your component will be
            visible to everyone on Pioneer UI.
          </p>
        </div>

        <SubmissionForm />
      </div>
    </div>
  )
}
