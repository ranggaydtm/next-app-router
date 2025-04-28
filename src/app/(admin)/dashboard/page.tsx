/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (session !== undefined && session?.user.role !== "admin") {
      router.push("/");
    }
  }, [router, session, session?.user.role, status]);

  return (
    <div className="h-96 flex justify-center items-center bg-gray-300 rounded-xl">
      <h1>Dashboard</h1>
    </div>
  );
}
