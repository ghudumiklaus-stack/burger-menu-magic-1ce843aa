import { MenuHeader } from "@/components/MenuHeader";
import { SearchBar } from "@/components/SearchBar";
import { CategoryTabs } from "@/components/CategoryTabs";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { ProductCard } from "@/components/ProductCard";
import burgerHero from "@/assets/burger-hero.jpg";
import burger1 from "@/assets/burger-1.jpg";
import burger2 from "@/assets/burger-2.jpg";
import fries from "@/assets/fries.jpg";
import nuggets from "@/assets/nuggets.jpg";
import cola from "@/assets/cola.jpg";

const products = [
  {
    name: "X-Treme Burger",
    description: "Pão com gergelim selado, salada, ovo frito perfeito, carne macia, queijo cheddar, bacon, maionese e molho especial.",
    price: 14.00,
    image: burger1,
    rating: 0,
  },
  {
    name: "Double Burger",
    description: "Pão com gergelim selado na chapa, maionese, salada, 1 ovo, 2 carnes de 59g cada, 2 fatias de bacon e molho especial.",
    price: 19.00,
    image: burger2,
    rating: 0,
  },
  {
    name: "Triple Burger",
    description: "Pão com gergelim selado na chapa, salada, maionese, 2 ovos, 3 carnes de 59g cada, 3 fatias de bacon e molho especial.",
    price: 23.00,
    image: burgerHero,
    rating: 0,
  },
  {
    name: "Nuggets",
    description: "Deliciosa Porção de nuggets sequinhos e quentinhos direto na sua casa 12 unidades.",
    price: 16.00,
    image: nuggets,
    rating: 0,
  },
  {
    name: "Batata Chips P",
    description: "Crocante por fora e macia por dentro, levemente temperada com as mais finas especiarias.",
    price: 6.00,
    image: fries,
    rating: 0,
  },
  {
    name: "Batata Cheddar e Bacon P",
    description: "Deliciosa batata sequinha, com cheddar derretido, coberta por bacon e calabresa frita na hora!",
    price: 19.00,
    image: fries,
    rating: 0,
  },
  {
    name: "Anéis de Cebola",
    description: "10 unidades feitos artesanalmente deliciosos e sequinhos.",
    price: 18.00,
    image: fries,
    rating: 0,
  },
  {
    name: "CocaCola Lata",
    description: "Extremamente gelada",
    price: 7.00,
    image: cola,
    rating: 0,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-primary">Cardápio Digital</h1>
          <button className="text-foreground hover:text-primary transition-colors">
            Fazer Login
          </button>
        </div>

        <MenuHeader />
        <SearchBar />
        <CategoryTabs />
        <FeaturedCarousel />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <footer className="text-center text-muted-foreground text-sm py-8 border-t border-border">
          © 2025 Cardápio Digital - Todos os direitos reservados
        </footer>
      </div>
    </div>
  );
};

export default Index;
