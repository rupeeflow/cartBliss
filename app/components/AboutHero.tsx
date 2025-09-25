// app/about/page.tsx  (or components/AboutSection.tsx)
"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="w-full bg-white ">
      {/* Top section: image + text */}
      <div className="relative w-full h-[68vw] bg-white">
        <div className="absolute bg-white left-[24%] top-[15%] z-5 w-[40vw] h-[55vw] overflow-hidden">
          <Image
            src="/images/aboutTop.avif"
            alt="Built for Men Who Move Forward"
            fill
            className="object-cover w-full h-full "
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between absolute top-[20%] z-10 w-full px-[4vw] gap-12 bg-black mix-blend-difference">
          <h2 className="w-[40%] h-[30vw] items-start text-4xl sm:text-5xl text-white leading-tight ">
            Built for Men Who Move Forward
          </h2>
          <div className="flex flex-col justify-end h-[30vw] w-[50%] font-medium space-y-4 ">
            <p className=" text-white text-md md:text-[1.6vw]  sm:text-base leading-tight">
              Implycode was founded with a simple belief — that modern menswear
              should be effortless, versatile, and quietly powerful.
            </p>
            <p className="text-white text-md md:text-[1.6vw]  sm:text-base leading-tight">
              We design essential pieces for the everyday man: clean
              silhouettes, quality materials, and perfect fits. No trends. Just
              timeless utility.
            </p>
          </div>
        </div>
      </div>

      {/* Middle section: Mission statement */}
      <div className="text-center w-full mx-auto px-[4vw] py-[10vw]">
        <h3 className="w-[90%] text-3xl md:text-[4vw] font-light text-left text-black leading-[1.1]">
          Our mission is to help men dress with ease and intention — whether
          it's a Monday meeting or a Sunday afternoon.
        </h3>
      </div>

      {/* Bottom section: small image */}
      <div className="flex justify-center h-[30vw] w-full mt-10">
        <div className="relative w-64 h-64  overflow-hidden">
          <Image
            src="/images/about2.avif"
            alt="Men style"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
