// components/SupportInfo.tsx
"use client";

const supportItems = [
  {
    title: "Orders & Payments",
    description:
      "You can track the real-time status of your order through your account dashboard, view complete purchase history, and receive updates via email. At checkout, choose from a wide range of secure payment options, including major credit cards, digital wallets, and other trusted services.",
  },
  {
    title: "Shipping & Delivery",
    description:
      "We provide free shipping for all domestic orders over $75. Most orders are processed within 1–2 business days and delivered within 3–7 days using reputable logistics partners. You'll receive a tracking number once your order ships so you can monitor every step of its journey.",
  },
  {
    title: "Returns & Warranty",
    description:
      "If something isn't quite right, we’ve got you covered. Return any unused items within 14 days for a full refund, no questions asked. All products also come with a 30-day warranty against defects in materials or workmanship. Return shipping is easy and guided step-by-step.",
  },
  {
    title: "Sizing & Product Info",
    description:
      "Each product page includes detailed sizing charts, fit recommendations, and fabric care instructions to help you shop confidently. If you still need assistance, our team is ready to offer personalized sizing advice to ensure the perfect fit for your lifestyle and preferences.",
  },
];

export default function SupportInfo() {
  return (
    <section className="w-full bg-white py-16 pt-30 md:pt-[10vw]">
      <div className="flex flex-col md:flex-row w-full mx-auto px-4 sm:px-6 lg:px-[3vw]  gap-10 md:gap-[10vw] items-start">
        {/* Left side - heading */}
        <div>
          <h2 className="w-[30vw] text-4xl sm:text-5xl md:text-[4vw] text-black leading-tight">
            Support That Works for You
          </h2>
        </div>

        {/* Right side - support items */}
        <div className="space-y-8 md:space-y-[5vw]">
          {supportItems.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-md md:text-[1.4vw] text-gray-500">
                {item.title}
              </h3>
              <p className="mt-1 text-md md:text-[1.4vw] text-black md:mr-[2vw] leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
