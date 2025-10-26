import React from "react";
import { ProductsItem, getProducts } from "@/utils/data_products/data_ai";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface ProductWorldProps {
    product: ProductsItem;
}

const ProductWorld: React.FC<ProductWorldProps> = ({ product }) => {
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
    if (foundProduct.world.length != 0) {
        return (
            <section className="text-white py-20 bg-accent/1">
                <div className="container mx-auto px-4">
                    <div className=" mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8  text-foreground">
                            {t('morshed.world.title')}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {foundProduct.world.map((step, index) => {
    
                            return(
                                <Card key={index}
                                    className="py-4 px-8 bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl 
                                            hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <h3 className="text-xl font-bold text-primary/70">{step.title}</h3>
    
                                    {step.items.map((item) => {
                                        return(
                                            <div key={item.id} className="bg-primary/20 p-4 border border-primary/50 rounded-2xl my-3">
                                                <h1 className="text-accent">
                                                    {item.title}
                                                </h1>
                                                <p>
                                                    {item.description}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </Card>
    
                            );
                        })}
                    </div>
                </div>
            </section>
    
        );
    }
};
export default ProductWorld;