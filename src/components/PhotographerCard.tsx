import { Globe } from "lucide-react";

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

interface PhotographerCardProps {
  photographer: Photographer;
}

export default function PhotographerCard({
  photographer,
}: PhotographerCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
      <img
        src={photographer.image}
        alt={`${photographer.name}'s profile`}
        className="h-48 w-full object-cover"
      />
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            {photographer.name}
          </h2>
          <a
            href={photographer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-yellow-500 transition hover:text-yellow-600"
          >
            <Globe className="h-4 w-4" />
            <span>Website</span>
          </a>
        </div>
        <p className="text-sm text-gray-500">
          <strong>Specialty:</strong> {photographer.specialty}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Other Services:</strong>{" "}
          {photographer.otherServices.join(", ")}
        </p>
        <p className="text-gray-700">{photographer.bio}</p>
        {photographer.location && (
          <p className="text-sm text-gray-500">
            <strong>Location:</strong> {photographer.location}
          </p>
        )}
        {photographer.email && (
          <p className="text-sm text-gray-500">
            <strong>Email:</strong> {photographer.email}
          </p>
        )}
        {photographer.phone && (
          <p className="text-sm text-gray-500">
            <strong>Phone:</strong> {photographer.phone}
          </p>
        )}
      </div>
    </div>
  );
}
