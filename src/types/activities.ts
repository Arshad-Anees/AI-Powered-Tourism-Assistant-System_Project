export interface Activity {
  id: string;
  title: string;
  category: 'culture' | 'nature' | 'adventure' | 'food';
  duration: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  location: string;
  included: string[];
}

export interface ActivityFilters {
  category: string | null;
  priceRange: [number, number];
  duration: string | null;
}