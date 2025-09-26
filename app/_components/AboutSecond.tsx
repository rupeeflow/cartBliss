// components/AboutShowcase.tsx
"use client";

import Image from "next/image";

export default function AboutSecond() {
  return (
    <section className="w-full bg-white py-16">
      <div className="w-full mx-auto px-4 sm:px-6 ">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-[1.2vw] items-center">
          {/* Left text */}
          <div>
            <p className="flex h-[30vw] text-2xl md:text-[1.6vw] text-black leading-[1.2]">
              Each piece is designed to feel as good as it looks.
            </p>
          </div>

          {/* Images */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative w-full h-[80vh] md:h-[30vw]  overflow-hidden">
              <Image
                src="/images/look1.avif" // replace with your image
                alt="Model 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[80vh] md:h-[30vw]  overflow-hidden">
              <Image
                src="/images/look2.avif"
                alt="Model 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[80vh] md:h-[30vw]  overflow-hidden">
              <Image
                src="/images/look3.avif"
                alt="Model 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
