// components/NewsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    title: "Spring 2025 Essentials",
    description: "Polos and relaxed tailoring for the new season.",
    image: "/images/news1.avif",
    link: "#",
  },
  {
    title: "Calder Co. Pop-up Experience",
    description: "A temporary space dedicated to craftsmanship.",
    image: "/images/news2.avif",
    link: "#",
  },
  {
    title: "Responsible Fabric & Design",
    description: "Our sourcing process, from field to form.",
    image: "/images/news3.avif",
    link: "#",
  },
  {
    title: "Modern Forms, Updated Proportions",
    description: "How we reimagined tailoring for today’s pace.",
    image: "/images/news4.avif",
    link: "#",
  },
  {
    title: "Inside the Studio",
    description: "Where every stitch and seam is considered.",
    image: "/images/news5.avif",
    link: "#",
  },
  {
    title: "Quiet Colors, Confident Tones",
    description: "A refined palette, season after season.",
    image: "/images/news6.avif",
    link: "#",
  },
];

export default function NewsSection() {
  return (
    <section className="w-full bg-white py-[6vw] pb-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-[2vw]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[6vw]">
          <h2 className="text-[5vw]  text-black">Our News</h2>
          <p className="mt-4 md:mt-0 w-full md:w-[24%] text-justify text-gray-600 text-lg md:text-[1.3vw]">
            From new product drops to style tips — read our latest features,
            editorials, and brand announcements.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[1.4vw]">
          {newsItems.map((item, idx) => (
            <Link href={item.link} key={idx} className="group cursor-pointer">
              <div className="relative w-full h-120 md:h-[38vw] overflow-hidden rounded-md bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 text-lg md:text-[1.6vw] font-semibold text-black">
                {item.title}
              </h3>
              <p className="text-sm md:text-[1vw] text-gray-600">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
