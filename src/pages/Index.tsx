import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { CategoryTabs } from "@/components/CategoryTabs";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { ProductCard } from "@/components/ProductCard";
import { CartButton } from "@/components/CartButton";
import { allProducts } from "@/data/products";

// Pegar produtos em destaque (mix de categorias)
const featuredProducts = [
  allProducts.find(p => p.id === "a1"), // X-Treme Burger
  allProducts.find(p => p.id === "p3"), // Batata Cheddar
  allProducts.find(p => p.id === "b5"), // Milkshake
  allProducts.find(p => p.id === "s1"), // Brownie
  allProducts.find(p => p.id === "p6"), // Nuggets
  allProducts.find(p => p.id === "a2"), // Double Smash
  allProducts.find(p => p.id === "b1"), // Coca-Cola
  allProducts.find(p => p.id === "e3"), // Wings
].filter(Boolean);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center mb-8 px-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍔</span>
            <span className="text-xl font-black uppercase tracking-tighter">Burger Magic</span>
          </div>
        </div>

        <HeroSection />
        
        <div className="space-y-8">
          <SearchBar />
          <CategoryTabs />
          <FeaturedCarousel />
        </div>

        <div className="mb-8 bg-card rounded-2xl p-6 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Destaques do Cardápio
          </h2>
          <p className="text-muted-foreground">
            Conheça nossos produtos mais populares e deliciosos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product!.id} {...product!} />
          ))}
        </div>

        <footer className="text-center text-muted-foreground text-sm py-8 border-t border-border">
          © 2025 Cardápio Digital - Todos os direitos reservados
        </footer>
      </div>

      <CartButton />
    </div>
  );
};

export default Index;
