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
  const scaleImage3 = useTransform(scrollYProgress, [0.5, 0.7], [0.4, 1]);
  const scaleImage4 = useTransform(scrollYProgress, [0.7, 1], [0.5, 1]);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col z-6 w-full min-h-[400dvh] bg-white flex "
    >
      <div className="w-full  sticky top-0 h-[100dvh] bg-white flex items-center justify-center">
        <h1 className="text-5xl md:text-[5vw] text-center w-full md:w-[30%] text-black ">
          Style It <br /> Your Way
        </h1>
      </div>
      <motion.div
        style={{ scale: scaleImage1 }}
        className="absolute top-[30%] left-[35%] bg-gray-600 w-[28vw] h-[36vw]"
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
        className="absolute top-[50%] left-[70%] bg-gray-600 w-[24vw] h-[30vw]"
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
        className="absolute top-[60%] left-[5%] bg-gray-600 w-[24vw] h-[30vw]"
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
        className="absolute top-[80%] left-[30%] bg-gray-600 w-[36vw] h-[55vw]"
      >
        <Image
          src="/images/style4.avif"
          alt=""
          fill
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
