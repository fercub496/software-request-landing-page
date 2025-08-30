"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
    if (res.ok) {
      router.push("/login")
    } else {
      const data = await res.json()
      setError(data.error || "Error al registrar")
    }
  }

  return (
    <div className="min-h-screen bg-lucuma-light flex items-center justify-center p-4">
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Registrarse</h1>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-3 border rounded-xl"
          required
        />
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
          className="w-full py-3 bg-lucuma-dark text-white rounded-xl transition-colors duration-300 hover:text-black"
        >
          Registrarse
        </button>
      </form>
    </div>
  )
}