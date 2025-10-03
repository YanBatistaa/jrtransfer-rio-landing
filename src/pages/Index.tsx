import { useState, useRef, useEffect } from "react";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FleetSection } from "@/components/FleetSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DestinationsSection } from "@/components/DestinationsSection";
import { DifferentiatorsSection } from "@/components/DifferentiatorsSection";
import { FaqSection } from "@/components/FaqSection"; // 1. Importar

export default function Index() {
  const footerRef = useRef<HTMLElement>(null);
  const [whatsAppButtonClass, setWhatsAppButtonClass] = useState("fixed bottom-6 right-6 z-40");

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const footerTop = footerRef.current.offsetTop;
      const scrollBottom = window.scrollY + window.innerHeight;
      const buttonBottomMargin = 24;
      if (scrollBottom > footerTop - buttonBottomMargin) {
        setWhatsAppButtonClass(`absolute bottom-[${footerRef.current.offsetHeight + buttonBottomMargin}px] right-6 z-40`);
      } else {
        setWhatsAppButtonClass("fixed bottom-6 right-6 z-40");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-background text-foreground">
      <Header />
      <main className="flex-1 relative">
        <HeroSection />
        <ServicesSection />
        <DestinationsSection />
        <FleetSection />
        <DifferentiatorsSection />
        <AboutSection />
        <FaqSection /> {/* 2. Adicionar antes do Contato */}
        <ContactSection />
        <WhatsAppButton className={whatsAppButtonClass} />
      </main>
      <Footer ref={footerRef} />
    </div>
  );
}