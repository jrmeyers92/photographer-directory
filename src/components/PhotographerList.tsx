import React from "react";
import PhotographerCard from "./PhotographerCard";

interface Photographer {
  name: string;
  image: string;
  website: string;
  specialty: string;
  otherServices: string[];
  bio: string;
  location?: string;
  email?: string;
  phone?: string;
}

const photographers: Photographer[] = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    website: "https://johndoe.com",
    specialty: "Weddings",
    otherServices: ["Family Photos", "Events"],
    bio: "John is a wedding photographer with over 10 years of experience.",
    location: "New York, USA",
    email: "john@example.com",
    phone: "123-456-7890",
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/150",
    website: "https://janesmith.com",
    specialty: "Landscape",
    otherServices: ["Travel", "Nature"],
    bio: "Jane captures stunning landscapes from around the world.",
    location: "California, USA",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    name: "Alice Johnson",
    image: "https://via.placeholder.com/150",
    website: "https://alicejohnson.com",
    specialty: "Wildlife",
    otherServices: ["Nature", "Adventure"],
    bio: "Alice is passionate about wildlife photography.",
    location: "Kenya, Africa",
    email: "alice@example.com",
    phone: "456-789-0123",
  },
  {
    name: "Bob Brown",
    image: "https://via.placeholder.com/150",
    website: "https://bobbrown.com",
    specialty: "Street",
    otherServices: ["Urban", "Documentary"],
    bio: "Bob captures the essence of urban life through his lens.",
    location: "London, UK",
    email: "bob@example.com",
    phone: "321-654-0987",
  },
  {
    name: "Charlie Davis",
    image: "https://via.placeholder.com/150",
    website: "https://charliedavis.com",
    specialty: "Fashion",
    otherServices: ["Editorial", "Commercial"],
    bio: "Charlie is a renowned fashion photographer.",
    location: "Paris, France",
    email: "charlie@example.com",
    phone: "789-012-3456",
  },
];

export function PhotographerList() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photographers.map((photographer) => (
        <PhotographerCard key={photographer.name} photographer={photographer} />
      ))}
    </div>
  );
}
