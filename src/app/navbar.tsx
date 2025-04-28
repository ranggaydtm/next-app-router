"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const { status }: { status: string } = useSession();

  return (
    <nav className="flex items-center justify-between bg-gray-800 px-5 py-4">
      <div className="flex gap-4">
        <span className="text-white">Navbar</span>
        <ul className="flex gap-3">
          <Link href="/">
            <li
              className={`${pathname === "/" ? "text-blue-300" : "text-white"}`}
            >
              Home
            </li>
          </Link>
          <Link href="/dashboard">
            <li
              className={`${
                pathname === "/dashboard" ? "text-blue-300" : "text-white"
              }`}
            >
              Dashboard
            </li>
          </Link>
          <Link href="/product">
            <li
              className={`${
                pathname === "/product" ? "text-blue-300" : "text-white"
              }`}
            >
              Product
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`${
                pathname === "/about" ? "text-blue-300" : "text-white"
              }`}
            >
              About
            </li>
          </Link>
          <Link href="/profile">
            <li
              className={`${
                pathname === "/profile" ? "text-blue-300" : "text-white"
              }`}
            >
              Profile
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <button
            className="px-4 py-1 bg-white rounded-sm cursor-pointer"
            onClick={() => signOut()}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-4 py-1 bg-white rounded-sm cursor-pointer"
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
