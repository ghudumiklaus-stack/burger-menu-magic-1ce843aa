import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  "Todas",
  "Tradicionais",
  "Bebidas",
  "Porções",
  "Sobremesas",
  "Entradas",
  "Artesanais",
];

interface CategoryTabsProps {
  onCategoryChange?: (category: string) => void;
}

export const CategoryTabs = ({ onCategoryChange }: CategoryTabsProps) => {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide animate-slide-up">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={cn(
            "px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all duration-200",
            activeCategory === category
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-card text-foreground hover:bg-secondary"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
