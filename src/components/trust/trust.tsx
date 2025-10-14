import { FC } from "react";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { getCertifications, getStats } from "@/utils/data";
import { MetricsDemo } from "../animations/file5";

export const Trust: FC = () => {
  const t = useTranslations('Trust');
  const certifications = getCertifications(t);
  const stats = getStats(t);
  return (
    <section id="trust" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-screen-xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('p')}
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-${cert.color}/10 flex items-center justify-center mx-auto mb-4 group-hover:glow-${cert.color} transition-all duration-300`}
                >
                  {typeof Icon === "function" && Icon.prototype && Icon.prototype.render ? (
                    <Icon className={`w-8 h-8 text-${cert.color}`} />
                  ) : (
                    <Icon />
                  )}
                </div>

                <h3 className="text-lg font-bold mb-2 text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <div
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-l from-${stat.color} to-secondary bg-clip-text text-transparent`}
              >
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="w-full h-[400px] animate-fade-in mt-10" style={{ animationDelay: "0.4s" }}>
          <MetricsDemo />
        </div>
      </div>
    </section>
  );
};
