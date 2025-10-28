import React from "react";
import { ProductsItem, getProducts } from "@/utils/data_products/data_ai";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

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
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    {foundProduct.performance.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <Card
                                key={index}
                                className="p-8 bg-card/50 backdrop-blur-sm border-2 text-center border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up flex-1 min-w-1/1 lg:min-w-1/5"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="rounded-2xl flex items-center justify-center transition-all duration-300 mb-4">
                                    <Icon className="text-primary w-10 h-10" />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    {step.text}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>

    );
};
export default ProductPerformance;