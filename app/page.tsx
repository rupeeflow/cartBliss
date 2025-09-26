import HomeHero from "./components/HomeHero";
import EssentialsSection from "./components/EssentialsSection";
import { cardData } from "./lib/typesInterfaces";
import NewsSection from "./components/NewsSection";

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
      <NewsSection
        title="What's new at CartBliss"
        description="From new product drops to style tips — read our latest features, editorials, and brand announcements."
        cardData={newsItems}
      />
    </div>
  );
}
