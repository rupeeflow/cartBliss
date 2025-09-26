export type cardData = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

export interface CardSectionProps {
  title?: string;
  description?: string;
  cardData?: cardData[];
}

export type productData = {
  title: string;
  description: string;
  imageUrl: string;
  hoverImageUrl?: string;
  link: string;
};

export interface ProductSectionProps {
  title?: string;
  description?: string;
  price?: string;
  cardData?: productData[];
}
