// components/FAQ.tsx
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // for + / - icons

const faqs = [
  {
    question: "What is the delivery time for my order?",
    answer:
      "Most orders are processed within 1–2 business days and arrive in 3–7 days via trusted shipping partners.",
  },
  {
    question: "How do I return a product?",
    answer:
      "You can return any unused items within 14 days. Just follow our return instructions and use the original packaging.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship internationally to selected countries. Shipping times and costs vary depending on your location. Duties and taxes may apply.",
  },
  {
    question: "What if my item is damaged or defective?",
    answer:
      "If you receive a defective item, please contact our support team within 7 days. We’ll arrange a replacement or a full refund.",
  },
  {
    question: "Where can I find size and care info?",
    answer:
      "Each product page includes detailed size charts and care instructions. If you need further assistance, our support team can guide you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-40 md:py-[20vw]">
      <div className="flex flex-col justify-between md:flex-row w-full mx-auto px-4 sm:px-6 lg:px-[5vw]  gap-10 md:gap-[20vw] items-start">
        {/* Left - Heading */}
        <div>
          <h2 className="w-full md:w-[10vw] text-4xl sm:text-5xl md:text-[4vw] text-black leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Right - FAQ List */}
        <div className=" space-y-6 w-full md:w-[60%]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer border-b pb-4 transition-height duration-300 ease-in-out ${
                openIndex === index ? "h-[8vw]" : "h-[4vw]"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex cursor-pointer justify-between items-center text-left"
              >
                <span className="flex w-full items-center gap-4 text-gray-800">
                  <span className="text-gray-400 font-medium w-6">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <span className="w-full text-md relative z-4 bg-white md:text-[1.4vw] sm:text-base">
                    {faq.question}
                  </span>
                </span>
                <Plus
                  className={`block h-5 w-5 text-gray-600 duration-300 ease-in-out ${
                    openIndex === index ? "rotate-[-45deg]" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p
                  className={`mt-3 absolute z-1 top-0 text-sm  text-gray-600 leading-relaxed px-10 transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "translate-y-[2vw]" : "translate-y-0"
                  }`}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
