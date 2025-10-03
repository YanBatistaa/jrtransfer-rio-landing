import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BrazilFlag, SpainFlag, USFlag } from "@/components/ui/Flags";

// Mapeamento de códigos de idioma para componentes de bandeira e nomes
const languages = [
  { code: "pt", name: "Português", Flag: BrazilFlag },
  { code: "en", name: "English", Flag: USFlag },
  { code: "es", name: "Español", Flag: SpainFlag },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = languages.find((lang) => i18n.language.startsWith(lang.code));
  const CurrentFlag = currentLanguage?.Flag || BrazilFlag;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <CurrentFlag className="h-6 w-6" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map(({ code, name, Flag }) => (
          <DropdownMenuItem key={code} onClick={() => changeLanguage(code)}>
            <div className="flex items-center gap-2">
              <Flag className="h-4 w-4" />
              <span>{name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}