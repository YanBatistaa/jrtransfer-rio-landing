import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteContent } from "@/data/siteContent";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function FleetSection() {
  const { t } = useTranslation();
  const fleetItems = t("fleet.items", { returnObjects: true }) as Array<{name: string, description: string}> || [];

  return (
    <section id="frota" className="w-full py-12 md:py-24 lg:py-32 bg-background/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          {t("fleet.title")}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(fleetItems) && fleetItems.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-border/50 overflow-hidden group h-full">
                <CardHeader className="p-0">
                  <img
                    src={siteContent.fleet[index].image}
                    alt={`${t('fleet.title')} - ${vehicle.name}`}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy" /* Otimização nativa do navegador */
                    decoding="async"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle>{vehicle.name}</CardTitle>
                  <CardDescription className="font-sans text-muted-foreground">{vehicle.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}