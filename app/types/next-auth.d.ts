// types/next-auth.d.ts
// next-auth.d.ts
import "next-auth";
import { DefaultSession, DefaultUser, DefaultJWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      name: string;
      email: string;      
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
      id: string;
      role: string;
      name: string;
      email: string; 
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
     id: string;
      role: string;
      name: string;
      email: string; 
  }
}