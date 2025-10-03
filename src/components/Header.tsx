import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "inicio" },
    { label: "Serviços", id: "servicos" },
    { label: "Frota", id: "frota" },
    { label: "Sobre", id: "sobre" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background shadow-medium"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-2xl font-bold transition-smooth hover:opacity-80"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className={isScrolled ? "text-primary" : "text-white"}>
              JR
            </span>
            <span className={isScrolled ? "text-accent" : "text-accent"}>
              {" "}Transfer
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-smooth hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => window.open("https://wa.me/5521981209818", "_blank")}
              className="bg-accent text-accent-foreground hover:opacity-90 transition-smooth font-semibold"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-primary" : "text-white"} size={28} />
            ) : (
              <Menu className={isScrolled ? "text-primary" : "text-white"} size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-background rounded-lg shadow-large">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-secondary transition-smooth"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-3">
              <Button
                onClick={() => window.open("https://wa.me/5521981209818", "_blank")}
                className="w-full bg-accent text-accent-foreground hover:opacity-90 transition-smooth font-semibold"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
