"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })
    if (res?.ok) {
      // Redirige según rol
      const userData = await fetch("/api/auth/session").then(r => r.json())
      userData.user.role === "admin" ? router.push("/admin") : router.push("/dashboard")
    } else {
      alert("Credenciales incorrectas")
    }
  }

  return (
    <div className="min-h-screen bg-lucuma-light flex items-center justify-center p-4">
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Iniciar Sesión</h1>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-3 border rounded-xl"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-3 border rounded-xl"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-lucuma-dark text-white rounded-xl transition-colors duration-300 hover:text-yellow-400"
        >
          Entrar
        </button>
        <button className="w-full p-3 bg-lucuma-light text-black rounded-xl transition-colors duration-300 hover:text-black">
        <a href="/register">Registrarse</a>
        </button>
      </form>
      
    </div>
  )
}