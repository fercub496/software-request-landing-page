"use client"
import { useState, useEffect } from "react"

interface Registro {
  nombre: string
  correo: string
  id: string
  codigo: string
  tipo: string
  pago: boolean
}

export default function DashboardPage() {
  const [data, setData] = useState<Registro[]>([])

  useEffect(() => {
    // aquí deberías hacer fetch a la DB real
    setData([
      { nombre: "Ana", correo: "ana@mail.com", id: "123", codigo: "DESC10", tipo: "nutricionista", pago: true }
    ])
  }, [])

  const generarTexto = (registro: Registro) => {
    return `Hola ${registro.nombre}, confirmamos tu pago. Monto recibido: S/100. ¡Bienvenido!`
  }

  return (
    <main className="min-h-screen bg-lucuma-light p-12">
      <h1 className="text-3xl font-bold text-lucuma mb-8">Dashboard</h1>
      <table className="w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="bg-lucuma text-white">
            <th className="p-3">Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Pago</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={i} className="border-b">
              <td className="p-3">{r.nombre}</td>
              <td>{r.correo}</td>
              <td>{r.tipo}</td>
              <td>{r.pago ? "✅" : "❌"}</td>
              <td>
                <button
                  onClick={() => navigator.clipboard.writeText(generarTexto(r))}
                  className="bg-lucuma-dark text-white px-3 py-1 rounded-lg"
                >
                  Copiar Texto
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
