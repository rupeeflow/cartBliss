"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Filter, ArrowUpDown } from "lucide-react";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  hoverImageUrl?: string;
};

type ProductPageProps = {
  products: Product[];
};

const SORT_OPTIONS = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

const CATEGORIES = ["All", "JACKET", "TEE", "PANTS", "SHORTS", "SHIRTS", "POLO"];

export function ProductPage({ products }: ProductPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const filtered = useMemo(() => {
    let arr = products;
    if (selectedCategory !== "All") {
      arr = arr.filter((p) => p.category === selectedCategory);
    }
    if (sortOption === "price-asc") {
      arr = [...arr].sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      arr = [...arr].sort((a, b) => b.price - a.price);
    }
    return arr;
  }, [products, selectedCategory, sortOption]);

  const currentSortLabel =
    SORT_OPTIONS.find((s) => s.value === sortOption)?.label ?? "Default";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full py-6 px-8 bg-white shadow-sm">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">Calder Co.</div>
          <div className="space-x-4">
            <a href="/product" className="hover:underline">Product</a>
            <a href="/news" className="hover:underline">News</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-grow px-8 py-10">
        {/* Title + Right Description */}
        <section className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h1 className="text-7xl sm:text-8xl  leading-tight">All Products</h1>
            </div>
            <div className="lg:col-span-5 text-gray-600">
              From crisp polos to everyday jeans — explore the full range of modern menswear designed for comfort, style, and movement.
            </div>
          </div>
        </section>

        {/* Filter + Sort */}
        <section className="flex items-center justify-start gap-6 mb-6 relative z-20">
          {/* Filter Dropdown */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="flex items-center gap-2 text-gray-700 hover:text-black border px-3 py-2 rounded-md text-sm">
                <Filter size={16} />
                <span>
                  Filter by <strong>{selectedCategory}</strong>
                </span>
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align="start"
                className="mt-2 w-40 rounded-md bg-white shadow-md border border-gray-200 py-1 z-50"
              >
                {CATEGORIES.map((cat) => (
                  <DropdownMenu.Item
                    key={cat}
                    onSelect={() => setSelectedCategory(cat)}
                    className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                      selectedCategory === cat ? "font-semibold text-black" : "text-gray-700"
                    }`}
                  >
                    {cat}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          {/* Sort Dropdown */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="flex items-center gap-2 text-gray-700 hover:text-black border px-3 py-2 rounded-md text-sm">
                <ArrowUpDown size={16} />
                <span>
                  Sort by <strong>{currentSortLabel}</strong>
                </span>
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align="start"
                className="mt-2 w-48 rounded-md bg-white shadow-md border border-gray-200 py-1 z-50"
              >
                {SORT_OPTIONS.map((opt) => (
                  <DropdownMenu.Item
                    key={opt.value}
                    onSelect={() => setSortOption(opt.value)}
                    className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                      sortOption === opt.value ? "font-semibold text-black" : "text-gray-700"
                    }`}
                  >
                    {opt.label}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </section>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((p) => (
            <Link key={p.id} href={`/product/${p.id}`} className="block">
              <motion.div
                className="group border border-gray-200 rounded overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-full aspect-[4/5] bg-gray-100 relative overflow-hidden">
                {/* Default Image */}
                <motion.img
                  src={p.imageUrl}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Hover Image */}
                {p.hoverImageUrl && (
                  <motion.img
                    src={p.hoverImageUrl}
                    alt={`${p.name} hover`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">{p.name}</h3>
                    <div className="text-lg font-semibold">${p.price.toFixed(2)}</div>
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">{p.category}</div>
                </div>
              </motion.div>
            </Link>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 px-8 text-center text-gray-600">
        <div className="mb-4">
          <a href="/collection" className="mx-2 hover:underline">Collection</a>
          <a href="/product" className="mx-2 hover:underline">Product</a>
          <a href="/about" className="mx-2 hover:underline">About</a>
          <a href="/news" className="mx-2 hover:underline">News</a>
          <a href="/contact" className="mx-2 hover:underline">Contact</a>
          <a href="/support" className="mx-2 hover:underline">Support</a>
        </div>
        <div className="mb-2">
          Social:
          <a href="https://facebook.com" className="underline mx-1">Facebook</a>
          <a href="https://instagram.com" className="underline mx-1">Instagram</a>
          <a href="https://x.com" className="underline mx-1">X/Twitter</a>
        </div>
        <div>© 2025 Calder Co. All rights reserved</div>
        <div className="text-sm">Design by Mino</div>
      </footer>
    </div>
  );
}
