import React from "react";
import { ProductsItem, getProducts } from "@/utils/data_products/data_ai";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface ProductPackagesProps {
    product: ProductsItem;
}

const ProductPackages: React.FC<ProductPackagesProps> = ({ product }) => {
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
    if (foundProduct.packages.length != 0) {
        return (
            <section className="text-white py-10 bg-accent/1">
                <div className="container mx-auto px-4">
                    <div className=" mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8  text-foreground">
                            {t('morshed.Packages.title')}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        {foundProduct.packages.map((step, index) => {
    
                            return(
                                <Card key={index}
                                    className="py-4 px-8 bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl 
                                            hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <h3 className="text-xl font-bold text-primary/70">{step.title}</h3>
    
                                    {step.items.map((item, index) => {
                                        return(
                                            <div key={index} className="my-2 flex items-center">
                                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                </div>
                                                <span className="text-muted-foreground text-sm leading-relaxed px-2">
                                                    {item.title}
                                                </span>
                                            </div>
                                        );
                                    })}
                                     <Button
                                        size="lg"
                                        className="w-full  bg-primary mt-5 rounded-xl text-primary-foreground glow-primary group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 text-center hover:bg-accent/50 hover:text-white"
                                    >
                                        
                                        {t('morshed.Packages.button')}
                                    </Button>
                                </Card>
    
                            );
                        })}
                    </div>
                </div>
            </section>
    
        );
    }
};
export default ProductPackages;