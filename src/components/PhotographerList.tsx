// components/PhotographerList.tsx
import { Photographer } from "@/types";
import { Camera } from "lucide-react";
import React from "react";
import PhotographerCard from "./PhotographerCard";

interface PhotographerListProps {
  photographers: Photographer[];
}

export function PhotographerList({ photographers }: PhotographerListProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
        <div className="flex items-center space-x-2">
          <Camera className="h-5 w-5 text-gray-500" />
          <h2 className="text-lg font-medium text-gray-900">
            Showing {photographers.length} Photographers
          </h2>
        </div>
      </div>

      {photographers.length === 0 ? (
        <div className="flex h-40 items-center justify-center rounded-lg bg-white text-gray-500">
          No photographers found for the selected categories
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photographers.map((photographer) => (
            <PhotographerCard
              key={photographer.name}
              photographer={photographer}
            />
          ))}
        </div>
      )}
    </div>
  );
}
