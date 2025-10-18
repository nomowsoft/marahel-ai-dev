import { 
  MenuItem, 
  Challenge, 
  Hero, 
  Products, 
  Certification, 
  Stat, 
  Company, 
  Solutions, 
  ProductsFooter,
  Nodes,
  Events,
  PathStep,
  Documents,
  Message,
  Metric
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
  CheckCircle,
  Cloud,
  Lock,
  Users,
  TrendingUp,
  Clock
} from "lucide-react";
import { KnowledgeHubDemo } from "@/components/animations/file2";
import { ChatbotDemo } from "@/components/animations/file3";
import { EventNavigationDemo } from "@/components/animations/file";

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
    color: "primary",
    demo: <KnowledgeHubDemo />
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
    color: "secondary",
    demo: <ChatbotDemo />
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
    color: "accent",
    demo: <EventNavigationDemo />
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

export const getNodes = (t: (key: string) => string): Nodes[] =>[
    { icon: Database, label: t('label1'), color: "primary" },
    { icon: Cloud, label: t('label2'), color: "secondary" },
    { icon: Lock, label: t('label3'), color: "accent" },
    { icon: Zap, label: t('label4'), color: "primary" },
];

export const getEvents = (t: (key: string) => string): Events[] =>[
    { time: "09:00", title: t('title1'), location: t('location1'), room: "A1" },
    { time: "11:00", title: t('title2'), location: t('location2'), room: "B2" },
    { time: "14:00", title: t('title3'), location: t('location3'), room: "C3" },
];

export const getPathSteps = (t: (key: string) => string): PathStep[] => [
  { x: "20%", y: "30%", label: t('label1') },
  { x: "40%", y: "40%", label: t('label2') },
  { x: "60%", y: "35%", label: t('label3') },
  { x: "75%", y: "45%", label: t('label4') },
];

 export const getDocuments = (t: (key: string) => string): Documents[] => [
    { title: t('title1'), type: "PDF", pages: 24 },
    { title: t('title2'), type: "PDF", pages: 156 },
    { title: t('title3'), type: "DOC", pages: 89 },
  ];

  
export const getDemomessage = (t: (key: string) => string): Message[] => [
    { role: "user", content: t('content1') },
    { role: "assistant", content: t('content2') },
    { role: "user", content: t('content3') },
    { role: "assistant", content: t('content4') },
  ];
  
export const getMetric = (t: (key: string) => string): Metric[] => [
    { icon: Users, label: t('label1'), value: 0, max: 2847, suffix: "", color: "primary" },
    { icon: TrendingUp, label: t('label2'), value: 0, max: 98, suffix: "%", color: "secondary" },
    { icon: Clock, label: t('label3'), value: 0, max: 2.3, suffix: "ث", color: "accent" },
    { icon: Zap, label: t('label4'), value: 0, max: 15420, suffix: "", color: "primary" },
];
