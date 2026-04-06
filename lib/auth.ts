import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  providers: [],

  session: { strategy: "jwt" },

  secret: process.env.NEXTAUTH_SECRET,
}
