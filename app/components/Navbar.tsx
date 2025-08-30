"use client"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-lucuma-dark text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold transition-colors duration-300 hover:text-yellow-400">LucumApp</Link>

      {/* Botón hamburguesa */}
      <button
        className="md:hidden text-white focus:outline-none transition-colors duration-300 hover:text-yellow-400"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </button>

      {/* Links desktop */}
      <ul className="hidden md:flex space-x-6">
        <li><Link href="/" className="transition-colors duration-300 hover:text-yellow-400">Inicio</Link></li>
        <li><Link href="#funcionalidades" className="transition-colors duration-300 hover:text-yellow-400">Funcionalidades</Link></li>
        <li><Link href="#testimonios" className="transition-colors duration-300 hover:text-yellow-400">Testimonios</Link></li>
        <li><Link href="/login" className="transition-colors duration-300 hover:text-yellow-400">Login</Link></li>
        <li><Link href="/register" className="transition-colors duration-300 hover:text-yellow-400">Registrarse</Link></li>
        <li><Link href="/form" className="transition-colors duration-300 hover:text-yellow-400">Formulario</Link></li>
      </ul>

      {/* Menú móvil */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-lucuma-dark flex flex-col items-center space-y-4 py-6 md:hidden transition-colors duration-300">
          <li><Link href="/" className="hover:text-yellow-400 transition-colors duration-300" onClick={() => setOpen(false)}>Inicio</Link></li>
          <li><Link href="#funcionalidades" className="hover:text-yellow-400 transition-colors duration-300" onClick={() => setOpen(false)}>Funcionalidades</Link></li>
          <li><Link href="#testimonios" className="hover:text-yellow-400 transition-colors duration-300" onClick={() => setOpen(false)}>Testimonios</Link></li>
          <li><Link href="/login" className="hover:text-yellow-400 transition-colors duration-300" onClick={() => setOpen(false)}>Login</Link></li>
          <li><Link href="/register" className="hover:text-yellow-400 transition-colors duration-300" onClick={() => setOpen(false)}>Registrarse</Link></li>
          <li><Link href="/form" className="hover:text-yellow-400 transition-colors duration-300" onClick={() => setOpen(false)}>Formulario</Link></li>
        </ul>
      )}
    </nav>
  )
}
