// components/Footer.tsx
import Link from "next/link";

const navigationLinks = [
  { name: "Collection", href: "#" },
  { name: "Product", href: "#" },
  { name: "About", href: "#" },
];

const infoLinks = [
  { name: "News", href: "/news" },
  { name: "Contact", href: "#" },
  { name: "Support", href: "#" },
];

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "X/Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full flex flex-col border-t bg-white">
      <div className="flex flex-col md:flex-row justify-between w-full px-4 sm:px-6 lg:px-14 py-10">
        {/* Left - Company */}
        <div>
          <h2 className="text-[6vw] font-regular text-black md:ml-10">
            CartBliss
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 mt-8 md:mt-0">
          {/* Navigation */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-2xl text-gray-600 hover:text-black"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Info</h3>
            <ul className="space-y-2">
              {infoLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-2xl text-gray-600 hover:text-black"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Social</h3>
            <ul className="space-y-2">
              {socialLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-2xl text-gray-600 hover:text-black"
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
      <div className="border-t mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
          © 2025 Implycode. All rights reserved
        </div>
      </div>
    </footer>
  );
}
