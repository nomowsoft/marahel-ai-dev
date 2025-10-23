"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { getSolutionsPage } from "@/utils/data";

const Solutions = () => {
  const t = useTranslations("Solutions");
  const SolutionsPage = getSolutionsPage(t);
  return (
    <section className="my-32 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="mb-12 text-center">
        <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl font-bold">
          Industry Solutions
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl mt-4 max-w-3xl mx-auto">
         AI-powered solutions tailored for Saudi Arabia&apos;s key industries
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {SolutionsPage.map((item, index) => (
          <Card key={item.id}
            className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl 
                      hover:border-primary/50 transition-all duration-300 hover:scale-[1.03] group animate-slide-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">
              {item.titel}
            </h3>

            <div className="space-y-2">
              {item.items.map((rec) => (
                <div
                  key={rec.id}
                  className="flex items-center space-x-3"
                >
                  <Button
                    size="sm"
                    className="rounded-full text-foreground bg-primary/20 border border-primary w-8 h-8 flex items-center justify-center text-sm"
                  >
                    {rec.id}
                  </Button>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {rec.name}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
