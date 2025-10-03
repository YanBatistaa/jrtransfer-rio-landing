import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { siteContent } from "@/data/siteContent";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function DestinationsSection() {
  const { t } = useTranslation();

  return (
    <section id="destinos" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          {t("destinations.title")}
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {siteContent.destinations.map((destination, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="p-1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg group">
                    <CardContent className="relative flex aspect-[4/5] items-end justify-center p-0">
                      <img
                        src={destination.image}
                        alt={`${t('destinations.title')} - ${destination.name}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy" /* Otimização nativa do navegador */
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <h3 className="relative p-4 text-2xl font-display uppercase text-white drop-shadow-md z-10">
                        {destination.name}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}