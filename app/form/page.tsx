"use client"

import { useState } from "react"

export default function FormPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    id: "",
    codigo: "",
    tipo: "",
    pago: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement
    const { name, value, type } = target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? target.checked : value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await fetch("/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    alert("Datos enviados correctamente ✅")
  }

  return (
    <section className="bg-lucuma-light min-h-screen flex justify-center items-center py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-lucuma text-center">
          Registro
        </h2>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          value={formData.nombre}
          className="w-full p-3 border rounded-xl"
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          onChange={handleChange}
          value={formData.correo}
          className="w-full p-3 border rounded-xl"
          required
        />
        <input
          type="text"
          name="id"
          placeholder="ID"
          onChange={handleChange}
          value={formData.id}
          className="w-full p-3 border rounded-xl"
          required
        />
        <input
          type="text"
          name="codigo"
          placeholder="Código de descuento"
          onChange={handleChange}
          value={formData.codigo}
          className="w-full p-3 border rounded-xl"
        />

        <select
          name="tipo"
          onChange={handleChange}
          value={formData.tipo}
          className="w-full p-3 border rounded-xl"
          required
        >
          <option value="">Selecciona tu rol</option>
          <option value="nutricionista">Nutricionista</option>
          <option value="gym">Trabajador de Gym</option>
          <option value="estudiante">Estudiante de Salud</option>
          <option value="otro">Otro</option>
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="pago"
            onChange={handleChange}
            checked={formData.pago}
          />
          Confirmo que realicé el pago a la billetera virtual mostrada
        </label>

        <button
          type="submit"
          className="bg-lucuma-dark hover:bg-lucuma text-white w-full py-3 rounded-xl transition"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}