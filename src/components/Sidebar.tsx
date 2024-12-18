// components/Sidebar.tsx
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Photography } from "@/types";
import { BadgeCheck } from "lucide-react";

interface SidebarProps {
  categories: Photography[];
  selectedCategories: Photography[];
  onCategoryChange: (category: Photography) => void;
  onReset: () => void;
}

export function Sidebar({
  categories,
  selectedCategories,
  onCategoryChange,
  onReset,
}: SidebarProps) {
  return (
    <div className="sticky top-4 w-64 space-y-6 rounded-lg bg-white p-6 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
        {selectedCategories.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="text-gray-500 hover:text-gray-700"
          >
            Reset
          </Button>
        )}
      </div>
      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-3">
            <Checkbox
              id={category}
              checked={selectedCategories.includes(category)}
              onCheckedChange={() => onCategoryChange(category)}
              className="h-5 w-5"
            />
            <Label
              htmlFor={category}
              className="flex items-center text-sm text-gray-700 hover:text-gray-900"
            >
              {category}
              {selectedCategories.includes(category) && (
                <BadgeCheck className="ml-2 h-4 w-4 text-green-500" />
              )}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
