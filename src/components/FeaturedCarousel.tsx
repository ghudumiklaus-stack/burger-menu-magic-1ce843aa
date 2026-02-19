import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FeaturedItem {
  name: string;
  image: string;
}

const featuredItems: FeaturedItem[] = [
  { 
    name: "Suco de maracujá 300ml", 
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    name: "Double Smash Burger", 
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    name: "Mother Love Burger", 
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    name: "X-Treme Burger", 
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80" 
  },
];

export const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featuredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mb-8 animate-slide-up">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-bold text-foreground">Mais Vendidos (4 itens)</h2>
      </div>
      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-card/80 hover:bg-card p-2 rounded-full transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out gap-4"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {featuredItems.map((item, index) => (
              <div
                key={index}
                className="flex-none w-[calc(25%-12px)] min-w-[200px]"
              >
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center mt-2 text-sm text-foreground">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-card/80 hover:bg-card p-2 rounded-full transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
