import React from "react";
import { ServicesItem, getServices } from "@/utils/data_services/data_ai";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import { CircleCheckBig } from "lucide-react";

interface ServiceDeliverablesOutcomesProps {
    service: ServicesItem;
}

const ServiceDeliverablesOutcomes: React.FC<ServiceDeliverablesOutcomesProps> = ({ service }) => {
    const t = useTranslations("services");
    const services = React.useMemo(() => getServices(t), [t]);

    const foundService = React.useMemo(
        () => services.find((p) => p.id === service.id),
        [services, service.id]
    );
    const localeActive = useLocale();

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
    if (foundService.deliverablesaddress && foundService.deliverables) {     
        return (
            <section className="text-white py-20 bg-accent/1">
                <div className="container mx-auto px-4">
                    <div className=" mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8  text-foreground">
                            {foundService.deliverablesaddress}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {foundService.deliverables.map((challenge, index) => (
                            <Card
                                key={index}
                                className="relative p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-2 border-border 
                         rounded-2xl hover:border-primary/50 transition-all duration-300 
                         group hover:scale-[1.03] animate-slide-up"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="flex items-center">
                                    <Button
                                        className={`${localeActive === 'ar' ? 'right-4' : 'left-4'
                                            } w-10 h-10 rounded-full bg-primary text-sm font-bold shadow-md text-primary-foreground`}
                                    >
                                        <CircleCheckBig />
                                    </Button>
    
                                    <div className={`px-2 ${localeActive === 'ar' ? 'text-right' : 'text-left'}`}>
                                        <p className="text-xl sm:text-base text-muted-foreground leading-relaxed">
                                            {challenge.text}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
    
        );
    }
};
export default ServiceDeliverablesOutcomes;