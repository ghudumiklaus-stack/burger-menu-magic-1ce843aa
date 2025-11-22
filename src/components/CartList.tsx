import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Separator } from "@/components/ui/separator";

interface CartListProps {
  onCheckout: () => void;
}

export const CartList = ({ onCheckout }: CartListProps) => {
  const { items, updateQuantity, removeItem, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Seu carrinho está vazio</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex gap-4 p-4 bg-card rounded-lg">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">{item.name}</h4>
            <p className="text-success font-bold mt-1">
              R$ {item.price.toFixed(2)}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center font-medium">{item.quantity}</span>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 ml-auto text-destructive"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Separator />

      <div className="space-y-2">
        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span className="text-success">R$ {total.toFixed(2)}</span>
        </div>
      </div>

      <Button
        className="w-full bg-success hover:bg-success/90 text-success-foreground"
        size="lg"
        onClick={onCheckout}
      >
        Finalizar Pedido
      </Button>
    </div>
  );
};
