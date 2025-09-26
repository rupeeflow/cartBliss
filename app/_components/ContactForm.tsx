// components/SupportForm.tsx
"use client";

export default function ContactForm() {
  return (
    <section className="w-full bg-white py-16 pt-[12vw]">
      <div className="flex flex-col md:flex-row w-full mx-auto px-4 sm:px-6 lg:px-8  gap-10 items-start">
        {/* Left Side - Heading */}
        <div>
          <h2 className="text-4xl w-full md:w-[40vw] text-black sm:text-5xl md:text-[5vw]">
            Get in touch
          </h2>
        </div>

        {/* Right Side - Form */}
        <form className="space-y-6 w-full">
          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-md md:text-[1.4vw] text-black"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
                className="mt-1 text-gray-800 block w-full border border-gray-500 px-4 py-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-md md:text-[1.4vw] text-black"
              >
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                required
                className="mt-1 text-gray-800 block w-full border border-gray-500 px-4 py-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-md md:text-[1.4vw] text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="youremail@gmail.com"
              className="mt-1 text-gray-800 block w-full border border-gray-500 px-4 py-3 text-sm focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-md md:text-[1.4vw] text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Can we help you?"
              className="mt-1 block w-full border border-gray-500 px-4 py-2 text-sm focus:ring-2 focus:ring-black focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-black text-white py-3 font-medium hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
