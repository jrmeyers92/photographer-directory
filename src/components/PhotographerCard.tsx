import { Photographer } from "@/types";
import { Globe } from "lucide-react";
import Image from "next/image";
import React from "react";

interface PhotographerCardProps {
  photographer: Photographer;
}

const PhotographerCard: React.FC<PhotographerCardProps> = ({
  photographer,
}) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
      <Image
        src={`/images/photo.jpg`}
        alt={`${photographer.name}'s photo`}
        width={500}
        height={500}
        className="aspect-square rounded-lg object-cover"
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
};

export default PhotographerCard;
