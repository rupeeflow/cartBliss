"use client";

import Image from "next/image";
import { motion, useTransform, useScroll } from "motion/react";
import React from "react";

export default function StyleSection() {
  const containerRef = React.useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleImage1 = useTransform(scrollYProgress, [0, 0.5], [0.1, 1]);
  const scaleImage2 = useTransform(scrollYProgress, [0.4, 0.6], [0.5, 1]);
  const scaleImage3 = useTransform(scrollYProgress, [0.3, 0.5], [0.4, 1]);
  const scaleImage4 = useTransform(scrollYProgress, [0.4, 1], [0.5, 1]);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col z-6 w-full min-h-[400dvh] bg-white flex "
    >
      <div className="w-full  sticky top-0 h-[100dvh] bg-white flex items-center justify-center ">
        <h1 className="text-6xl md:text-[7vw] text-center w-full md:w-[40%] text-black ">
          Style It <br /> Your Way
        </h1>
      </div>
      <motion.div
        style={{ scale: scaleImage1 }}
        className="absolute top-[25%] left-[35%] bg-gray-600 w-[28vw] h-[36vw]"
      >
        <Image
          src="/images/style1.avif"
          alt=""
          fill
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ scale: scaleImage2 }}
        className="absolute top-[42%] left-[75%] bg-gray-600 w-[24vw] h-[30vw]"
      >
        <Image
          src="/images/style2.avif"
          alt=""
          fill
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ scale: scaleImage3 }}
        className="absolute top-[45%] left-[2%] bg-gray-600 w-[28vw] h-[36vw]"
      >
        <Image
          src="/images/style3.avif"
          alt=""
          fill
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ scale: scaleImage4 }}
        className="absolute top-[65%] z-8 left-[30%] bg-gray-600 w-[40vw] h-[50vw]"
      >
        <Image
          src="/images/style4.avif"
          alt=""
          fill
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="w-full absolute z-5 bottom-0 h-[24vw] bg-white"></div>
    </section>
  );
}
