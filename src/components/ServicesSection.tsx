import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Users, Briefcase, MapPin } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Transfer para Aeroportos",
    description:
      "Transporte executivo para Galeão e Santos Dumont com monitoramento de voos e pontualidade garantida.",
  },
  {
    icon: Users,
    title: "Viagens e Turismo",
    description:
      "City tours personalizados pelo Rio de Janeiro com motoristas experientes e conhecedores da cidade.",
  },
  {
    icon: Briefcase,
    title: "Transporte Corporativo",
    description:
      "Soluções para empresas: eventos, reuniões e deslocamentos executivos com total profissionalismo.",
  },
  {
    icon: MapPin,
    title: "Viagens Intermunicipais",
    description:
      "Conforto e segurança para destinos como Búzios, Angra dos Reis, Paraty e região serrana.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de transporte executivo para todas as suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="gradient-card shadow-soft hover:shadow-large transition-smooth border-0 group cursor-pointer"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-accent transition-smooth">
                  <service.icon className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
