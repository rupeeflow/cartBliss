"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import CartIcon from "@/public/icons/CartIcon";

export default function Navbar() {
  return (
    <header className="fixed top-8 left-8 right-8 z-50 flex items-center justify-between px-8 py-4 bg-transparent text-white">
      <Link href="/" className="framer-1nsavxw flex items-center">
        <div className="relative text-2xl font-semibold">
          CALDER Co.
        </div>
      </Link>

      <div className="flex items-center gap-4 justify-between">
        <nav className="flex items-center justify-between gap-8 mr-">
        <Link href="/product" className="framer-ayT4U flex flex-col">
          <span className="text-2xl font-semibold hover:text-gray-300 transition">
            Product
          </span>
        </Link>

        {/* News */}
        <Link href="/news" className="framer-ayT4U flex flex-col">
          <span className="text-2xl font-semibold hover:text-gray-300 transition">
            News
          </span>
        </Link>

        {/* About with Icon */}
        <button className=" flex items-center gap-1">
          <span className="text-2xl font-semibold hover:text-gray-300 transition">
            About
          </span>
        </button>
      </nav>
      <CartIcon/>
      </div>
      
    </header>
  );
}
