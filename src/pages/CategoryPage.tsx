import { useParams, useNavigate } from "react-router-dom";
import { MenuHeader } from "@/components/MenuHeader";
import { SearchBar } from "@/components/SearchBar";
import { CategoryTabs } from "@/components/CategoryTabs";
import { ProductCard } from "@/components/ProductCard";
import { CartButton } from "@/components/CartButton";
import { getProductsByCategory } from "@/data/products";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const categoryTitles: Record<string, string> = {
  tradicionais: "Lanches Tradicionais",
  bebidas: "Bebidas",
  porcoes: "Porções",
  sobremesas: "Sobremesas",
  entradas: "Entradas",
  artesanais: "Hambúrgueres Artesanais",
};

const categoryDescriptions: Record<string, string> = {
  tradicionais: "Os clássicos que você ama, feitos com carinho.",
  bebidas: "Bebidas geladas e refrescantes para acompanhar seu lanche.",
  porcoes: "Porções perfeitas para compartilhar ou saborear sozinho.",
  sobremesas: "Doces irresistíveis para finalizar sua refeição.",
  entradas: "Aperitivos deliciosos para começar bem.",
  artesanais: "Hambúrgueres premium com ingredientes selecionados.",
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const products = getProductsByCategory(category || "todas");

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

        <div className="mb-8 animate-fade-in">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para todas as categorias
          </Button>
          <div className="bg-card rounded-2xl p-6">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {categoryTitles[category || ""] || "Todos os Produtos"}
            </h2>
            <p className="text-muted-foreground">
              {categoryDescriptions[category || ""] || "Explore nosso cardápio completo."}
            </p>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12 bg-card rounded-2xl">
            <p className="text-muted-foreground text-lg">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}

        <footer className="text-center text-muted-foreground text-sm py-8 border-t border-border">
          © 2025 Cardápio Digital - Todos os direitos reservados
        </footer>
      </div>

      <CartButton />
    </div>
  );
};

export default CategoryPage;
