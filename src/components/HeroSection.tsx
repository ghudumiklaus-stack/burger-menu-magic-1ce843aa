import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Beef, ChevronRight } from "lucide-react";

const TOTAL_FRAMES = 80;
const FRAME_DURATION = 66; // approx 15 fps for a 5.3s loop

export const HeroSection = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    // Preload all frames for smooth playback
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getImagePath(i);
    }

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % TOTAL_FRAMES);
    }, FRAME_DURATION);

    return () => clearInterval(interval);
  }, []);

  const getImagePath = (index: number) => {
    const frameNumber = index.toString().padStart(3, "0");
    return `/imagens/Cinematic_slow_motion_1080p_202602190047_${frameNumber}.jpg`;
  };

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden rounded-[2.5rem] mb-12 shadow-2xl shadow-black/50">
      {/* BACKGROUND CINEMATOGRÁFICO (SEQUÊNCIA COMPLETA) */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <img
          src={getImagePath(currentFrame)}
          alt="Cinematic burger animation"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-float opacity-100" />

        
        {/* Glow Effects on Background */}
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

          <p className="text-white/60 mb-10 text-lg md:text-xl font-medium max-w-lg">Descubra a combinação perfeita de crocância, suculência e nosso cheddar cremoso exclusivo em um hamburguer


          </p>

          <div className="flex flex-wrap gap-5">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-16 px-10 rounded-full text-xl shadow-lg shadow-orange-900/40 transition-all hover:scale-105 active:scale-95 group">
              <Beef className="mr-3 h-7 w-7 transition-transform group-hover:rotate-12" />
              Pedir agora
            </Button>

            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white font-bold h-16 px-10 rounded-full text-xl backdrop-blur-md transition-all">
              Ver cardápio
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Brilho decorativo no canto */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-600/20 blur-[120px] rounded-full z-10 animate-pulse"></div>
    </section>);

};

export default HeroSection;