import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Motoristas treinados e veículos com seguro completo",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Monitoramento de voos e compromisso com horários",
  },
  {
    icon: Award,
    title: "Experiência",
    description: "Anos de tradição no transporte executivo",
  },
  {
    icon: ThumbsUp,
    title: "Confiabilidade",
    description: "Clientes satisfeitos e serviço de excelência",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre Nós
            </h2>
            <p className="text-lg mb-6 text-white/90">
              A <strong>JR Transfer</strong> é referência em transporte executivo e
              turismo no Rio de Janeiro. Com anos de experiência no mercado,
              oferecemos soluções personalizadas para empresas e particulares que
              buscam conforto, segurança e pontualidade.
            </p>
            <p className="text-lg mb-6 text-white/90">
              Nossa missão é proporcionar viagens memoráveis, seja em transfers
              para aeroportos, city tours pela Cidade Maravilhosa ou viagens
              corporativas. Contamos com uma frota moderna, motoristas experientes
              e um atendimento diferenciado.
            </p>
            <p className="text-lg text-white/90">
              Quando você escolhe a JR Transfer, está escolhendo tranquilidade do
              início ao fim da sua jornada.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-smooth"
              >
                <feature.icon className="text-accent mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
