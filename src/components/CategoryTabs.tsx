import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Todas", path: "/" },
  { name: "Tradicionais", path: "/categoria/tradicionais" },
  { name: "Bebidas", path: "/categoria/bebidas" },
  { name: "Porções", path: "/categoria/porcoes" },
  { name: "Sobremesas", path: "/categoria/sobremesas" },
  { name: "Entradas", path: "/categoria/entradas" },
  { name: "Artesanais", path: "/categoria/artesanais" },
];

export const CategoryTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.includes(path)) return true;
    return false;
  };

  return (
    <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide animate-slide-up">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => handleCategoryClick(category.path)}
          className={cn(
            "px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all duration-200",
            isActive(category.path)
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-card text-foreground hover:bg-secondary"
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};
