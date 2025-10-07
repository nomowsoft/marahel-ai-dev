import { Card } from "@/components/ui/card";
import { Shield, Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "PDPL Compliant",
    description: "Full compliance with Saudi data protection laws",
    color: "primary"
  },
  {
    icon: Award,
    title: "NCA ECC Adherence",
    description: "Meets essential cybersecurity controls",
    color: "secondary"
  },
  {
    icon: CheckCircle,
    title: "SDAIA Aligned",
    description: "Follows AI ethics principles",
    color: "accent"
  },
  {
    icon: () => (
      <div className="w-10 h-7 bg-[#1a5d3a] rounded flex items-center justify-center text-white text-xs font-bold">KSA</div>
    ),
    title: "Hosted in KSA",
    description: "Complete data sovereignty",
    color: "primary"
  }
];

const stats = [
  {
    value: "99.9%",
    label: "Uptime Guarantee",
    color: "primary"
  },
  {
    value: "Zero",
    label: "Data Breaches",
    color: "secondary"
  },
  {
    value: "<10ms",
    label: "Latency",
    color: "accent"
  },
  {
    value: "24/7",
    label: "Arabic Support",
    color: "primary"
  }
];

export const Trust = () => {
  return (
    <section id="trust" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Trusted by Leading Saudi Organisations
          </h2>
          <p className="text-xl text-muted-foreground">
            Join the growing number of enterprises that trust Marahel for their AI transformation
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-${cert.color}/10 flex items-center justify-center mx-auto mb-4 group-hover:glow-${cert.color} transition-all duration-300`}>
                  <Icon className={`w-8 h-8 text-${cert.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
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
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-l from-${stat.color} to-secondary bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
