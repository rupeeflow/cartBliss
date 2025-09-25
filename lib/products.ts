export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  hoverImageUrl?: string;
  gallery?: string[];
};

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Relaxed Linen Jacket",
    category: "JACKET",
    price: 69,
    imageUrl: "/images/jacket1.jpg",
    hoverImageUrl: "/images/jacket2jpg",
    gallery: [
      "/images/jacket1.jpg",
      "/images/jacket2.jpg",
      "/images/jacket3.jpg",
      "/images/jacket4.jpg",
    ],
  },
  {
    id: "2",
    name: "Classic White Tee",
    category: "TEE",
    price: 25,
    imageUrl: "/images/tee1.jpg",
    hoverImageUrl: "/images/tee2.jpg",
    gallery: [
      "/images/tee1.jpg",
      "/images/tee2.jpg",
      "/images/tee3.jpg",
      "/images/tee4.jpg",
    ],
  },
  {
    id: "3",
    name: "Slim Fit Jeans",
    category: "PANTS",
    price: 49,
    imageUrl: "/images/jeans1.jpg",
    hoverImageUrl: "/images/jeans2.jpg",
    gallery: [
      "/images/jeans1.jpg",
      "/images/jeans2.jpg",
      "/images/jeans3.jpg",
      "/images/jeans4.jpg",
    ],
  },
  {
    id: "4",
    name: "Cotton Polo Shirt",
    category: "POLO",
    price: 39,
    imageUrl: "/images/polo1.jpg",
    hoverImageUrl: "/images/polo2.jpg",
    gallery: [
      "/images/polo1.jpg",
      "/images/polo2.jpg",
      "/images/polo3.jpg",
      "/images/polo4.jpg",
    ],
  },
  {
    id: "5",
    name: "Summer Chino Shorts",
    category: "SHORTS",
    price: 29,
    imageUrl: "/images/shorts1.jpg",
    hoverImageUrl: "/images/shorts2.jpg",
    gallery: [
      "/images/shorts1.jpg",
      "/images/shorts2jpg",
      "/images/shorts3.jpg",
      "/images/shorts4.jpg",
    ],
  },
  {
    id: "6",
    name: "Oxford Shirt",
    category: "SHIRTS",
    price: 55,
    imageUrl: "/images/shirt1.jpg",
    hoverImageUrl: "/images/shirt2.jpg",
    gallery: [
      "/images/shirt1.jpg",
      "/images/shirt2.jpg",
      "/images/shirt3.jpg",
      "/images/shirt4.jpg",
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return mockProducts.find((p) => p.id === id);
}


