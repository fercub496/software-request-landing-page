import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  experimental: { appDir: true },
  matcher: ["/admin/:path*", "/dashboard/:path*", "/(?!api/auth|_next|login).*"],
};
export default nextConfig;
