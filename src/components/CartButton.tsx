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
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 h-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 text-primary-foreground px-6 gap-3 animate-in slide-in-from-bottom-4 duration-500"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="font-bold text-base">Ver Carrinho</span>
          <span className="bg-primary-foreground/20 text-primary-foreground text-sm font-bold rounded-full px-2 py-0.5">
            {itemCount} {itemCount === 1 ? "item" : "itens"}
          </span>
          <span className="font-bold text-base">• R$ {total.toFixed(2)}</span>
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
