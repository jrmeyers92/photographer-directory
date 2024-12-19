import { Photographer } from "@/types";
import { Facebook, Globe, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PhotographerCardProps {
  photographer: Photographer;
}

const PhotographerCard: React.FC<PhotographerCardProps> = ({
  photographer,
}) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
      {photographer.image && (
        <img
          src={photographer.image}
          alt={`${photographer.name}'s photo`}
          width={500}
          height={500}
          className="aspect-square rounded-lg object-cover"
        />
      )}

      {!photographer.image && (
        <img
          src="/images/photo.jpg"
          alt="Photographer"
          className="aspect-square rounded-lg object-cover"
        />
      )}

      <div className="space-y-3 p-4">
        <div className="flex flex-nowrap items-center justify-between gap-2">
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
          <strong>Specialty:</strong> {photographer.specialty.join(", ")}
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
        <div className="my-4 flex items-center gap-4">
          {photographer.facebook && (
            <Link href={photographer.facebook} className="">
              <Facebook className="h-6 w-6 text-blue-500" />
            </Link>
          )}
          {photographer.instagram && (
            <Link href={photographer.instagram} className="">
              <Instagram className="h-6 w-6 text-pink-500" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotographerCard;
