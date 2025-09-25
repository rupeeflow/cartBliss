import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/landingImg1.avif"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>
      <div className='absolute bottom-2 left-8 right-0 flex items-end justify-between p-8'>
        <h1 className='text-white text-2xl font-bold'>Calder Co.</h1>
        <p className=' text- font-bold leading-snug text-white drop-shadow-lg md:text-7xl lg:text-8xl text-right'>
          <span className='block'>Timeless</span>
          <span className='block'>Wardrobe.</span>
        </p>
        <p className='text-xl font-bold leading-snug text-white drop-shadow-lg md:text-7xl lg:text-8xl text-right'>
          <span className='block'>Everyday</span>
          <span className='block'>Power</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;