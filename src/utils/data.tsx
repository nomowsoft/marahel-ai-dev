import { 
  MenuItem, 
  Challenge, 
  Hero, 
  Products, 
  Certification, 
  Stat, 
  Company, 
  Solutions, 
  ProductsFooter 
} from "./types";
import {
  Database, 
  Zap, 
  Shield, 
  Globe, 
  FileText, 
  MessageSquare, 
  Calendar, 
  Award, 
  CheckCircle
} from "lucide-react";


export const getMenuItem = (t: (key: string) => string): MenuItem[] => [
    {
        name: t('home'),
        href: "",
        isActive: true,
    }
]

export const gethero = (t: (key: string) => string): Hero[] => [
    {
        icon: (
            <div className="w-10 h-7 bg-[#1a5d3a] rounded flex items-center justify-center text-white text-xs font-bold">
                KSA
            </div>
        ),
        label: t('Herolabale1'),
        bg: "bg-primary/10",
    },
    {
        icon: <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />,
        label: t('Herolabale2'),
        bg: "bg-secondary/10",
    },
    {
        icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />,
        label: t('Herolabale3'),
        bg: "bg-accent/10",
    },
    {
        icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
        label: t('Herolabale4'),
        bg: "bg-primary/10",
    },
]

export const getProducts = (t: (key: string) => string): Products[] => [
  {
    icon: FileText,
    title: t("title1"),
    description: t("description1"),
    features: [
      t("features11"),
      t("features12"),
      t("features13")
    ],
    color: "primary"
  },
  {
    icon: MessageSquare,
    title: t("title2"),
    description: t("description2"),
    features: [
      t("features21"),
      t("features22"),
      t("features23")
    ],
    color: "secondary"
  },
  {
    icon: Calendar,
    title: t("title3"),
    description: t("description3"),
    features: [
      t("features31"),
      t("features32"),
      t("features33")
    ],
    color: "accent"
  }
];

export const getChallenges = (t: (key: string) => string): Challenge[] => [
    {
        icon: Database,
        title: t('title1'),
        description: t('global1'),
        global: t('global1'),
        color: "primary",
    },
    {
        icon: Zap,
         title: t('title2'),
        description: t('global2'),
        global: t('global2'),
        color: "secondary",
    },
    {
        icon: Shield,
        title: t('title3'),
        description: t('global3'),
        global: t('global3'),
        color: "accent",
    },
];

export const getCertifications = (t: (key: string) => string): Certification[] => [
  {
    icon: Shield,
    title: t('title1'),
    description: t('description1'),
    color: "primary",
  },
  {
    icon: Award,
    title: t('title2'),
    description: t('description3'),
    color: "secondary",
  },
  {
    icon: CheckCircle,
    title: t('title3'),
    description: t('description3'),
    color: "accent",
  },
  {
    icon: () => (
      <div className="w-10 h-7 bg-[#1a5d3a] rounded flex items-center justify-center text-white text-xs font-bold">
        KSA
      </div>
    ),
    title: t('title4'),
    description: t('description4'),
    color: "primary",
  },
];

export const getStats = (t: (key: string) => string): Stat[] => [
  { value: "99.9%", label: t('label1'), color: "primary" },
  { value: "0", label: t('label2'), color: "secondary" },
  { value: "<10ms", label: t('label3'), color: "accent" },
  { value: "24/7", label: t('label4'), color: "primary" },
];

export const getCompany = (t: (key: string) => string): Company[] => [
  {name: t('name1')},
  {name: t('name2')},
  {name: t('name3')},
];
export const getSolutions = (t: (key: string) => string): Solutions[] => [
  {name: t('name4')},
  {name: t('name5')},
  {name: t('name6')},
];
export const getProductsFooter = (t: (key: string) => string): ProductsFooter[] => [
  {name: t('name7')},
  {name: t('name8')},
  {name: t('name9')},
  {name: t('name10')},
];
