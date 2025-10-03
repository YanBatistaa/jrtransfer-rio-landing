import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteContent } from "@/data/siteContent";
import { Icon } from "@/components/ui/Icon";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function DifferentiatorsSection() {
  const { t } = useTranslation();
  const differentiatorsItems = t("differentiators.items", { returnObjects: true }) || [];

  return (
    <section id="diferenciais" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          {t("differentiators.title")}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Array.isArray(differentiatorsItems) && differentiatorsItems.map((item, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-border/50 hover:bg-card/90 hover:border-primary transition-colors duration-300 h-full">
                <CardHeader className="flex flex-col items-center text-center">
                  <Icon name={siteContent.differentiators[index].iconName} className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center font-sans">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}