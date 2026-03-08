import { Button } from "./ui/button";
import { Beef, ChevronRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden rounded-[2.5rem] mb-12 shadow-2xl shadow-black/50">
      {/* BACKGROUND GIF */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <img
          src="/imagens/hero-burger.gif"
          alt="Cinematic burger animation"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-orange-500/10 mix-blend-overlay"></div>
      </div>

      {/* OVERLAY ESCURO PARA LEITURA */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />

      {/* CONTEÚDO */}
      <div className="relative z-20 min-h-[90vh] md:min-h-screen flex items-center px-8 md:px-20">
        <div className="max-w-2xl text-white animate-fade-in">
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-yellow-400/20 text-yellow-400 text-sm font-bold tracking-wide border border-yellow-400/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            Acessível e muito recheado
          </span>

          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
            A EXPERIÊNCIA <br />
            SUPREMA <br />
            <span className="text-yellow-400 italic">DE CHEDDAR</span>
          </h1>

          <p className="text-white/60 mb-10 text-lg md:text-xl font-medium max-w-lg">
            Descubra a combinação perfeita de crocância, suculência e nosso cheddar cremoso exclusivo em um hamburguer
          </p>

        </div>
      </div>

      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-600/20 blur-[120px] rounded-full z-10 animate-pulse"></div>
    </section>
  );
};

export default HeroSection;