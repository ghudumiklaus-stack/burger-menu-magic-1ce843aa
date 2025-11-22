import { MapPin, Clock } from "lucide-react";

export const MenuHeader = () => {
  return (
    <header className="bg-card rounded-2xl p-6 mb-8 animate-fade-in">
      <div className="flex items-start gap-6">
        <div className="w-32 h-32 bg-primary rounded-2xl flex-shrink-0 flex items-center justify-center">
          <span className="text-4xl">🍔</span>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-foreground mb-2">Cardápio Digital</h1>
          <p className="text-muted-foreground mb-4">Delivery de lanches do seu bairro.</p>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Rua Abauna - 147</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Terça à Sábado das 17:00 as 23:00</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
