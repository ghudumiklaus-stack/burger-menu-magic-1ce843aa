import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allProducts } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Plus, Minus, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = allProducts.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [removedIngredients, setRemovedIngredients] = useState<string[]>([]);
  const [addedExtras, setAddedExtras] = useState<string[]>([]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Produto não encontrado</h2>
          <Button onClick={() => navigate("/")}>Voltar para o início</Button>
        </div>
      </div>
    );
  }

  const images = product.images || [product.image];
  
  const calculatePrice = () => {
    let total = product.price;
    product.ingredients?.forEach(ingredient => {
      if (ingredient.extraCost && addedExtras.includes(ingredient.id)) {
        total += ingredient.extraCost;
      }
    });
    return total * quantity;
  };

  const handleAddToCart = () => {
    const customizations = {
      removed: removedIngredients,
      extras: addedExtras,
    };
    
    const finalPrice = calculatePrice() / quantity;
    
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: `${product.id}-${Date.now()}-${i}`,
        name: product.name,
        price: finalPrice,
        image: product.image,
      });
    }
    
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const toggleIngredient = (ingredientId: string) => {
    setRemovedIngredients(prev =>
      prev.includes(ingredientId)
        ? prev.filter(id => id !== ingredientId)
        : [...prev, ingredientId]
    );
  };

  const toggleExtra = (ingredientId: string) => {
    setAddedExtras(prev =>
      prev.includes(ingredientId)
        ? prev.filter(id => id !== ingredientId)
        : [...prev, ingredientId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-card">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? "border-primary scale-95"
                        : "border-transparent hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < (product.rating || 0)
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-3">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-lg">
                {product.description}
              </p>
            </div>

            {/* Informações Nutricionais */}
            {product.nutritionalInfo && (
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Informações Nutricionais (porção)
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Calorias</p>
                    <p className="text-xl font-bold text-foreground">
                      {product.nutritionalInfo.calories} kcal
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Proteínas</p>
                    <p className="text-xl font-bold text-foreground">
                      {product.nutritionalInfo.protein}g
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Carboidratos</p>
                    <p className="text-xl font-bold text-foreground">
                      {product.nutritionalInfo.carbs}g
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Gorduras</p>
                    <p className="text-xl font-bold text-foreground">
                      {product.nutritionalInfo.fat}g
                    </p>
                  </div>
                  {product.nutritionalInfo.fiber && (
                    <div>
                      <p className="text-sm text-muted-foreground">Fibras</p>
                      <p className="text-xl font-bold text-foreground">
                        {product.nutritionalInfo.fiber}g
                      </p>
                    </div>
                  )}
                  {product.nutritionalInfo.sodium && (
                    <div>
                      <p className="text-sm text-muted-foreground">Sódio</p>
                      <p className="text-xl font-bold text-foreground">
                        {product.nutritionalInfo.sodium}mg
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Ingredientes e Personalização */}
            {product.ingredients && (
              <div className="bg-card rounded-xl p-6 border border-border space-y-4">
                <h3 className="text-lg font-bold text-foreground">
                  Ingredientes e Personalização
                </h3>
                
                {/* Ingredientes Principais */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Ingredientes inclusos:</p>
                  {product.ingredients
                    .filter(i => !i.extraCost)
                    .map(ingredient => (
                      <div key={ingredient.id} className="flex items-center gap-3">
                        {ingredient.removable && (
                          <Checkbox
                            checked={!removedIngredients.includes(ingredient.id)}
                            onCheckedChange={() => toggleIngredient(ingredient.id)}
                          />
                        )}
                        <span className={`text-sm ${
                          !ingredient.removable ? "ml-8 text-muted-foreground" : "text-foreground"
                        }`}>
                          {ingredient.name}
                          {!ingredient.removable && " (obrigatório)"}
                        </span>
                      </div>
                    ))}
                </div>

                {/* Adicionais */}
                {product.ingredients.filter(i => i.extraCost).length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-border">
                    <p className="text-sm font-medium text-foreground">Adicionais:</p>
                    {product.ingredients
                      .filter(i => i.extraCost)
                      .map(ingredient => (
                        <div key={ingredient.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Checkbox
                              checked={addedExtras.includes(ingredient.id)}
                              onCheckedChange={() => toggleExtra(ingredient.id)}
                            />
                            <span className="text-sm text-foreground">
                              {ingredient.name}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-primary">
                            +R$ {ingredient.extraCost?.toFixed(2)}
                          </span>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}

            {/* Controles de Quantidade e Preço */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Quantidade</span>
                <div className="flex items-center gap-3">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-xl font-bold text-foreground w-12 text-center">
                    {quantity}
                  </span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-bold text-foreground">Total</span>
                <span className="text-3xl font-bold text-primary">
                  R$ {calculatePrice().toFixed(2)}
                </span>
              </div>

              <Button
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Adicionar ao Carrinho
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
