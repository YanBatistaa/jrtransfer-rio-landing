import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5521981209818"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-large hover:scale-110 transition-bounce group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={32} className="group-hover:animate-pulse" />
      <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
        !
      </span>
    </a>
  );
};

export default WhatsAppButton;
