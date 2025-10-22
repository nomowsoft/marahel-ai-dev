import React from "react";
import { ServicesItem, getServices } from "@/utils/data_services/data_ai";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface ServiceMethodProps {
    service: ServicesItem;
}

const ServiceMethod: React.FC<ServiceMethodProps> = ({ service }) => {
    const t = useTranslations("services");
    const services = React.useMemo(() => getServices(t), [t]);

    const foundService= React.useMemo(
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
    if (foundService.methoddescription && foundService.method ) {
        return (
            <section className="text-white mb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* العنوان */}
                    <div className="mt-20 md:mt-32 mb-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                            {foundService.methoddescription}
                        </h2>
                    </div>
    
                    {/* الشبكة */}
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
                        {foundService.method.map((challenge, index) => (
                            <Card
                                key={index}
                                className="relative py-4 px-4 bg-card/50 backdrop-blur-sm border-2 border-border 
                         rounded-2xl hover:border-primary/50 transition-all duration-300 
                         group hover:scale-[1.03] animate-slide-up"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >   
                                <h3 className="text-lg sm:text-xl font-semibold mb-1 text-primary/60 text-center">
                                    {challenge.title}
                                </h3>
                                <div className="text-center">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {challenge.text}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
    
    
        );
    }
};
export default ServiceMethod;