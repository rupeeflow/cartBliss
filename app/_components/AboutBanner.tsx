"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const AboutBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // start when it enters viewport, end when it leaves
  });

  const scaleimage = useTransform(scrollYProgress, [0, 1], [1.4, 1]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section
      ref={containerRef}
      className="w-full relative overflow-hidden bg-white py-30 md:py-[10vw]"
    >
      <motion.div
        style={{ scale: scaleimage }}
        className="w-full  h-120 md:h-[46vw] bg-gray-200 overflow-hidden relative"
      >
        <Image
          src="/images/aboutbanner.webp"
          alt="About Banner"
          fill
          className="object-cover w-full h-full"
        />
      </motion.div>
      <motion.div
        style={{ scale: scaleText }}
        className="flex justify-between absolute top-[62%] w-full px-[2vw]"
      >
        <h2 className="text-white w-[20vw] text-3xl md:text-[4vw]">
          Craft & Quality Section
        </h2>
        <p className="text-white  text-xl md:text-[1.6vw] w-[30vw]">
          We work with responsible partners and hand-pick fabrics that balance
          structure with softness. Our clothes are made to move with you, last
          longer, and simplify your daily choices.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutBanner;
