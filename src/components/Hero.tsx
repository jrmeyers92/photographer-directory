import { Camera } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-center space-y-8 px-6 py-20 text-center">
        <Camera className="h-16 w-16 text-yellow-400" />
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Top St. Louis Photographers
        </h1>
        <p className="max-w-2xl text-lg md:text-xl">
          Discover the top photographers in St. Louis for weddings, portraits,
          events, and more. Your perfect photographer is just a click away.
        </p>
        <form className="flex w-full max-w-lg overflow-hidden rounded-full bg-white shadow-lg">
          <input
            type="text"
            placeholder="Search for photographers, styles, or events..."
            className="flex-grow px-6 py-3 text-gray-800 placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-500 px-6 text-white transition-all duration-300 hover:bg-yellow-600"
          >
            Search
          </button>
        </form>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-yellow-500 px-4 py-2 text-white shadow transition hover:bg-yellow-600">
            Wedding Photographers
          </button>
          <button className="rounded-full bg-yellow-500 px-4 py-2 text-white shadow transition hover:bg-yellow-600">
            Portrait Photographers
          </button>
          <button className="rounded-full bg-yellow-500 px-4 py-2 text-white shadow transition hover:bg-yellow-600">
            Event Photographers
          </button>
        </div>
      </div>
    </section>
  );
}
