export type Photography =
  | "Wedding"
  | "Portrait"
  | "Event"
  | "Family"
  | "Commercial"
  | "Landscape"
  | "Fashion"
  | "Nature"
  | "Travel"
  | "Wildlife"
  | "Conservation"
  | "Newborn"
  | "Sports"
  | "Headshot"
  | "Product";

export interface Photographer {
  name: string;
  image?: string;
  website: string;
  specialty: Photography[];
  bio: string;
  location: string;
  email?: string;
  phone?: string;
  facebook?: string;
  instagram?: string;
}

export const CATEGORIES: Photography[] = [
  "Wedding",
  "Portrait",
  "Event",
  "Family",
  "Commercial",
  "Landscape",
  "Fashion",
  "Nature",
  "Travel",
  "Wildlife",
  "Conservation",
  "Newborn",
  "Sports",
  "Headshot",
  "Product",
];
