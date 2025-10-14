import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import React from "react";
import { gethero } from "@/utils/data";
import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
  const t = useTranslations('Hero');
  const values = gethero(t);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 mt-20 md:mt-0 lg:mt-5">
      {/* 🔹 Background Layers */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* 🔹 Floating Orbs */}
      <div className="absolute top-10 right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-10 left-10 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* 🔹 Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in px-2 sm:px-6 md:px-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">
            <span className="text-foreground block my-8">{t('title1')}</span>
            <span className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2 mb-10">
              {t('title2')}
            </span>
            <span className="bg-gradient-to-l from-primary via-secondary to-accent bg-clip-text text-transparent block mt-3 text-xl sm:text-2xl md:text-3xl">
              {t('sub_title')}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('p1')}
            <br className="hidden sm:block" />
            {t('p2')}
          </p>

          {/* 🔹 Feature Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 max-w-4xl mx-auto">
            {values.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center ${item.bg}`}
                >
                  {item.icon}
                </div>
                <span className="text-sm sm:text-base text-foreground font-medium text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* 🔹 Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 rounded-xl text-primary-foreground glow-primary group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              {t('button1')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-muted-foreground border-2 rounded-xl border-primary/50 hover:bg-primary/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group"
            >
              <Play className="ml-2 h-5 w-5" />
              {t('button2')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
