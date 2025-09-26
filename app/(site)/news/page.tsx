import NewsSection from "@/app/_components/NewsSection";
import React from "react";
import { cardData } from "@/app/_lib/typesInterfaces";

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
  {
    title: "Modern Forms, Updated Proportions",
    description: "How we reimagined tailoring for today’s pace.",
    imageUrl: "/images/news4.avif",
    link: "#",
  },
  {
    title: "Inside the Studio",
    description: "Where every stitch and seam is considered.",
    imageUrl: "/images/news5.avif",
    link: "#",
  },
  {
    title: "Quiet Colors, Confident Tones",
    description: "A refined palette, season after season.",
    imageUrl: "/images/news6.avif",
    link: "#",
  },
];

const NewsPage = () => {
  return (
    <section>
      <NewsSection
        title="Our News"
        description="From new product drops to style tips — read our latest features,
            editorials, and brand announcements."
        cardData={newsItems}
      />
    </section>
  );
};

export default NewsPage;
