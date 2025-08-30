export async function GET() {
  // Aquí obtendrías el session.user.id y buscarías en tu BD
  const fakeOrder = { status: "En preparación" }
  return new Response(JSON.stringify(fakeOrder), { status: 200 })
}