import React from "react";
import { ProductsItem, getProducts } from "@/utils/data_products/data_ai";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";

interface ProductPerformanceProps {
    product: ProductsItem;
}

const ProductPerformance: React.FC<ProductPerformanceProps> = ({ product }) => {
    const t = useTranslations("products");
    const products = React.useMemo(() => getProducts(t), [t]);

    const foundProduct = React.useMemo(
        () => products.find((p) => p.id === product.id),
        [products, product.id]
    );
    const localeActive = useLocale();

    if (!foundProduct) {
        return (
            <section className="text-white mt-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-2xl font-semibold text-red-400">
                        Product not found
                    </h1>
                </div>
            </section>
        );
    }

    return (
        <section className="text-white py-20 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className=" mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8  text-foreground">
                        {t('performance')}
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 justify-items-center">
                    {foundProduct.performance.map((step, index) => {
                        const Icon = step.icon;
                        return(
                            <Card
                                key={index}
                                className="p-8 bg-card/50 backdrop-blur-sm border-2 w-70  text-center border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div
                                    className="rounded-2xl flex items-center justify-center transition-all duration-300"
                                >
                                    <Icon className="text-primary" />
                                </div>

                                <h3 className="text-xl font-bold text-foreground">
                                    {step.text}
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {step.description}
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
export default ProductPerformance;