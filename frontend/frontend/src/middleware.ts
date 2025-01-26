import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  
  if (!token) {
    const url = new URL("/login", req.url);
    url.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // "/main/:path*",
    // Add other protected routes here as they are created
  ],
};