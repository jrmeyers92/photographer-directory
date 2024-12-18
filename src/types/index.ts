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
  | "Sports";

export interface Photographer {
  name: string;
  image: string;
  website: string;
  specialty: Photography;
  otherServices: Photography[];
  bio: string;
  location: string;
  email: string;
  phone: string;
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
];
