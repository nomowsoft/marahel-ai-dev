import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type MenuItem = {
    name: string;
    href: string;
    isActive: boolean;
};

export type Challenge = {
  icon: LucideIcon;
  title: string;
  description: string;
  global: string;
  color: "primary" | "secondary" | "accent";
};

export type Hero = {
  icon: ReactNode;
  label: string;
  bg: string;
}

export type Products = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: "primary" | "secondary" | "accent";
  demo: ReactNode;
}

export type Certification = {
  icon: LucideIcon | (() => ReactNode);
  title: string;
  description: string;
  color: "primary" | "secondary" | "accent";
}

export type Stat = {
  value: string;
  label: string;
  color: "primary" | "secondary" | "accent";
}

export type Company = {
  name: string;
}

export type Solutions = {
  name: string;
}

export type ProductsFooter = {
  name: string;
}
