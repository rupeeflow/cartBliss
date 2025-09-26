import HomeHero from "./_components/HomeHero";
import EssentialsSection from "./_components/EssentialsSection";
import { cardData, productData } from "./_lib/typesInterfaces";
import NewsSection from "./_components/NewsSection";
import FavouriteSection from "./_components/FavouriteSection";
import StyleSection from "./_components/StyleSection";

const essentialItems: cardData[] = [
  {
    title: "Polo",
    description: "",
    imageUrl: "/images/polo.avif",
    link: "#",
  },
  {
    title: "Shirt",
    description: "",
    imageUrl: "/images/shirt.avif",
    link: "#",
  },
  {
    title: "Tee",
    description: "",
    imageUrl: "/images/tee.avif",
    link: "#",
  },
  {
    title: "Jacket",
    description: "",
    imageUrl: "/images/jacket.avif",
    link: "#",
  },
];

const newsItems: cardData[] = [
  {
    title: "Spring 2025 Essentials",
    description: "Polos and relaxed tailoring for the new season.",
    imageUrl: "/images/news1.avif",
    link: "#",
  },
  {
    title: "Calder Co. Pop-up Experience",
    description: "A temporary space dedicated to craftsmanship.",
    imageUrl: "/images/news2.avif",
    link: "#",
  },
  {
    title: "Responsible Fabric & Design",
    description: "Our sourcing process, from field to form.",
    imageUrl: "/images/news3.avif",
    link: "#",
  },
];

const products: productData[] = [
  {
    title: "Relaxed Linen Jacket",
    description: "JACKET",
    imageUrl: "/images/product1.avif",
    hoverImageUrl: "/images/product1-hover.avif",
    link: "#",
  },
  {
    title: "Basic Regular Fit Tee",
    description: "TEE",
    imageUrl: "/images/product2.avif",
    hoverImageUrl: "/images/product2-hover.avif",
    link: "#",
  },
  {
    title: "Baggy Denime Trousers",
    description: "PANTS",
    imageUrl: "/images/product3.avif",
    hoverImageUrl: "/images/product3-hover.avif",
    link: "#",
  },
];

export default function Home() {
  return (
    <div>
      <HomeHero />
      <EssentialsSection
        title="Everyday Essentials"
        description="Explore our best-selling categories — from crisp polos and refined
            shirts to versatile jackets and relaxed-fit trousers, made to
            elevate your everyday wardrobe."
        cardData={essentialItems}
      />
      <FavouriteSection
        title="Proven Favourites"
        description="Trusted by thousands of customers. These pieces define versatility — perfect for workdays or weekends."
        cardData={products}
      />
      <StyleSection />
      <NewsSection
        title="What's new at CartBliss"
        description="From new product drops to style tips — read our latest features, editorials, and brand announcements."
        cardData={newsItems}
      />
    </div>
  );
}
