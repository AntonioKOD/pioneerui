import { NextResponse, type NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

const PROTECTED_PATHS = ["/submit", "/saved", "/admin"]

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|public|api/auth|[\\w-]+\\.\\w+).*)",
  ],
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isProtected = PROTECTED_PATHS.some((p) => pathname.startsWith(p))
  if (!isProtected) return NextResponse.next()

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (!token) {
    const signInUrl = new URL("/auth/signin", req.url)
    signInUrl.searchParams.set("callbackUrl", req.url)
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next()
}
