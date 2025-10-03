import { MountainIcon } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { LanguageSwitcher } from "./LanguageSwitcher"; // Importa o novo componente
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-background/80 backdrop-blur-lg shadow-sm fixed top-0 left-0 right-0 z-50">
      <a className="flex items-center justify-center gap-2" href="#inicio">
        <MountainIcon className="h-6 w-6 text-primary" />
        <span className="font-semibold text-lg">{siteContent.companyName}</span>
      </a>
      <nav className="ml-auto flex gap-2 sm:gap-4 items-center">
        {siteContent.navigation.map((item) => (
          <a
            key={item.name}
            className="text-sm font-medium hover:underline underline-offset-4"
            href={item.href}
          >
            {/* Usando a tradução para os links de navegação */}
            {t(`navigation.${item.name.toLowerCase()}`)}
          </a>
        ))}
        <LanguageSwitcher /> {/* Adiciona o seletor de idioma */}
      </nav>
    </header>
  );
}