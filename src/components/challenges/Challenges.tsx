import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Zap, Shield, Download } from "lucide-react";

const challenges = [
  {
    icon: Database,
    title: "Complete Data Control",
    marahel: "Your data, your domain. Complete ownership and control over your information.",
    global: "Data stored in foreign jurisdictions with limited control.",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Ultra-Low Latency",
    marahel: "Near-zero latency with local processing in KSA data centres.",
    global: "Higher latency due to distance to global regions.",
    color: "secondary"
  },
  {
    icon: Shield,
    title: "Built-in Compliance",
    marahel: "Pre-built for PDPL and NCA ECC compliance from day one.",
    global: "DIY compliance with complex regulatory requirements.",
    color: "accent"
  }
];

export const Challenges = () => {
  return (
    <section id="challenges" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Choose Local AI Hosting?
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the advantages of keeping your AI infrastructure within Saudi Arabia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-${challenge.color}/10 flex items-center justify-center mb-6 group-hover:glow-${challenge.color} transition-all duration-300`}>
                  <Icon className={`w-8 h-8 text-${challenge.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {challenge.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">Marahel</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {challenge.marahel}
                    </p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground/60 mb-2">Global Cloud</div>
                    <p className="text-muted-foreground/60 text-sm leading-relaxed">
                      {challenge.global}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
            <Download className="ml-2 h-5 w-5" />
            Download Comparison Report
          </Button>
        </div>
      </div>
    </section>
  );
};
