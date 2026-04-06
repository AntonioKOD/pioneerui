import { NextResponse, type NextRequest } from "next/server"

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|public|api/auth|[\\w-]+\\.\\w+).*)",
  ],
}

export async function middleware(req: NextRequest) {
  return NextResponse.next()
}
