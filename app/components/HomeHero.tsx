import Image from "next/image";

export default function HomeHero() {
  return (
    <section className=" w-full h-[100dvh] fixed top-0">
      <div className="flex w-full h-full overflow-hidden relative z-1">
        <Image
          src="/images/landingImg1.avif"
          alt="Hero Image"
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 z-5 w-full h-full flex justify-between items-end p-10 md:p-[4vw]">
        <h1 className="text-white text-4xl md:text-[6vw]">CartBliss</h1>
        <p className="text-white text-2xl lg:text-right md:text-[2.5vw]">
          Timeless Wardrobe <br /> Everyday Power
        </p>
      </div>
    </section>
  );
}
