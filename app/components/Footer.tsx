// components/Footer.tsx
import Link from "next/link";

const navigationLinks = [
  { name: "Collection", href: "#" },
  { name: "Product", href: "/product" },
  { name: "About", href: "/about" },
];

const infoLinks = [
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
  { name: "Support", href: "/support" },
];

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "X/Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full relative z-80 flex flex-col border-gray-300 border-t bg-white pt-12">
      <div className="flex flex-col md:flex-row justify-between w-full px-4 sm:px-6 lg:px-14 py-10">
        {/* Left - Company */}
        <div>
          <h2 className="text-[7vw] font-thin text-black md:ml-10">
            CartBliss
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-30 md:gap-[10vw] mt-8 md:mt-0">
          {/* Navigation */}
          <div>
            <h3 className="text-2xl md:text-[2vw] font-medium text-black mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-2xl md:text-[1.8vw] text-gray-600 hover:text-black"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl md:text-[2vw] font-medium text-black mb-4">
              Info
            </h3>
            <ul className="space-y-2">
              {infoLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-2xl md:text-[1.8vw] text-gray-600 hover:text-black"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-2xl md:text-[2vw] font-medium text-black mb-4">
              Social
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-2xl md:text-[1.8vw] text-gray-600 hover:text-black"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t  border-gray-300  mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm md:text-[1.4vw] text-gray-500">
          © 2025 CartBliss. All rights reserved
        </div>
      </div>
    </footer>
  );
}
