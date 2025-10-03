import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-white">JR</span>
              <span className="text-accent"> Transfer</span>
            </h3>
            <p className="text-white/80 mb-4">
              Transporte executivo e turismo no Rio de Janeiro com conforto,
              segurança e pontualidade.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/jrtransfer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-accent transition-smooth"
                aria-label="Facebook JR Transfer"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/jrtransfer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-accent transition-smooth"
                aria-label="Instagram JR Transfer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <button
                onClick={() =>
                  document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-white/80 hover:text-accent transition-smooth"
              >
                Início
              </button>
              <button
                onClick={() =>
                  document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-white/80 hover:text-accent transition-smooth"
              >
                Serviços
              </button>
              <button
                onClick={() =>
                  document.getElementById("frota")?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-white/80 hover:text-accent transition-smooth"
              >
                Frota
              </button>
              <button
                onClick={() =>
                  document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-white/80 hover:text-accent transition-smooth"
              >
                Sobre
              </button>
              <button
                onClick={() =>
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-white/80 hover:text-accent transition-smooth"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+5521981209818"
                className="flex items-center gap-3 text-white/80 hover:text-accent transition-smooth"
              >
                <Phone size={18} />
                <span>(21) 98120-9818</span>
              </a>
              <a
                href="mailto:contato@jrtransfer.com.br"
                className="flex items-center gap-3 text-white/80 hover:text-accent transition-smooth"
              >
                <Mail size={18} />
                <span>contato@jrtransfer.com.br</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>
            © {currentYear} JR Transfer. Todos os direitos reservados.
          </p>
          <p className="mt-2">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
