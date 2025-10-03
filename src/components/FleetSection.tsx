import vanImage from "@/assets/fleet-van.jpg";
import sedanImage from "@/assets/fleet-sedan.jpg";
import suvImage from "@/assets/fleet-suv.jpg";

const fleet = [
  {
    image: vanImage,
    title: "Van Executiva Mercedes-Benz Sprinter",
    description: "Até 15 passageiros",
    alt: "Van Executiva Mercedes-Benz Sprinter preta para até 15 passageiros",
  },
  {
    image: sedanImage,
    title: "Sedan Executivo",
    description: "Até 3 passageiros",
    alt: "Sedan executivo preto premium para até 3 passageiros",
  },
  {
    image: suvImage,
    title: "SUV Premium",
    description: "Até 6 passageiros",
    alt: "SUV premium preto para até 6 passageiros com conforto executivo",
  },
];

const FleetSection = () => {
  return (
    <section id="frota" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossa Frota
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veículos modernos, climatizados e com seguro total para sua tranquilidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((vehicle, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-smooth"
            >
              <div className="relative overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-smooth">
                  {vehicle.title}
                </h3>
                <p className="text-muted-foreground">{vehicle.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground/80">
            Todos os veículos passam por manutenção regular e higienização rigorosa
          </p>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
