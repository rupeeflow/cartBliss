"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const infoSections = [
  {
    title: "Orders & Payments",
    description:
      "You can track the real-time status of your order through your account dashboard, view complete purchase history, and receive updates via email. At checkout, choose from a wide range of secure payment options, including major credit cards, digital wallets, and other trusted services.",
  },
  {
    title: "Shipping & Delivery",
    description:
      "We provide free shipping for all domestic orders over $75. Most orders are processed within 1–2 business days and delivered within 3–7 days using reputable logistics partners. You'll receive a tracking number once your order ships so you can monitor every step of its journey.",
  },
  {
    title: "Returns & Warranty",
    description:
      "If something isn’t quite right, we’ve got you covered. Return any unused items within 14 days for a full refund, no questions asked. All products also come with a 30-day warranty against defects in materials or workmanship. Return shipping is easy and guided step-by-step.",
  },
  {
    title: "Sizing & Product Info",
    description:
      "Each product page includes detailed sizing charts, fit recommendations, and fabric information. This helps you choose the right product and take proper care of it for long-lasting quality.",
  },
];

const faqs = [
  { q: "What is the delivery time for my order?", a: "Delivery typically takes 3-7 business days after processing. You’ll also receive a tracking number to monitor your order." },
  { q: "How do I return a product?", a: "You can return unused items within 14 days for a full refund. Simply log in to your account to initiate a return." },
  { q: "Do you offer international shipping?", a: "Yes, we ship worldwide. Shipping times and rates vary depending on location." },
  { q: "What if my item is damaged or defective?", a: "We’ll replace or refund defective items at no extra cost. Please contact support with photos of the product." },
  { q: "Where can I find size and care info?", a: "All product pages include detailed sizing charts and care instructions." },
];

const Accordion = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between items-center py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-2">
          <span className="text-gray-400 font-medium w-6">{String(index + 1).padStart(2, "0")}.</span>
          <span className="text-lg">{q}</span>
        </span>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden pl-10 pb-4 text-gray-600"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function SupportPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
      {/* Info Section */}
      <section className="grid md:grid-cols-2 gap-12">
        {infoSections.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="text-gray-500 font-medium">{item.title}</h3>
            <p className="text-lg text-gray-800">{item.description}</p>
          </motion.div>
        ))}
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="divide-y">
          {faqs.map((faq, i) => (
            <Accordion key={i} index={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </div>
  );
}
