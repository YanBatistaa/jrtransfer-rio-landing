import {
  Plane, Camera, Briefcase, Calendar, Instagram, Facebook,
  ShieldCheck, Clock, Armchair, Route, // Novos ícones
  type LucideIcon,
} from "lucide-react";

// Mapeamento de nomes de ícones para os componentes reais
const iconMap: Record<string, LucideIcon> = {
  Plane,
  Camera,
  Briefcase,
  Calendar,
  Instagram,
  Facebook,
  ShieldCheck, // Adicionado
  Clock,       // Adicionado
  Armchair,    // Adicionado
  Route,       // Adicionado
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} size={size} aria-hidden="true" />;
}