import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  // 1) Obtiene el token de la cookie
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const { pathname } = req.nextUrl

  // 2) Permitir rutas públicas
  const publicPaths = ["/login", "/api/auth", "/_next"]
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // 3) Si no hay token → redirige a login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  // 4) Ruta de admin sólo para role = "admin"
  if (pathname.startsWith("/admin") && token.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return NextResponse.next()
}