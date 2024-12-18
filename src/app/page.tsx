import Hero from "@/components/Hero";
import { PhotographerList } from "@/components/PhotographerList";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <div className="p-16">
        <PhotographerList />
      </div>
    </div>
  );
}
