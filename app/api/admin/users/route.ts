import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { connectDB } from "../../auth/lib/mongodb";
import User from "../../auth/models/User";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  // Only allow admins
  if (!session || session.user?.role !== "admin") {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  await connectDB();
  const users = await User.find().lean();
  return new Response(JSON.stringify(Array.isArray(users) ? users : []), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}