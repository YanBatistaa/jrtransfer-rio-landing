import { siteContent } from "@/data/siteContent";
import { cn } from "@/lib/utils"; // Importamos o utilitário 'cn' para mesclar classes

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.434-9.889 9.888.001 2.225.651 4.288 1.933 6.063l-.433 1.564 1.595-.434z"/>
  </svg>
);

// O componente agora aceita uma prop `className`
export function WhatsAppButton({ className }: { className?: string }) {
  return (
    <a
      href={siteContent.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      // A classe 'z-40' foi removida daqui e será controlada pelo pai
      // Usamos `cn` para mesclar as classes padrão com a que vem via props
      className={cn(
        "bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400",
        className
      )}
      aria-label="Fale conosco no WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}