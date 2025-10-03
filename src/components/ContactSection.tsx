import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { siteContent } from "@/data/siteContent";
import { Icon } from "@/components/ui/Icon";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  service: string;
  passengers: string;
  date: string;
  details: string;
  name: string;
};

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /> </svg>
);

export function ContactSection() {
  const { t } = useTranslation();
  const servicesItems = (t("services.items", { returnObjects: true }) as Array<{title: string, description: string}>) || [];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    service: "",
    passengers: "",
    date: "",
    details: "",
    name: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formattedMessage = `
*Nova Solicitação de Orçamento*

*Serviço Desejado:* ${formData.service}
*Nome:* ${formData.name}
*Nº de Passageiros:* ${formData.passengers}
*Data:* ${formData.date}
*Detalhes Adicionais:*
${formData.details}
    `;
    const encodedMessage = encodeURIComponent(formattedMessage.trim());
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${siteContent.contact.phone}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div key="step1" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}>
            <h3 className="font-bold text-lg mb-4 text-center">{t('contact.step1_title')}</h3>
            <RadioGroup value={formData.service} onValueChange={(value) => handleInputChange("service", value)} className="grid grid-cols-2 gap-4">
              {Array.isArray(servicesItems) && servicesItems.map((service, index) => (
                <Label key={index} htmlFor={`service-${index}`} className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer">
                  <RadioGroupItem value={service.title} id={`service-${index}`} className="sr-only" />
                  <Icon name={siteContent.services[index].iconName} className="h-8 w-8 mb-2 text-primary" />
                  <span className="text-center font-semibold">{service.title}</span>
                </Label>
              ))}
            </RadioGroup>
            <Button type="button" onClick={nextStep} disabled={!formData.service} className="w-full mt-6">Avançar</Button>
          </motion.div>
        );
      case 2:
        return (
          <motion.div key="step2" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="space-y-4">
            <h3 className="font-bold text-lg mb-4 text-center">{t('contact.step2_title')}</h3>
            <div>
              <Label htmlFor="passengers">{t('contact.passengers')}</Label>
              <Input id="passengers" type="number" value={formData.passengers} onChange={(e) => handleInputChange("passengers", e.target.value)} placeholder="Ex: 4" className="bg-input/50"/>
            </div>
            <div>
              <Label htmlFor="date">{t('contact.date')}</Label>
              <Input id="date" type="date" value={formData.date} onChange={(e) => handleInputChange("date", e.target.value)} className="bg-input/50"/>
            </div>
            <div>
              <Label htmlFor="details">{t('contact.details')}</Label>
              <Textarea id="details" value={formData.details} onChange={(e) => handleInputChange("details", e.target.value)} placeholder={t('contact.details_placeholder')} className="bg-input/50"/>
            </div>
            <div className="flex gap-4">
              <Button type="button" onClick={prevStep} variant="outline" className="w-full">Voltar</Button>
              <Button type="button" onClick={nextStep} className="w-full">Avançar</Button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div key="step3" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="space-y-4">
            <h3 className="font-bold text-lg mb-4 text-center">{t('contact.step3_title')}</h3>
             <div>
              <Label htmlFor="name">{t("contact.name")}</Label>
              <Input id="name" placeholder={t("contact.name_placeholder")} required value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} className="bg-input/50"/>
            </div>
            <div className="flex gap-4">
              <Button type="button" onClick={prevStep} variant="outline" className="w-full">Voltar</Button>
              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold">
                {t("contact.submit")}
              </Button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contato" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Card className="max-w-2xl mx-auto bg-card/80 border-border/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <WhatsAppIcon className="h-8 w-8 text-green-500" />
              <CardTitle className="text-3xl">{t("contact.title")}</CardTitle>
            </div>
            <CardDescription className="font-sans text-muted-foreground">
              {t("contact.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="font-sans">
              <AnimatePresence mode="wait">
                {renderStep()}
              </AnimatePresence>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}