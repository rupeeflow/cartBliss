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
