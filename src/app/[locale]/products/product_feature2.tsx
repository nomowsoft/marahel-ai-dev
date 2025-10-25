import React from "react";
import { ProductsItem, getProducts } from "@/utils/data_products/data_ai";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import { CircleCheckBig } from "lucide-react";

interface ProductFeatureProps {
    product: ProductsItem;
}

const ProductFeature2: React.FC<ProductFeatureProps> = ({ product }) => {
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
        <section className="text-white mb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* العنوان */}
                <div className="mt-20 md:mt-32 mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                        {t('features')}
                    </h2>
                </div>

                {/* الشبكة */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {foundProduct.features2.map((challenge, index) => (
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
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
};
export default ProductFeature2;