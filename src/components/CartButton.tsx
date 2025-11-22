import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartList } from "./CartList";
import { CheckoutForm } from "./CheckoutForm";
import { useState } from "react";

export const CartButton = () => {
  const { itemCount, total } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (itemCount === 0) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-2xl bg-success hover:bg-success/90 text-success-foreground"
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Seu Pedido</SheetTitle>
          <SheetDescription>
            {showCheckout
              ? "Preencha seus dados para finalizar o pedido"
              : "Revise os itens do seu carrinho"}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6">
          {!showCheckout ? (
            <CartList onCheckout={() => setShowCheckout(true)} />
          ) : (
            <CheckoutForm onBack={() => setShowCheckout(false)} />
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
