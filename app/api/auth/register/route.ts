import { connectDB } from "../lib/mongodb";
import User from "../models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  await connectDB();

  const existing = await User.findOne({ email });
  if (existing) {
    return new Response(JSON.stringify({ error: "El usuario ya existe" }), { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  return new Response(JSON.stringify({ message: "Usuario registrado" }), { status: 201 });
}