// components/NewsSection.tsx
"use client";

import Image from "next/image";

const newsItems = [
  {
    title: "Spring 2025 Essentials",
    description: "Polos and relaxed tailoring for the new season.",
    image: "/images/news1.jpg", // replace with real images
  },
  {
    title: "Calder Co. Pop-up Experience",
    description: "A temporary space dedicated to craftsmanship.",
    image: "/images/news2.jpg",
  },
  {
    title: "Responsible Fabric & Design",
    description: "Our sourcing process, from field to form.",
    image: "/images/news3.jpg",
  },
  {
    title: "Modern Forms, Updated Proportions",
    description: "How we reimagined tailoring for today’s pace.",
    image: "/images/news4.jpg",
  },
  {
    title: "Inside the Studio",
    description: "Where every stitch and seam is considered.",
    image: "/images/news5.jpg",
  },
  {
    title: "Quiet Colors, Confident Tones",
    description: "A refined palette, season after season.",
    image: "/images/news6.jpg",
  },
];

export default function NewsSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-[5vw] font-medium text-black">Our News</h2>
          <p className="mt-4 md:mt-0 max-w-[30%] text-justify text-gray-600 text-lg">
            From new product drops to style tips — read our latest features,
            editorials, and brand announcements.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <div key={idx} className="group">
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-black">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
