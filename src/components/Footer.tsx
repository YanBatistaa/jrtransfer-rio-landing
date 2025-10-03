import { MountainIcon } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { Icon } from "@/components/ui/Icon";
import { forwardRef } from "react";

// Usamos forwardRef para que o componente possa receber uma ref e passá-la para o elemento <footer
export const Footer = forwardRef<HTMLElement>((props, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref} // A ref é aplicada aqui
      className="relative z-50 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background border-primary/20"
    >
      <div className="flex items-center gap-2">
        <MountainIcon className="h-6 w-6 text-primary" />
        <p className="text-xs text-muted-foreground">
          &copy; {currentYear} JR Transfer. Todos os direitos reservados.
        </p>
      </div>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        {siteContent.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            <Icon name={social.iconName} className="h-5 w-5" />
            <span className="sr-only">{social.name}</span>
          </a>
        ))}
      </nav>
    </footer>
  );
});

Footer.displayName = "Footer";