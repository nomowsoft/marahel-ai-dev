import React from "react";
import { ServicesItem, getServices } from "@/utils/data_services/data_ai";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface ServicesFeatureProps {
    service: ServicesItem;
}

const ServiceFeature: React.FC<ServicesFeatureProps> = ({ service }) => {
    const t = useTranslations("services");
    const services = React.useMemo(() => getServices(t), [t]);

    const foundService = React.useMemo(
        () => services.find((p) => p.id === service.id),
        [services, service.id]
    );

    if (!foundService) {
        return (
            <section className="text-white mt-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-2xl font-semibold text-red-400">
                        service not found
                    </h1>
                </div>
            </section>
        );
    }

    return (
        <section className="text-white mt-24 md:mt-32 bg-accent/1 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {foundService.features.map((challenge, index) => {
                        const Icon = challenge.icon;
                        return (
                            <Card
                                key={index}
                                className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`}
                                >
                                    <Icon className="text-primary" size={45} />
                                </div>

                                <h3 className="text-2xl font-bold mb-6 text-foreground">
                                    {challenge.text}
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {challenge.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>

    );
};
export default ServiceFeature;