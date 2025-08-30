import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json()
  console.log("Nuevo registro:", data)

  // Aquí deberías guardar en tu DB (ej. PostgreSQL con Prisma o Supabase)
  // Por ahora simulemos:
  return NextResponse.json({ ok: true })
}
