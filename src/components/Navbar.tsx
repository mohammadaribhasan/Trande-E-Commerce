import React from "react";
import Link from "next/link";
import { Bell, Home, ShoppingCart } from "lucide-react";
import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 py-4">
      {/* left */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Mart"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="text-md font-medium tracking-wider hidden md:block">
          TRENDLAMA
        </p>
      </Link>
      {/* Right */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Link href="/notifications">
          <Bell className="w-4 h-4 text-gray-600" />
        </Link>
        <Link href="/cart">
          <ShoppingCart className="w-4 h-4 text-gray-600" />
        </Link>
        <Link
          className="border-green-600 rounded-3xl p-2 bg-[#FFC83D] hover:scale-105 duration-300 text-black font-medium"
          href="login"
        >
          Sign in
        </Link>
      </div>
    </nav>
  );
}
