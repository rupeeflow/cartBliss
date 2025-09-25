// components/Navbar.tsx
"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo */}
          <div className="flex-shrink-0 text-lg font-semibold">Implycode</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-sm font-medium text-black hover:text-gray-600"
            >
              Product
            </a>
            <a
              href="#"
              className="text-sm font-medium text-black hover:text-gray-600"
            >
              News
            </a>
            <div className="relative group">
              <button className="text-sm font-medium text-black hover:text-gray-600 flex items-center">
                About <span className="ml-1 text-gray-400">+</span>
              </button>
              {/* Dropdown (optional, hidden by default) */}
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-lg p-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Our Story
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Team
                </a>
              </div>
            </div>
            <a href="#" className="relative">
              <ShoppingCart className="w-5 h-5" />
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
