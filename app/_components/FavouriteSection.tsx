// components/NewsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductSectionProps } from "@/app/_lib/typesInterfaces";

export default function FavouriteSection({
  title,
  description,
  cardData = [],
}: ProductSectionProps) {
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
                {/* Default Image */}
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                />

                {/* Hover Image (only if provided) */}
                {item.hoverImageUrl && (
                  <Image
                    src={item.hoverImageUrl}
                    alt={`${item.title} hover`}
                    fill
                    className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
              </div>

              <h3 className="mt-4 text-lg md:text-[1.4vw] text-black">
                {item.title}
              </h3>
              <p className="text-md md:text-[1.2vw] text-gray-600">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
