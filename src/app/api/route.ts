import { NextResponse } from "next/server";

export async function GET() {
  const data = [{ id: 1, name: "anjing", price: 1000 }];

  return NextResponse.json({ message: "success", status: 200, data });
}
