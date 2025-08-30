"use client"

import { useEffect, useState } from "react"

type User = { id: string; name: string; email: string }

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch("/api/admin/users")
      .then(r => r.json())
      .then(data => {
      // Map _id to id for each user
      const usersWithId = data.map((u: any) => ({
        id: u._id?.toString() ?? "",
        name: u.name,
        email: u.email,
      }));
      setUsers(usersWithId);
    });
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("Texto copiado ✅")
  }

  return (
    <div className="pt-20 px-6">
      <h1 className="text-3xl font-bold mb-6">Panel de Administrador</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-lucuma-dark text-white">
            <th className="p-3">ID</th>
            <th className="p-3">Nombre</th>
            <th className="p-3">Email</th>
            <th className="p-3">Acción</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border-b">
              <td className="p-2">{u.id}</td>
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2">
                <button
                  onClick={() => copyToClipboard(`"Saludos ${u.name}! Gracias por acceder a la oportunidad de obtener un software funcional. Dentro de las próximas 12 horas recibirás un correo con las instrucciones a: ${u.email} , estamos felices por ti y tu progreso profesional. Habrá instrucciones para hacerlo más sencillo junto con el próximo correo. Atentamente, Equipo de Customer Success de LucumApp "`)}
                  className="px-3 py-1 bg-lucuma-dark text-white rounded hover:bg-lucuma transition"
                  type="button"
                >
                  Copiar Mensaje
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}