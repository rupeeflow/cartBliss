// components/AboutSocial.tsx
"use client";

import Image from "next/image";

const socialImages = [
  { src: "/images/social1.avif", alt: "Social Look 1" },
  { src: "/images/social2.webp", alt: "Social Look 2" },
  { src: "/images/social3.webp", alt: "Social Look 3" },
  { src: "/images/social4.webp", alt: "Social Look 4" },
];

export default function AboutSocial() {
  return (
    <section className="w-full bg-white py-16 pb-40 md:pb-[12vw]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-[4vw] text-black mb-10 mb-[5vw]">
          Connect with us on Social
        </h2>

        {/* Images grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-[1.2vw]">
          {socialImages.map((item, idx) => (
            <div
              key={idx}
              className="relative group w-full cursor-pointer  h-42 md:h-[22vw] rounded-sm overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute flex items-center justify-center bg-black opacity-0 object-cover w-full h-full group-hover:opacity-[0.5] duration-300 ease-in-out">
                <Image
                  src="/images/insta.svg"
                  alt="Instagram logo"
                  height={40}
                  width={40}
                  className="opacity-0 group-hover:opacity-100"
                />{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
