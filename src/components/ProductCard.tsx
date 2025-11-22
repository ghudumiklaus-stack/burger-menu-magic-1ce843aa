import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
}

export const ProductCard = ({ id, name, description, price, image, rating = 0 }: ProductCardProps) => {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addItem({ id, name, price, image });
  };

  return (
    <div 
      className="bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in cursor-pointer"
      onClick={() => navigate(`/produto/${id}`)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2 min-h-[2.5rem]">
          {description}
        </p>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < rating ? "fill-primary text-primary" : "fill-muted text-muted"
              )}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-2">Sem avaliações</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-success">
            R$ {price.toFixed(2)}
          </span>
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
            className="bg-success hover:bg-success/90 text-success-foreground gap-2 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};
