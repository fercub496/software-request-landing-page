"use client"

import { useEffect, useState } from "react"

export default function UserPage() {
  const [order, setOrder] = useState<{ status: string }>({ status: "" })

  useEffect(() => {
    fetch("/api/user/order")
      .then(r => r.json())
      .then(setOrder)
  }, [])

  return (
    <div className="pt-20 px-6">
      <h1 className="text-3xl font-bold mb-6">Mi Pedido</h1>
      <p className="text-lg">
        Estado actual:{" "}
        <span className="font-semibold text-lucuma-dark">{order.status}</span>
      </p>
    </div>
  )
}
