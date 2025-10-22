import { LucideIcon } from "lucide-react";
import {
    FileText,
    MessageSquare,
    Calendar,
    Share2,
    Languages,
    Zap,
    Paperclip,
    Database,
    Globe,
    Brain,
    Headphones,
    Shield,
    Users,
    PhoneCall,
    Waypoints,
    CalendarClock,
    Smartphone,
    Network,
    ChartColumn
} from "lucide-react";
import { KnowledgeHubDemo } from "@/components/animations/file2";
import { ChatbotDemo } from "@/components/animations/file3";
import { EventNavigationDemo } from "@/components/animations/file";
import { ReactNode } from "react";

export type Feature = {
    id: number;
    icon: LucideIcon;
    text: string;
    description: string;
}
export type Feature2 = {
    id: number;
    icon: LucideIcon | (() => ReactNode);
    text: string;
}
export type Work = {
    id: number;
    icon: LucideIcon | (() => ReactNode);
    text: string;
    description: string;
}
export type Performance = {
    id: number;
    icon: LucideIcon | (() => ReactNode);
    text: string;
    description: string;
}
export type SecurityItem = {
    id: number;
    text: string;
}
export type Security = {
    id: number;
    text: string;
    title: string;
    SecurityItem: SecurityItem[];
}

export type ProductsItem = {
    id: number
    icon: LucideIcon | (() => ReactNode);
    title: string;
    description: string;
    features: Feature[];
    features2: Feature2[];
    work: Work[];
    security: Security[];
    performance: Performance[];
    color: "primary" | "secondary" | "accent" | string;
    demo: ReactNode;
    footertitle:string;
    footertext:string;
}


export const getProducts = (t: (key: string) => string): ProductsItem[] => [
    {
        id: 1,
        icon: FileText,
        title: t('knowledgehub.title'),
        description: t('knowledgehub.description'),
        features: [
            {
                id: 1,
                icon: Share2,
                text: t('knowledgehub.features.f1'),
                description:
                    t('knowledgehub.featuresDesc.f1'),
            },
            {
                id: 2,
                icon: Languages,
                text: t('knowledgehub.features.f2'),
                description:
                    t('knowledgehub.featuresDesc.f2'),
            },
            {
                id: 3,
                icon: Zap,
                text: t('knowledgehub.features.f3'),
                description:
                    t('knowledgehub.featuresDesc.f3'),
            },
        ],
        features2: [
            {
                id: 1,
                icon: Share2,
                text: t('knowledgehub.features2.f1'),
            },
            {
                id: 2,
                icon: Share2,
                text: t('knowledgehub.features2.f2'),
            },
            {
                id: 3,
                icon: Share2,
                text: t('knowledgehub.features2.f3'),
            },
            {
                id: 4,
                icon: Share2,
                text: t('knowledgehub.features2.f4'),
            },
            {
                id: 5,
                icon: Share2,
                text: t('knowledgehub.features2.f5'),
            },
            {
                id: 6,
                icon: Share2,
                text: t('knowledgehub.features2.f6'),
            },
            {
                id: 7,
                icon: Share2,
                text: t('knowledgehub.features2.f7'),
            },
            {
                id: 8,
                icon: Share2,
                text: t('knowledgehub.features2.f8'),
            },
            {
                id: 9,
                icon: Share2,
                text: t('knowledgehub.features2.f9'),
            },
            {
                id: 10,
                icon: Share2,
                text: t('knowledgehub.features2.f10'),
            },
        ],
        work: [
            {
                id: 1,
                icon: Paperclip,
                text: t('knowledgehub.work.w1.text'),
                description: t('knowledgehub.work.w1.desc'),
            },
            {
                id: 2,
                icon: Database,
                text: t('knowledgehub.work.w2.text'),
                description: t('knowledgehub.work.w2.desc'),
            },
            {
                id: 3,
                icon: Share2,
                text: t('knowledgehub.work.w3.text'),
                description: t('knowledgehub.work.w3.desc'),
            },
            {
                id: 4,
                icon: Globe,
                text: t('knowledgehub.work.w4.text'),
                description: t('knowledgehub.work.w4.desc'),
            },
            {
                id: 5,
                icon: Brain,
                text: t('knowledgehub.work.w5.text'),
                description: t('knowledgehub.work.w5.desc'),
            },
        ],
        performance: [
            {
                id: 1,
                icon: Zap,
                text: t('knowledgehub.performance.p1.text'),
                description: t('knowledgehub.performance.p1.desc'),
            },
            {
                id: 2,
                icon: Paperclip,
                text: t('knowledgehub.performance.p2.text'),
                description: t('knowledgehub.performance.p2.desc'),
            },
            {
                id: 3,
                icon: Languages,
                text: t('knowledgehub.performance.p3.text'),
                description: t('knowledgehub.performance.p3.desc'),
            },
            {
                id: 4,
                icon: Globe,
                text: t('knowledgehub.performance.p4.text'),
                description: t('knowledgehub.performance.p4.desc'),
            },

        ],
        security: [
            {
                id:1,
                text: t('knowledgehub.security.s1.text'),
                title: t('knowledgehub.security.s1.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('knowledgehub.security.s1.items.i1')
                    },
                    {
                        id:2,
                        text: t('knowledgehub.security.s1.items.i2')
                    },
                    {
                        id:3,
                        text: t('knowledgehub.security.s1.items.i3')
                    },
                ]
            },
            {
                id:2,
                text: t('knowledgehub.security.s2.text'),
                title: t('knowledgehub.security.s2.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('knowledgehub.security.s2.items.i1')
                    },
                    {
                        id:2,
                        text: t('knowledgehub.security.s2.items.i2')
                    },
                    {
                        id:3,
                        text: t('knowledgehub.security.s2.items.i3')
                    },
                ]
            }
        ],
        color: "primary",
        demo: <KnowledgeHubDemo />,
        footertitle: t('knowledgehub.footerTitle'),
        footertext: t('knowledgehub.footerText'),
    },
    {
        id: 2,
        icon: MessageSquare,
        title: t('morshed.title'),
        description: t('morshed.description'),
        features: [
            {
                id: 1,
                icon: Zap,
                text: t('morshed.features.f1'),
                description:
                    t('morshed.featuresDesc.f1'),
            },
            {
                id: 2,
                icon: Headphones,
                text: t('morshed.features.f2'),
                description:
                    t('morshed.featuresDesc.f2'),
            },
            {
                id: 2,
                icon: Shield,
                text: t('morshed.features.f2'),
                description:
                    t('morshed.featuresDesc.f2'),
            },
        ],
        features2: [
            {
                id: 1,
                icon: Share2,
                text: t('morshed.features2.f1'),
            },
            {
                id: 2,
                icon: Share2,
                text: t('morshed.features2.f2'),
            },
            {
                id: 3,
                icon: Share2,
                text: t('morshed.features2.f3'),
            },
            {
                id: 4,
                icon: Share2,
                text: t('morshed.features2.f3'),
            },
            {
                id: 5,
                icon: Share2,
                text: t('morshed.features2.f4'),
            },
            {
                id: 6,
                icon: Share2,
                text: t('morshed.features2.f5'),
            },
            {
                id: 7,
                icon: Share2,
                text: t('morshed.features2.f6'),
            },
            {
                id: 7,
                icon: Share2,
                text: t('morshed.features2.f7'),
            },
        ],
        work: [
            {
                id: 1,
                icon: MessageSquare,
                text: t('morshed.work.w1.text'),
                description: t('morshed.work.w1.desc'),
            },
            {
                id: 2,
                icon: Brain,
                text: t('morshed.work.w2.text'),
                description: t('morshed.work.w2.desc'),
            },
            {
                id: 3,
                icon: FileText,
                text: t('morshed.work.w3.text'),
                description: t('morshed.work.w3.desc'),
            },
            {
                id: 4,
                icon: Headphones,
                text: t('morshed.work.w4.text'),
                description: t('morshed.work.w4.desc'),
            },
            {
                id: 5,
                icon: Users,
                text: t('morshed.work.w5.text'),
                description: t('morshed.work.w5.desc'),
            },
        ],
        performance: [
            {
                id: 1,
                icon: Zap,
                text: t('morshed.performance.p1.text'),
                description: t('morshed.performance.p1.desc'),
            },
            {
                id: 2,
                icon: PhoneCall,
                text: t('morshed.performance.p1.text'),
                description: t('morshed.performance.p1.desc'),
            },
            {
                id: 3,
                icon: Globe,
                text: t('morshed.performance.p1.text'),
                description: t('morshed.performance.p1.desc'),
            },
            {
                id: 4,
                icon: Headphones,
                text: t('morshed.performance.p1.text'),
                description: t('morshed.performance.p1.desc'),
            },
        ],
        security: [
            {
                id:1,
                text: t('morshed.security.s1.text'),
                title: t('morshed.security.s1.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('morshed.security.s1.items.i1')
                    },
                    {
                        id:2,
                        text: t('morshed.security.s1.items.i2')
                    },
                    {
                        id:3,
                        text: t('morshed.security.s1.items.i3')
                    },
                ]
            },
            {
                id:2,
                text: t('morshed.security.s2.text'),
                title: t('morshed.security.s2.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('morshed.security.s2.items.i1')
                    },
                    {
                        id:2,
                        text: t('morshed.security.s2.items.i2')
                    },
                    {
                        id:3,
                        text: t('morshed.security.s2.items.i3')
                    },
                ]
            }
        ],
        color: "secondary",
        demo: <ChatbotDemo />,
        footertitle: t('morshed.footerTitle'),
        footertext: t('morshed.footerText'),
    },
    {
        id: 3,
        icon: Calendar,
        title: t('rafiki.title'),
        description: t('rafiki.description'),
        features: [
            {
                id: 1,
                icon: Waypoints,
                text: t('rafiki.features.f1'),
                description:
                    t('rafiki.featuresDesc.f1'),
            },
            {
                id: 2,
                icon: CalendarClock,
                text: t('rafiki.features.f2'),
                description:
                    t('rafiki.featuresDesc.f2'),
            },
            {
                id: 2,
                icon: MessageSquare,
                text: t('rafiki.features.f3'),
                description:
                    t('rafiki.featuresDesc.f3'),
            },
        ],
        features2: [
            {
                id: 1,
                icon: Share2,
                text: t('rafiki.features2.f1'),
            },
            {
                id: 2,
                icon: Share2,
                text: t('rafiki.features2.f2'),
            },
            {
                id: 3,
                icon: Share2,
                text: t('rafiki.features2.f3'),
            },
            {
                id: 4,
                icon: Share2,
                text: t('rafiki.features2.f4'),
            },
            {
                id: 5,
                icon: Share2,
                text: t('rafiki.features2.f5'),
            },
            {
                id: 6,
                icon: Share2,
                text: t('rafiki.features2.f6'),
            },
            {
                id: 7,
                icon: Share2,
                text: t('rafiki.features2.f7'),
            },
            {
                id: 8,
                icon: Share2,
                text: t('rafiki.features2.f8'),
            },
            {
                id: 9,
                icon: Share2,
                text: t('rafiki.features2.f9'),
            },
            {
                id: 10,
                icon: Share2,
                text: t('rafiki.features2.f10'),
            },
        ],
        work: [
            {
                id: 1,
                icon: Smartphone,
                text: t('rafiki.work.w1.text'),
                description: t('rafiki.work.w1.desc'),
            },
            {
                id: 2,
                icon: Network,
                text: t('rafiki.work.w2.text'),
                description: t('rafiki.work.w2.desc'),
            },
            {
                id: 3,
                icon: Brain,
                text: t('rafiki.work.w3.text'),
                description: t('rafiki.work.w3.desc'),
            },
            {
                id: 4,
                icon: ChartColumn,
                text: t('rafiki.work.w4.text'),
                description: t('rafiki.work.w4.desc'),
            },
            {
                id: 5,
                icon: Network,
                text: t('rafiki.work.w5.text'),
                description: t('rafiki.work.w5.desc'),
            },
        ],
        performance: [
            {
                id: 1,
                icon: Share2,
                text: t('rafiki.performance.p1.text'),
                description: t('rafiki.performance.p1.desc'),
            },
            {
                id: 2,
                icon: Share2,
                text: t('rafiki.performance.p2.text'),
                description: t('rafiki.performance.p2.desc'),
            },
            {
                id: 3,
                icon: Share2,
                text: t('rafiki.performance.p3.text'),
                description: t('rafiki.performance.p3.desc'),
            },
            {
                id: 4,
                icon: Share2,
                text: t('rafiki.performance.p4.text'),
                description: t('rafiki.performance.p4.desc'),
            },
        ],
        security: [
            {
                id:1,
                text: t('rafiki.security.s1.text'),
                title: t('rafiki.security.s1.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('rafiki.security.s1.items.i1')
                    },
                    {
                        id:2,
                        text: t('rafiki.security.s1.items.i2')
                    },
                    {
                        id:3,
                        text: t('rafiki.security.s1.items.i3')
                    },
                ]
            },
            {
                id:2,
                text: t('rafiki.security.s2.text'),
                title: t('rafiki.security.s2.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('rafiki.security.s2.items.i1')
                    },
                    {
                        id:2,
                        text: t('rafiki.security.s2.items.i2')
                    },
                    {
                        id:3,
                        text: t('rafiki.security.s2.items.i3')
                    },
                ]
            }
        ],
        color: "accent",
        demo: <EventNavigationDemo />,
        footertitle: t('rafiki.footerTitle'),
        footertext: t('rafiki.footerText'),
    }
];