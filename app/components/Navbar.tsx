// components/Navbar.tsx
"use client";

import { useState } from "react";
import { ShoppingCart, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" w-full py-4 md:py-[1vw]  mix-blend-difference bg-black fixed top-0 z-99 ">
      <div className=" max-w-full mx-auto px-4 sm:px-6 lg:px-[2vw]">
        <div className="flex justify-between items-center ">
          {/* Left - Logo */}
          <Link
            href="/"
            className="flex-shrink-0 text-white text-3xl md:text-[4vw] lg:text-[2vw] font-regular"
          >
            CartBliss
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12 md:space-x-[3vw]">
            <Link
              href="/"
              className="text-2xl md:text-[1.6vw] font-medium text-white hover:text-gray-400"
            >
              Product
            </Link>
            <Link
              href="/news"
              className="text-2xl md:text-[1.6vw] font-medium text-white hover:text-gray-400"
            >
              News
            </Link>

            <div className="flex group  relative">
              {" "}
              <button className="text-2xl md:text-[1.6vw] font-medium text-white hover:text-gray-400 flex items-center">
                About{" "}
                <span className="ml-1 ">
                  <ChevronDown />
                </span>
              </button>
              {/* Dropdown (optional, hidden by default) */}
              <div className="absolute border top-[80%] right-0 w-40 bg-black shadow-md mt-2 rounded-lg p-2 group-hover:block mix-blend-normal hidden">
                <Link
                  href="/about"
                  className="block text-gray-500 px-4 py-2 text-[1.5vw] hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-500 px-4 py-2 text-[1.5vw] hover:text-white"
                >
                  Contact
                </Link>
                <Link
                  href="/support"
                  className="block text-gray-500 px-4 py-2 text-[1.5vw] hover:text-white"
                >
                  Support
                </Link>
              </div>
            </div>

            <a href="#" className="relative">
              <ShoppingCart color="white" size={30} />
              <span className="absolute -top-2 -right-2 text-xs font-semibold bg-white text-black rounded-full px-1">
                0
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{ mixBlendMode: "normal" }}
          className="lg:hidden w-[50vw] h-[100dvh] bg-white px-4 pb-4 space-y-2"
        >
          <a
            href="/product"
            className="block text-[4rem] border-b font-medium text-black hover:text-gray-600"
          >
            Product
          </a>
          <a
            href="/news"
            className="block text-[4rem] border-b font-medium text-black hover:text-gray-600"
          >
            News
          </a>
          <a
            href="/about"
            className="block text-[4rem] border-b font-medium text-black hover:text-gray-600"
          >
            About
          </a>
          <a
            href="/contact"
            className="block text-[4rem] border-b font-medium text-black hover:text-gray-600"
          >
            Contact
          </a>
          <a
            href="/support"
            className="block text-[4rem] border-b font-medium text-black hover:text-gray-600"
          >
            Support
          </a>
          <a href="#" className="flex mt-20 items-center space-x-1">
            <ShoppingCart color="black" size={90} />
            <span className="text-sm font-medium">Cart (0)</span>
          </a>
        </div>
      )}
    </nav>
  );
}
