import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isLogin = false;
  if (!isLogin) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  // if (req.nextUrl.pathname.startsWith("/about")) {
  //   // return NextResponse.rewrite(new URL("/product", req.url));
  // }
}

export const config = {
  matcher: ["/profile/detail", "/"],
};
