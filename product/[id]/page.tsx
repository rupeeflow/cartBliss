"use client";
import { getProductById, mockProducts } from "@/lib/products";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function ProductDetailPage({ params }: PageProps) {
  const { id } = React.use(params);
  const product = getProductById(id);
  if (!product) {
    return (
      <div className="min-h-screen p-8">
        <div className="mb-4">
          <Link href="/product" className="underline">← Back to products</Link>
        </div>
        <h1 className="text-2xl font-semibold">Product not found</h1>
      </div>
    );
  }

  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.imageUrl];

  return (
    <div className="min-h-screen p-8">
      <header className="mb-8 flex items-center justify-between">
        <Link href="/product" className="underline">← Back to products</Link>
        <div className="text-xl font-bold">Calder Co.</div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Scrollable gallery */}
        <div className="lg:col-span-7">
          <div className="pr-2">
            <div className="flex flex-col gap-6">
              {gallery.map((src, idx) => (
                <div key={idx} className="w-full aspect-square bg-gray-100 overflow-hidden">
                  <img src={src} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Sticky details */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-10">
            <div className="text-sm text-gray-500 mb-1">{product.category}</div>
            <h1 className="text-4xl font-semibold mb-3">{product.name}</h1>
            <div className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</div>

            {/* Size selector */}
            <div className="mb-4">
              <div className="text-xs uppercase tracking-wide text-gray-600 mb-2">Size</div>
              <SizeSelector />
            </div>

            {/* Stock + Quantity + Add to Cart */}
            <PurchaseRow />

            {/* Accordions */}
            <div className="mt-8 divide-y">
              <AccordionItem title="Information">
                <p className="text-gray-700">
                  Effortless layering starts here. Crafted from a lightweight linen-cotton blend, this jacket offers a clean, refined silhouette that’s perfect for warm-weather days or breezy evenings.
                </p>
                <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
                  <li>Breathable linen blend for all-day comfort</li>
                  <li>Relaxed fit with clean lines and a modern collar</li>
                  <li>Full front zip closure for ease and versatility</li>
                  <li>Elasticated cuffs and hem for a casual touch</li>
                  <li>Slanted welt pockets for functionality</li>
                  <li>Unlined design – light, easy, and laid-back</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Dress it up with chinos or down with shorts — this piece transitions seamlessly from city strolls to weekend getaways.
                </p>
              </AccordionItem>

              <AccordionItem title="Benefit">
                <p className="text-gray-700">
                  Enjoy free shipping on orders over $75, 14-day hassle-free returns, 30-day product warranty, and round-the-clock customer support — designed to give you a worry-free shopping experience.
                </p>
              </AccordionItem>

              <AccordionItem title="Payment">
                <p className="text-gray-700">
                  Secure checkout via credit card, Apple Pay, and PayPal. All transactions are encrypted to ensure your privacy and safety.
                </p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </main>

      {/* You May Also Like */}
      <section className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2 className="text-5xl sm:text-6xl font-semibold leading-tight">
              You May
              <br />
              Also Like
            </h2>
          </div>
          <div className="lg:col-span-5 text-gray-600">
            Discover timeless essentials curated just for you. These elevated basics blend comfort and sophistication — ideal additions to your everyday wardrobe.
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(["JACKET", "TEE", "PANTS"] as const)
            .map((cat) => mockProducts.find((p) => p.category === cat))
            .filter(Boolean)
            .slice(0, 3)
            .map((p) => (
              <Link key={(p as any).id} href={`/product/${(p as any).id}`} className="block group">
                <div className="border border-gray-200 rounded overflow-hidden">
                  <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden">
                    <img src={(p as any).imageUrl} alt={(p as any).name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-gray-500">{(p as any).category}</div>
                    <div className="text-lg font-medium">{(p as any).name}</div>
                    <div className="text-lg font-semibold">${(p as any).price.toFixed(2)}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4">
      <button
        className="w-full flex items-center justify-between text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium">{title}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-flex"
        >
          <Plus size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden mt-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SizeSelector() {
  const sizes = ["Small", "Medium", "Large", "Extra Large"] as const;
  const [active, setActive] = useState<typeof sizes[number]>("Medium");
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {sizes.map((s) => (
        <button
          key={s}
          onClick={() => setActive(s)}
          className={`px-3 py-1 rounded border text-sm ${
            active === s ? "bg-black text-white border-black" : "bg-white text-gray-800 border-gray-300 hover:border-gray-400"
          }`}
        >
          {s}
        </button>
      ))}
    </div>
  );
}

function PurchaseRow() {
  const [qty, setQty] = useState(1);
  const stockLeft = 10;
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="text-gray-600 text-sm flex-1">{stockLeft} left in stock</div>
      <div className="flex items-center border rounded px-2 py-2">
        <button
          onClick={() => setQty((n) => Math.max(1, n - 1))}
          className="px-2 text-lg block"
          aria-label="Decrease quantity"
        >
          –
        </button>
        <div className="w-8 text-center">{qty}</div>
        <button
          onClick={() => setQty((n) => n + 1)}
          className="px-2 text-lg"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button className="flex-[2] bg-black text-white py-3 rounded">Add to Cart</button>
      
    </div>
  );
}


