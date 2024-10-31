export interface Perfume {
    id: string;
    name: string;
    description: string;
    designer: string;
    category: string;
    image: string;
    presentations: { price: number; size: number }[];
  }
  