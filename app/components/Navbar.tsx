// components/Navbar.tsx
"use client";

import { useState } from "react";
import { ShoppingCart, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo */}
          <div className="flex-shrink-0 text-gray-600 text-3xl font-semibold">
            CartBliss
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-2xl font-bold text-black hover:text-gray-600"
            >
              Product
            </Link>
            <Link
              href="/news"
              className="text-2xl font-bold text-black hover:text-gray-600"
            >
              News
            </Link>

            <div className="flex group  relative">
              {" "}
              <button className="text-2xl font-bold text-black hover:text-gray-600 flex items-center">
                About{" "}
                <span className="ml-1 ">
                  <ChevronDown />
                </span>
              </button>
              {/* Dropdown (optional, hidden by default) */}
              <div className="absolute top-[80%] w-40 bg-white shadow-md mt-2 rounded-lg p-2 group-hover:block  hidden">
                <Link
                  href="#"
                  className="block text-gray-600 px-4 py-2 text-lg hover:bg-gray-100"
                >
                  Our Story
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 px-4 py-2 text-lg hover:bg-gray-100"
                >
                  Team
                </Link>
              </div>
            </div>

            <a href="#" className="relative">
              <ShoppingCart color="black" size={30} />
              <span className="absolute -top-2 -right-2 text-xs font-semibold bg-black text-white rounded-full px-1">
                0
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-black"
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
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a
            href="#"
            className="block text-sm font-medium text-black hover:text-gray-600"
          >
            Product
          </a>
          <a
            href="#"
            className="block text-sm font-medium text-black hover:text-gray-600"
          >
            News
          </a>
          <a
            href="#"
            className="block text-sm font-medium text-black hover:text-gray-600"
          >
            About
          </a>
          <a href="#" className="flex items-center space-x-1">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-sm font-medium">Cart (0)</span>
          </a>
        </div>
      )}
    </nav>
  );
}
