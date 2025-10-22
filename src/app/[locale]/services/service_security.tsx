import React from "react";
import { ServicesItem, getServices } from "@/utils/data_services/data_ai";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface ServiceSecurityProps {
    service: ServicesItem;
}

const ServiceSecurity: React.FC<ServiceSecurityProps> = ({ service }) => {
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
        <section className="text-white py-20">
            <div className="container mx-auto px-4">
                <div className=" mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8  text-foreground">
                        {t('security')}
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-12 gap-8">
                    {foundService.security.map((step, index) => (
                        <Card
                            key={index}
                            className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <h3 className="text-xl font-bold text-foreground">
                                {step.title}
                            </h3>
                            {step.SecurityItem.map((step, index) => (
                                <div key={index} className="my-2">
                                    <Button
                                        className="w-5 h-8 rounded-full bg-primary/30 text-sm font-bold shadow-md text-primary mx-2"
                                    >
                                        {step.id}
                                    </Button>
                                    <span className="text-muted-foreground text-sm leading-relaxed">
                                        {step.text}
                                    </span>
                                </div>
                            ))}
                        </Card>
                    ))}
                </div>
                <div className="text-center">
                    <h1 className="text-primary text-3xl">
                        {foundService.footertitle}
                    </h1>
                    <p className="text-white mt-4">
                        {foundService.footertext}
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-start sm:justify-center items-center pt-10 w-full">
                    {/* Primary Button */}
                    <Button
                        size="lg"
                        className="w-full sm:w-auto bg-primary hover:bg-primary/90 rounded-xl text-primary-foreground glow-primary group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 text-center"
                    >
                        {foundService.button3}
                    </Button>

                    {/* Outline Button */}
                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto text-muted-foreground border-2 rounded-xl border-primary/50 hover:bg-primary/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group text-center"
                    >
                        {foundService.button4}
                    </Button>
                </div>
            </div>
        </section>

    );
};
export default ServiceSecurity;