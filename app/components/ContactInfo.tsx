// components/ContactInfo.tsx
"use client";

export default function ContactInfo() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Heading */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-medium">Contact</h2>
        </div>

        {/* Right Side - Info */}
        <div className="space-y-8 text-gray-800">
          {/* Address */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500">Address</h3>
            <p className="mt-1 text-sm">
              1389 Market Street, Suite 300. <br />
              San Francisco, CA 94103, USA
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500">Hours</h3>
            <p className="mt-1 text-sm">
              Monday - Friday <br />
              8am - 5pm
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500">
              Customer Service
            </h3>
            <p className="mt-1 text-sm">
              <a href="mailto:support@calderco.us" className="hover:text-black">
                support@calderco.us
              </a>
            </p>
          </div>

          {/* Hotline */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500">Hotline</h3>
            <p className="mt-1 text-sm">
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
