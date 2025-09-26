"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function HomeHero() {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const fullText = "CartBliss";

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);

        // wait 1 second before hiding cursor
        setTimeout(() => setDone(true), 1000);
      }
    }, 120); // typing speed (ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="w-full h-[100dvh] fixed top-0">
      {/* Background Image */}
      <div className="flex w-full h-full overflow-hidden relative z-1">
        <Image
          src="/images/landingImg1.avif"
          alt="Hero Image"
          fill
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <motion.div
        style={{ y: yText }}
        className="absolute top-[24%] z-5 w-full h-full flex justify-between items-end p-10 md:p-[4vw]"
      >
        {/* Typewriter Title */}
        <h1 className="text-white text-4xl md:text-[6vw]">
          {text}
          {!done && <span className="animate-pulse ml-1">|</span>}
        </h1>

        {/* Subtitle with Framer Motion */}
        <motion.p
          className="text-white text-2xl lg:text-right md:text-[2.5vw]"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        >
          Timeless Wardrobe <br /> Everyday Power
        </motion.p>
      </motion.div>
    </section>
  );
}
