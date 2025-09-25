// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left - Company */}
        <div>
          <h2 className="text-3xl font-semibold text-black">Implycode</h2>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                Collection
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-4">Info</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                News
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-4">Social</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-600 hover:text-black">
                X/Twitter
              </a>
            </li>
          </ul>
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
