// components/ContactInfo.tsx
"use client";

export default function ContactInfo() {
  return (
    <section className="w-full bg-white py-16 md:py-[10vw] md:pb-[10vw]">
      <div className="flex flex-col md:flex-row w-full mx-auto px-4 sm:px-6 lg:px-8  gap-10 items-start">
        {/* Left Side - Heading */}
        <div>
          <h2 className="text-4xl w-full md:w-[40vw] text-black sm:text-5xl md:text-[5vw]">
            Contact
          </h2>
        </div>

        {/* Right Side - Info */}
        <div className="space-y-8 md:space-y-[4vw] text-gray-800">
          {/* Address */}
          <div>
            <h3 className="text-md md:text-[1.2vw] font-semibold text-gray-500">
              Address
            </h3>
            <p className="mt-1 text-sm md:text-[1.4vw] text-black">
              1389 Market Street, Suite 300. <br />
              San Francisco, CA 94103, USA
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-md md:text-[1.2vw] font-semibold text-gray-500">
              Hours
            </h3>
            <p className="mt-1 text-sm md:text-[1.4vw] text-black">
              Monday - Friday <br />
              8am - 5pm
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-md md:text-[1.2vw] font-semibold text-gray-500">
              Customer Service
            </h3>
            <p className="mt-1 text-sm md:text-[1.4vw] text-black">
              <a href="mailto:support@calderco.us" className="hover:text-black">
                support@calderco.us
              </a>
            </p>
          </div>

          {/* Hotline */}
          <div>
            <h3 className="text-md md:text-[1.2vw] font-semibold text-gray-500">
              Hotline
            </h3>
            <p className="mt-1 text-sm md:text-[1.4vw] text-black">
              <a href="tel:+14155550199" className="hover:text-black">
                +1 (415) 555-0199
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
