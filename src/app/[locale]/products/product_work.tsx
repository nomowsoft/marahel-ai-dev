import React from "react";
import { ProductsItem, getProducts } from "@/utils/data_products/data_ai";
import { Card } from "@/components/ui/card";
import { useLocale, useTranslations } from "next-intl";

interface ProductWorkProps {
    product: ProductsItem;
}

const ProductWork: React.FC<ProductWorkProps> = ({ product }) => {
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
        <section className="text-white py-20 bg-accent/1">
            <div className="container mx-auto px-4">
                <div className=" mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8  text-foreground">
                        {t('work')}
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12 justify-items-center">
                    {foundProduct.work.map((step) => {

                        const Icon = step.icon;
                        return(
                            <React.Fragment key={step.id}>
                                {/* الكارد */}
                                <Card
                                    className="w-64 h-40 p-8 bg-card/50 backdrop-blur-sm border-2 text-center border-border rounded-2xl 
                                            hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up"
                                    style={{ animationDelay: `${step.id * 0.2}s` }}
                                >
                                    <div className="rounded-2xl flex items-center justify-center transition-all duration-300">
                                    <Icon className="text-primary" />
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground">{step.text}</h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                </Card>

                                {/* السهم المتحرك */}
                                {step.id !== foundProduct.work.length && (
                                    <div
                                    className={`md:flex items-center justify-center text-3xl mx-1 pointer-events-none select-none
                                                animate-arrow-move`}
                                    style={{ animationDelay: `${step.id * 0.6}s` }}
                                    >
                                    <span className="md:block hidden">
                                        {localeActive === 'ar' ? '←' : '➔'}
                                    </span>
                                    <span className="block md:hidden">
                                        ↓
                                    </span>
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>

    );
};
export default ProductWork;