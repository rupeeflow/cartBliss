// components/EssentialsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { CardSectionProps } from "../_lib/typesInterfaces";

export default function EssentialsSection({
  title,
  description,
  cardData = [],
}: CardSectionProps) {
  return (
    <section className="flex relative z-8 w-full bg-white py-60 md:py-[12vw] mt-[101dvh]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section: title + description */}
        <div className="flex flex-col w-full md:flex-row justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-[5vw] text-black leading-tighter w-full md:w-[20%]">
            {title}
          </h2>
          <p className="text-gray-700  text-md md:text-[1.4vw] w-full md:w-[28%] ">
            {description}
          </p>
        </div>

        {/* Grid of items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-[2vw]">
          {cardData.map((item, idx) => (
            <Link href={item.link} key={idx} className="flex flex-col">
              <div className="group relative w-full lg:h-[50vw] overflow-hidden rounded-sm">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute flex items-center justify-center bg-black opacity-0 object-cover w-full h-full group-hover:opacity-[0.3] duration-300 ease-in-out"></div>
              </div>
              <p className="mt-2 text-lg md:text-[2vw] text-gray-700">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
