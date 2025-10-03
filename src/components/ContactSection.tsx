import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Gostaria de solicitar um orçamento:%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AMensagem: ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/5521981209818?text=${message}`, "_blank");
    
    toast.success("Redirecionando para o WhatsApp...");
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Fale Conosco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato e solicite seu orçamento sem compromisso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-medium">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-1"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-1"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-1"
                  placeholder="(21) 98120-9818"
                />
              </div>

              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="mt-1"
                  rows={4}
                  placeholder="Descreva sua necessidade de transporte..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth font-semibold text-lg py-6"
              >
                Enviar Mensagem via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-medium hover:shadow-large transition-smooth">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Phone className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Telefone</h3>
                  <a
                    href="tel:+5521981209818"
                    className="text-lg text-foreground hover:text-accent transition-smooth"
                  >
                    (21) 98120-9818
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-medium hover:shadow-large transition-smooth">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Mail className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">E-mail</h3>
                  <a
                    href="mailto:contato@jrtransfer.com.br"
                    className="text-lg text-foreground hover:text-accent transition-smooth"
                  >
                    contato@jrtransfer.com.br
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-medium hover:shadow-large transition-smooth">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <MapPin className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Localização</h3>
                  <p className="text-lg text-foreground">
                    Rio de Janeiro, RJ
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Atendemos toda a região metropolitana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
