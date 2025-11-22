import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="relative mb-8 animate-slide-up">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Buscar produtos..."
        className="pl-12 bg-card border-border h-14 text-base"
      />
    </div>
  );
};
