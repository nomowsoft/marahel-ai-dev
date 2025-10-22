import {
    LucideIcon,
    FileText,
    Shield,
    Users,
    ChartColumn,
    Wrench,
    Scale,
    Clock4,
    Coins,
    Gauge,
    FileCheck2,
    Timer,
    Landmark,
    Lock,
    Sparkles,
    Layers,
    Target,
    Briefcase,
    ChartNoAxesCombined
} from "lucide-react";
import { KnowledgeHubDemo } from "@/components/animations/file2";
import { ReactNode } from "react";

export type Feature = {
    id: number;
    icon: LucideIcon;
    text: string;
    description: string;
}
export type method = {
    id: number;
    title: string;
    text: string;
}
export type Deliverables = {
    id: number;
    text: string;
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

export type ServicesItem = {
    id: number
    icon: LucideIcon | (() => ReactNode);
    title: string;
    description: string;
    features: Feature[];
    method: method[];
    deliverables: Deliverables[];
    security: Security[];
    performance: Performance[];
    color: "primary" | "secondary" | "accent" | string;
    demo: ReactNode;
    footertitle:string;
    footertext:string;
    button1:string;
    button2:string;
    button3:string;
    button4:string;
    methoddescription:string;
    deliverablesaddress:string;
    Program:string;
}


export const getServices = (t: (key: string) => string): ServicesItem[] => [
    {
        id: 1,
        icon: FileText,
        title: t('LLMS.title'),
        description: t('LLMS.description'),
        features: [
            {
                id: 1,
                icon: ChartColumn,
                text: t('LLMS.features.f1'),
                description:
                    t('LLMS.featuresDesc.f1'),
            },
            {
                id: 2,
                icon: Wrench,
                text: t('LLMS.features.f2'),
                description:
                    t('LLMS.featuresDesc.f2'),
            },
            {
                id: 3,
                icon: Scale,
                text: t('LLMS.features.f3'),
                description:
                    t('LLMS.featuresDesc.f3'),
            },
        ],
        method: [
            {
                id: 1,
                title: t('LLMS.methodtitle.f1'),
                text: t('LLMS.method.f1'),
            },
            {
                id: 2,
                title: t('LLMS.methodtitle.f2'),
                text: t('LLMS.method.f2'),
            },
            {
                id: 3,
                title: t('LLMS.methodtitle.f3'),
                text: t('LLMS.method.f3'),
            },
            {
                id: 4,
                title: t('LLMS.methodtitle.f4'),
                text: t('LLMS.method.f4'),
            },
            {
                id: 5,
                title: t('LLMS.methodtitle.f5'),
                text: t('LLMS.method.f5'),
            },
            {
                id: 6,
                title: t('LLMS.methodtitle.f6'),
                text: t('LLMS.method.f6'),
            }
        ],
        deliverables: [
            {
                id: 1,
                text: t('LLMS.deliverables.w1.text'),
            },
            {
                id: 2,
                text: t('LLMS.deliverables.w2.text'),
            },
            {
                id: 3,
                text: t('LLMS.deliverables.w3.text'),
            },
            {
                id: 4,
                text: t('LLMS.deliverables.w4.text'),
            },
            {
                id: 5,
                text: t('LLMS.deliverables.w5.text'),
            },
            {
                id: 6,
                text: t('LLMS.deliverables.w1.text'),
            },
            {
                id: 7,
                text: t('LLMS.deliverables.w1.text'),
            },
            {
                id: 8,
                text: t('LLMS.deliverables.w1.text'),
            },
            {
                id: 9,
                text: t('LLMS.deliverables.w1.text'),
            },
            {
                id: 10,
                text: t('LLMS.deliverables.w1.text'),
            },
        ],
        performance: [
            {
                id: 1,
                icon: ChartColumn,
                text: t('LLMS.performance.p1.text'),
                description: t('LLMS.performance.p1.desc'),
            },
            {
                id: 2,
                icon: Clock4,
                text: t('LLMS.performance.p2.text'),
                description: t('LLMS.performance.p2.desc'),
            },
            {
                id: 3,
                icon: Coins,
                text: t('LLMS.performance.p3.text'),
                description: t('LLMS.performance.p3.desc'),
            },
            {
                id: 4,
                icon: Gauge,
                text: t('LLMS.performance.p4.text'),
                description: t('LLMS.performance.p4.desc'),
            },

        ],
        security: [
            {
                id:1,
                text: t('LLMS.security.s1.text'),
                title: t('LLMS.security.s1.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('LLMS.security.s1.items.i1')
                    },
                    {
                        id:2,
                        text: t('LLMS.security.s1.items.i2')
                    },
                    {
                        id:3,
                        text: t('LLMS.security.s1.items.i3')
                    },
                ]
            },
            {
                id:2,
                text: t('LLMS.security.s2.text'),
                title: t('LLMS.security.s2.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('LLMS.security.s2.items.i1')
                    },
                    {
                        id:2,
                        text: t('LLMS.security.s2.items.i1')
                    },
                    {
                        id:3,
                        text: t('LLMS.security.s2.items.i1')
                    },
                ]
            }
        ],
        color: "primary",
        demo: <KnowledgeHubDemo />,
        footertitle: t('LLMS.footerTitle'),
        footertext: t('LLMS.footerText'),
        button1: t('LLMS.button1'),
        button2: t('LLMS.button2'),
        button3: t('LLMS.button3'),
        button4: t('LLMS.button4'),
        methoddescription: t('LLMS.methoddescription'),
        deliverablesaddress: t('LLMS.deliverablesaddress'),
        Program: t('LLMS.Program')
    },
    {
        id: 2,
        icon: FileText,
        title: t('Readiness.title'),
        description: t('Readiness.description'),
        features: [
            {
                id: 1,
                icon: ChartColumn,
                text: t('Readiness.features.f1'),
                description:
                    t('Readiness.featuresDesc.f1'),
            },
            {
                id: 2,
                icon: FileCheck2,
                text: t('Readiness.features.f2'),
                description:
                    t('Readiness.featuresDesc.f2'),
            },
            {
                id: 3,
                icon: Timer,
                text: t('Readiness.features.f3'),
                description:
                    t('Readiness.featuresDesc.f3'),
            },
        ],
        method: [
            {
                id: 1,
                title: t('Readiness.methodtitle.f1'),
                text: t('Readiness.method.f1'),
            },
            {
                id: 2,
                title: t('Readiness.methodtitle.f2'),
                text: t('Readiness.method.f2'),
            },
            {
                id: 3,
                title: t('Readiness.methodtitle.f2'),
                text: t('Readiness.method.f3'),
            },
            {
                id: 4,
                title: t('Readiness.methodtitle.f3'),
                text: t('Readiness.method.f4'),
            },
            {
                id: 5,
                title: t('Readiness.methodtitle.f4'),
                text: t('Readiness.method.f5'),
            },
            {
                id: 6,
                title: t('Readiness.methodtitle.f5'),
                text: t('Readiness.method.f6'),
            }
        ],
        deliverables: [
            {
                id: 1,
                text: t('Readiness.deliverables.w1.text'),
            },
            {
                id: 2,
                text: t('Readiness.deliverables.w2.text'),
            },
            {
                id: 3,
                text: t('Readiness.deliverables.w3.text'),
            },
            {
                id: 4,
                text: t('Readiness.deliverables.w4.text'),
            },
            {
                id: 5,
                text: t('Readiness.deliverables.w5.text'),
            },
            {
                id: 6,
                text: t('Readiness.deliverables.w1.text'),
            },
        ],
        performance: [
            {
                id: 1,
                icon: Timer,
                text: t('Readiness.performance.p1.text'),
                description: t('Readiness.performance.p1.desc'),
            },
            {
                id: 2,
                icon: Landmark,
                text: t('Readiness.performance.p2.text'),
                description: t('Readiness.performance.p2.desc'),
            },
            {
                id: 3,
                icon: Shield,
                text: t('Readiness.performance.p3.text'),
                description: t('Readiness.performance.p3.desc'),
            },
            {
                id: 4,
                icon: Lock,
                text: t('Readiness.performance.p4.text'),
                description: t('Readiness.performance.p4.desc'),
            },

        ],
        security: [
            {
                id:1,
                text: t('Readiness.security.s1.text'),
                title: t('Readiness.security.s1.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('Readiness.security.s1.items.i1')
                    },
                    {
                        id:2,
                        text: t('Readiness.security.s1.items.i2')
                    },
                    {
                        id:3,
                        text: t('Readiness.security.s1.items.i3')
                    },
                ]
            },
            {
                id:2,
                text: t('Readiness.security.s2.text'),
                title: t('Readiness.security.s2.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('Readiness.security.s2.items.i1')
                    },
                    {
                        id:2,
                        text: t('Readiness.security.s2.items.i1')
                    },
                    {
                        id:3,
                        text: t('Readiness.security.s2.items.i1')
                    },
                ]
            }
        ],
        color: "primary",
        demo: <KnowledgeHubDemo />,
        footertitle: t('Readiness.footerTitle'),
        footertext: t('Readiness.footerText'),
        button1: t('Readiness.button1'),
        button2: t('Readiness.button2'),
        button3: t('Readiness.button3'),
        button4: t('Readiness.button4'),
        methoddescription: t('Readiness.methoddescription'),
        deliverablesaddress: t('Readiness.deliverablesaddress'),
        Program: t('Readiness.Program')
    },
    {
        id: 3,
        icon: FileText,
        title: t('Roadmap.title'),
        description: t('Roadmap.description'),
        features: [
            {
                id: 1,
                icon: ChartColumn,
                text: t('Roadmap.features.f1'),
                description:
                    t('Roadmap.featuresDesc.f1'),
            },
            {
                id: 2,
                icon: FileCheck2,
                text: t('Roadmap.features.f2'),
                description:
                    t('Roadmap.featuresDesc.f2'),
            },
            {
                id: 3,
                icon: Timer,
                text: t('Roadmap.features.f3'),
                description:
                    t('Roadmap.featuresDesc.f3'),
            },
        ],
        method: [
            {
                id: 1,
                title: t('Roadmap.methodtitle.f1'),
                text: t('Roadmap.method.f1'),
            },
            {
                id: 2,
                title: t('Roadmap.methodtitle.f2'),
                text: t('Roadmap.method.f2'),
            },
            {
                id: 3,
                title: t('Roadmap.methodtitle.f3'),
                text: t('Roadmap.method.f3'),
            },
            {
                id: 4,
                title: t('Roadmap.methodtitle.f4'),
                text: t('Roadmap.method.f4'),
            },
            {
                id: 5,
                title: t('Roadmap.methodtitle.f5'),
                text: t('Roadmap.method.f5'),
            },
            {
                id: 6,
                title: t('Roadmap.methodtitle.f6'),
                text: t('Roadmap.method.f6'),
            }
        ],
        deliverables: [
            {
                id: 1,
                text: t('Roadmap.deliverables.w1.text'),
            },
            {
                id: 2,
                text: t('Roadmap.deliverables.w2.text'),
            },
            {
                id: 3,
                text: t('Roadmap.deliverables.w3.text'),
            },
            {
                id: 4,
                text: t('Roadmap.deliverables.w4.text'),
            }
        ],
        performance: [
            {
                id: 1,
                icon: ChartColumn,
                text: t('Roadmap.performance.p1.text'),
                description: t('Roadmap.performance.p1.desc'),
            },
            {
                id: 2,
                icon: Landmark,
                text: t('Roadmap.performance.p2.text'),
                description: t('Roadmap.performance.p2.desc'),
            },
            {
                id: 3,
                icon: Shield,
                text: t('Roadmap.performance.p3.text'),
                description: t('Roadmap.performance.p3.desc'),
            },
            {
                id: 4,
                icon: Gauge,
                text: t('Roadmap.performance.p4.text'),
                description: t('Roadmap.performance.p4.desc'),
            },

        ],
        security: [
            {
                id:1,
                text: t('Roadmap.security.s1.text'),
                title: t('Roadmap.security.s1.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('Roadmap.security.s1.items.i1')
                    },
                    {
                        id:2,
                        text: t('Roadmap.security.s1.items.i2')
                    },
                    {
                        id:3,
                        text: t('Roadmap.security.s1.items.i3')
                    },
                ]
            },
            {
                id:2,
                text: t('Roadmap.security.s2.text'),
                title: t('Roadmap.security.s2.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('Roadmap.security.s2.items.i1')
                    },
                    {
                        id:2,
                        text: t('Roadmap.security.s2.items.i1')
                    },
                    {
                        id:3,
                        text: t('Roadmap.security.s2.items.i1')
                    },
                ]
            }
        ],
        color: "primary",
        demo: <KnowledgeHubDemo />,
        footertitle: t('Roadmap.footerTitle'),
        footertext: t('Roadmap.footerText'),
        button1: t('Roadmap.button1'),
        button2: t('Roadmap.button2'),
        button3: t('Roadmap.button3'),
        button4: t('Roadmap.button4'),
        methoddescription: t('Roadmap.methoddescription'),
        deliverablesaddress: t('Roadmap.deliverablesaddress'),
        Program: t('Roadmap.Program')
    },
    {
        id: 4,
        icon: FileText,
        title: t('Platform.title'),
        description: t('Platform.description'),
        features: [
            {
                id: 1,
                icon: Shield,
                text: t('Platform.features.f1'),
                description:
                    t('Platform.featuresDesc.f1'),
            },
            {
                id: 2,
                icon: Coins,
                text: t('Platform.features.f2'),
                description:
                    t('Platform.featuresDesc.f2'),
            },
            {
                id: 3,
                icon: Gauge,
                text: t('Platform.features.f3'),
                description:
                    t('Platform.featuresDesc.f3'),
            },
        ],
        method: [
            {
                id: 1,
                title: t('Platform.methodtitle.f1'),
                text: t('Platform.method.f1'),
            },
            {
                id: 2,
                title: t('Platform.methodtitle.f2'),
                text: t('Platform.method.f2'),
            },
            {
                id: 3,
                title: t('Platform.methodtitle.f3'),
                text: t('Platform.method.f3'),
            },
            {
                id: 4,
                title: t('Platform.methodtitle.f4'),
                text: t('Platform.method.f4'),
            },
            {
                id: 5,
                title: t('Platform.methodtitle.f5'),
                text: t('Platform.method.f5'),
            },
            {
                id: 6,
                title: t('Platform.methodtitle.f6'),
                text: t('Platform.method.f6'),
            }
        ],
        deliverables: [
            {
                id: 1,
                text: t('Platform.deliverables.w1.text'),
            },
            {
                id: 2,
                text: t('Platform.deliverables.w2.text'),
            },
            {
                id: 3,
                text: t('Platform.deliverables.w3.text'),
            },
            {
                id: 4,
                text: t('Platform.deliverables.w4.text'),
            },
            {
                id: 5,
                text: t('Platform.deliverables.w6.text'),
            },
            {
                id: 6,
                text: t('Platform.deliverables.w6.text'),
            }
        ],
        performance: [
            {
                id: 1,
                icon: ChartColumn,
                text: t('Platform.performance.p1.text'),
                description: t('Platform.performance.p1.desc'),
            },
            {
                id: 2,
                icon: Landmark,
                text: t('Platform.performance.p2.text'),
                description: t('Platform.performance.p2.desc'),
            },
            {
                id: 3,
                icon: Shield,
                text: t('Platform.performance.p3.text'),
                description: t('Platform.performance.p3.desc'),
            },
            {
                id: 4,
                icon: Gauge,
                text: t('Platform.performance.p4.text'),
                description: t('Platform.performance.p4.desc'),
            },

        ],
        security: [
            {
                id:1,
                text: t('Platform.security.s1.text'),
                title: t('Platform.security.s1.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('Platform.security.s1.items.i1')
                    },
                    {
                        id:2,
                        text: t('Platform.security.s1.items.i2')
                    },
                    {
                        id:3,
                        text: t('Platform.security.s1.items.i3')
                    },
                ]
            },
            {
                id:2,
                text: t('Platform.security.s2.text'),
                title: t('Platform.security.s2.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('Platform.security.s2.items.i1')
                    },
                    {
                        id:2,
                        text: t('Platform.security.s2.items.i2')
                    },
                    {
                        id:3,
                        text: t('Platform.security.s2.items.i3')
                    },
                ]
            }
        ],
        color: "primary",
        demo: <KnowledgeHubDemo />,
        footertitle: t('Platform.footerTitle'),
        footertext: t('Platform.footerText'),
        button1: t('Platform.button1'),
        button2: t('Platform.button2'),
        button3: t('Platform.button3'),
        button4: t('Platform.button4'),
        methoddescription: t('Platform.methoddescription'),
        deliverablesaddress: t('Platform.deliverablesaddress'),
        Program: t('Platform.Program')
    },
    {
        id: 5,
        icon: FileText,
        title: t('Customized.title'),
        description: t('Customized.description'),
        features: [
            {
                id: 1,
                icon: Sparkles,
                text: t('Customized.features.f1'),
                description:
                    t('Customized.featuresDesc.f1'),
            },
            {
                id: 2,
                icon: Gauge,
                text: t('Customized.features.f2'),
                description:
                    t('Customized.featuresDesc.f2'),
            },
            {
                id: 3,
                icon: Shield,
                text: t('Customized.features.f3'),
                description:
                    t('Customized.featuresDesc.f3'),
            },
        ],
        method: [
            {
                id: 1,
                title: t('Customized.methodtitle.f1'),
                text: t('Customized.method.f1'),
            },
            {
                id: 2,
                title: t('Customized.methodtitle.f2'),
                text: t('Customized.method.f2'),
            },
            {
                id: 3,
                title: t('Customized.methodtitle.f3'),
                text: t('Customized.method.f3'),
            },
            {
                id: 4,
                title: t('Customized.methodtitle.f4'),
                text: t('Customized.method.f4'),
            },
            {
                id: 5,
                title: t('Customized.methodtitle.f5'),
                text: t('Customized.method.f5'),
            },
        ],
        deliverables: [
            {
                id: 1,
                text: t('Customized.deliverables.w1.text'),
            },
            {
                id: 2,
                text: t('Customized.deliverables.w2.text'),
            },
            {
                id: 3,
                text: t('Customized.deliverables.w3.text'),
            },
            {
                id: 4,
                text: t('Customized.deliverables.w4.text'),
            },
            {
                id: 5,
                text: t('Customized.deliverables.w6.text'),
            },
            {
                id: 6,
                text: t('Customized.deliverables.w6.text'),
            }
        ],
        performance: [
            {
                id: 1,
                icon: Gauge,
                text: t('Customized.performance.p1.text'),
                description: t('Customized.performance.p1.desc'),
            },
            {
                id: 2,
                icon: ChartColumn,
                text: t('Customized.performance.p2.text'),
                description: t('Customized.performance.p2.desc'),
            },
            {
                id: 3,
                icon: ChartColumn,
                text: t('Customized.performance.p3.text'),
                description: t('Customized.performance.p3.desc'),
            },
            {
                id: 4,
                icon: Layers,
                text: t('Customized.performance.p4.text'),
                description: t('Customized.performance.p4.desc'),
            },

        ],
        security: [
            {
                id:1,
                text: t('Customized.security.s1.text'),
                title: t('Customized.security.s1.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('Customized.security.s1.items.i1')
                    },
                    {
                        id:2,
                        text: t('Customized.security.s1.items.i2')
                    },
                    {
                        id:3,
                        text: t('Customized.security.s1.items.i3')
                    },
                ]
            },
            {
                id:2,
                text: t('Customized.security.s2.text'),
                title: t('Customized.security.s2.text'),
                SecurityItem: [
                    {
                        id:1,
                        text: t('Customized.security.s2.items.i1')
                    },
                    {
                        id:2,
                        text: t('Customized.security.s2.items.i2')
                    },
                    {
                        id:3,
                        text: t('Customized.security.s2.items.i3')
                    },
                ]
            }
        ],
        color: "primary",
        demo: <KnowledgeHubDemo />,
        footertitle: t('Customized.footerTitle'),
        footertext: t('Customized.footerText'),
        button1: t('Customized.button1'),
        button2: t('Customized.button2'),
        button3: t('Customized.button3'),
        button4: t('Customized.button4'),
        methoddescription: t('Customized.methoddescription'),
        deliverablesaddress: t('Customized.deliverablesaddress'),
        Program: t('Customized.Program')
    },
    {
        id: 6,
        icon: FileText,
        title: t('Strategy.title'),
        description: t('Strategy.description'),
        features: [
            {
                id: 1,
                icon: Target,
                text: t('Strategy.features.f1'),
                description:
                    t('Strategy.featuresDesc.f1'),
            },
            {
                id: 2,
                icon: Briefcase,
                text: t('Strategy.features.f2'),
                description:
                    t('Strategy.featuresDesc.f2'),
            },
            {
                id: 3,
                icon: ChartNoAxesCombined,
                text: t('Strategy.features.f3'),
                description:
                    t('Strategy.featuresDesc.f3'),
            },
            {
                id: 4,
                icon: Users,
                text: t('Strategy.features.f4'),
                description:
                    t('Strategy.featuresDesc.f4'),
            },
            {
                id: 5,
                icon: Shield,
                text: t('Strategy.features.f5'),
                description:
                    t('Strategy.featuresDesc.f5'),
            },
            {
                id: 6,
                icon: ChartColumn,
                text: t('Strategy.features.f6'),
                description:
                    t('Strategy.featuresDesc.f6'),
            },
        ],
        method: [
        ],
        deliverables: [
        ],
        performance: [
        ],
        security: [
        ],
        color: "primary",
        demo: <KnowledgeHubDemo />,
        footertitle: t('Strategy.footerTitle'),
        footertext: t('Strategy.footerText'),
        button1: t('Strategy.button1'),
        button2: t('Strategy.button2'),
        button3: t('Strategy.button3'),
        button4: t('Strategy.button4'),
        methoddescription: "",
        deliverablesaddress: "",
        Program: ""
    }
];