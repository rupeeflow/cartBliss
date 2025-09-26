// components/NewsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { CardSectionProps } from "@/app/_lib/typesInterfaces";

export default function NewsSection({
  title,
  description,
  cardData = [],
}: CardSectionProps) {
  return (
    <section className="relative z-6 w-full bg-white py-[6vw] pb-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-[3vw]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[6vw]">
          <h2 className="text-5xl md:text-[5vw] w-full md:w-[30%] text-black">
            {title}
          </h2>
          <p className="mt-4 md:mt-0 w-full md:w-[25%] text-justify text-gray-700 text-lg md:text-[1.4vw]">
            {description}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[1.4vw]">
          {cardData.map((item, idx) => (
            <Link href={item.link} key={idx} className="group cursor-pointer">
              <div className="relative w-full h-120 md:h-[38vw] overflow-hidden rounded-md bg-gray-200">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 text-lg md:text-[1.6vw] font-semibold text-black">
                {item.title}
              </h3>
              <p className="text-md md:text-[1.2vw] mt-2 md:mt-[0.6vw]  text-gray-600">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
