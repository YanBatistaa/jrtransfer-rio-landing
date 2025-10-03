import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/siteContent";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="inicio" className="relative w-full h-[80vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Voltamos para a tag <img> padrão, com o caminho público correto */}
      <img
        src="/images/hero-bg.jpg"
        alt={t('hero.title')}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager" /* A imagem principal deve carregar o mais rápido possível */
        decoding="async"
      />
      
      <div className="relative z-20 container px-4 md:px-6">
        <div className="space-y-6">
          <h1 className="text-4xl font-display tracking-tighter text-white sm:text-6xl md:text-7xl drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="max-w-[700px] mx-auto text-gray-200 md:text-xl font-sans">
            {t('hero.subtitle')}
          </p>
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-bold px-8 py-6">
            <a href={siteContent.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
              {t('hero.cta')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}