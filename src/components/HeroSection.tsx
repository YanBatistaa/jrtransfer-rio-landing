import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Vista panorâmica do Rio de Janeiro com Cristo Redentor e van executiva JR Transfer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Sua Viagem Começa com Conforto e Segurança
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
          Transfer executivo, turismo e transporte corporativo no Rio de Janeiro
          com pontualidade, profissionalismo e veículos de primeira linha.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => window.open("https://wa.me/5521981209818", "_blank")}
            size="lg"
            className="bg-accent text-accent-foreground hover:opacity-90 transition-smooth font-semibold text-lg px-8 py-6 group"
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
          </Button>
          <Button
            onClick={() =>
              document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
            }
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary transition-smooth font-semibold text-lg px-8 py-6"
          >
            Conheça Nossos Serviços
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
