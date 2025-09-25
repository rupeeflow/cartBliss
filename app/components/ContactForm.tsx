// components/SupportForm.tsx
"use client";

export default function ContactForm() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Heading */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-medium">Get in touch</h2>
        </div>

        {/* Right Side - Form */}
        <form className="space-y-6 w-full">
          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
                className="mt-1 block w-full border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                required
                className="mt-1 block w-full border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="youremail@gmail.com"
              className="mt-1 block w-full border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Can we help you?"
              className="mt-1 block w-full border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-black focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 font-medium hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
