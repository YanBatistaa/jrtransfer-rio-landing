export const siteContent = {
  companyName: "JR Transfer",
  contact: {
    phone: "5521981209818",
    whatsappLink: "https://wa.me/5521981209818",
    email: "contato@jrtransfer.com.br",
  },
  socials: [
    { name: "Instagram", iconName: "Instagram", url: "https://www.instagram.com/jrtransfer" },
    { name: "Facebook", iconName: "Facebook", url: "https://www.facebook.com/jrtransfer" },
  ],
  navigation: [
    { name: "services", href: "#servicos" },
    { name: "destinations", href: "#destinos" },
    { name: "fleet", href: "#frota" },
    { name: "differentiators", href: "#diferenciais" }, // Adicionado link
    { name: "about", href: "#sobre" },
    { name: "contact", href: "#contato" },
  ],
  services: [
    { iconName: "Plane" },
    { iconName: "Camera" },
    { iconName: "Briefcase" },
    { iconName: "Calendar" },
  ],
  fleet: [
    { image: "/src/assets/fleet-sedan.jpg" },
    { image: "/src/assets/fleet-suv.jpg" },
    { image: "/src/assets/fleet-van.jpg" },
  ],
  destinations: [
    { name: "BÚZIOS", image: "/src/assets/dest-buzios.jpg" },
    { name: "ANGRA DOS REIS", image: "/src/assets/dest-angra.jpg" },
    { name: "CABO FRIO", image: "/src/assets/dest-cabo-frio.jpg" },
    { name: "PARATY", image: "/src/assets/dest-paraty.jpg" },
    { name: "ARRAIAL DO CABO", image: "/src/assets/dest-arraial.jpg" },
    { name: "CITY TOUR", image: "/src/assets/dest-city-tour.jpg" },
  ],
  // NOVA SEÇÃO DE DADOS (APENAS ÍCONES)
  differentiators: [
    { iconName: "ShieldCheck" },
    { iconName: "Clock" },
    { iconName: "Armchair" },
    { iconName: "Route" },
  ]
};