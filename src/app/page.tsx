// app/page.tsx
"use client";

import Hero from "@/components/Hero";
import { PhotographerList } from "@/components/PhotographerList";
import { Sidebar } from "@/components/Sidebar";
import { photographers } from "@/data/photographers";
import { CATEGORIES, Photography } from "@/types";
import { useState } from "react";

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<Photography[]>(
    [],
  );

  const handleCategoryChange = (category: Photography) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handleReset = () => {
    setSelectedCategories([]);
  };

  const filteredPhotographers =
    selectedCategories.length === 0
      ? photographers
      : photographers.filter(
          (photographer) =>
            selectedCategories.includes(photographer.specialty) ||
            photographer.otherServices.some((service) =>
              selectedCategories.includes(service),
            ),
        );

  return (
    <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-8">
          <Sidebar
            categories={CATEGORIES}
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
            onReset={handleReset}
          />
          <main className="flex-1">
            <PhotographerList photographers={filteredPhotographers} />
          </main>
        </div>
      </div>
    </div>
  );
}
