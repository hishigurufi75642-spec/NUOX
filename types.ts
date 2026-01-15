
export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  materials: string[];
}

export interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
  date: string;
  avatar: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}
