import { FC } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { getProducts } from "@/utils/data";

export const Products: FC = () => {
  const t = useTranslations('Products');
  const values = getProducts(t);
  return (
    <section id="products" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-screen-xl mx-auto mb-16 space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('p')}
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card/80 backdrop-blur-sm border-2 border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-${product.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-7 h-7 text-${product.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-foreground h-15">{product.title}</h3>
                    <p className="text-muted-foreground h-10">{product.description}</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <Check className={`w-4 h-4 text-${product.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary/10 group-hover:border-primary/60 mt-auto"
                >
                  {t('button')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
