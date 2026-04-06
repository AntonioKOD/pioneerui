import type { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import { db, profiles } from "@/lib/db"

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: { params: { scope: "read:user user:email" } },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider !== "github") return false

      try {
        const githubProfile = profile as { login: string; html_url: string; bio?: string }

        await db
          .insert(profiles)
          .values({
            id:        String(user.id),
            username:  githubProfile.login,
            name:      user.name ?? githubProfile.login,
            bio:       githubProfile.bio ?? null,
            avatarUrl: user.image ?? null,
            githubUrl: githubProfile.html_url,
          })
          .onConflictDoUpdate({
            target: profiles.id,
            set: {
              username:  githubProfile.login,
              name:      user.name ?? githubProfile.login,
              bio:       githubProfile.bio ?? null,
              avatarUrl: user.image ?? null,
              githubUrl: githubProfile.html_url,
              updatedAt: new Date(),
            },
          })
      } catch (err) {
        console.error("DB upsert error on sign-in:", err)
        // Don't block sign-in if DB isn't configured yet
      }

      return true
    },

    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }
      return session
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        const githubProfile = profile as { login: string }
        token.username = githubProfile.login
      }
      return token
    },
  },

  session: { strategy: "jwt" },

  pages: {
    signIn: "/auth/signin",
  },
}
