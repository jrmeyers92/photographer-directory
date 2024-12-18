// app/photographers/[category]/page.tsx
import { PhotographerList } from "@/components/PhotographerList";
import { photographers } from "@/data/photographers";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  const uppercaseCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const filteredPhotographers = photographers.filter(
    (photographer) => photographer.specialty === uppercaseCategory,
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">
        St. Louis {uppercaseCategory} Photographers
      </h1>
      <PhotographerList photographers={filteredPhotographers} />
    </div>
  );
}
