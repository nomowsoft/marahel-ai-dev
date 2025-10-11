import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Download, Phone, MessageCircle, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export const CTA: React.FC = () => {
  const t = useTranslations('Cta')
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-secondary/10 to-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-screen-xl mx-auto space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            {t('title')}
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t('p')}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group text-lg px-8 py-6"
            >
              <Calendar className="ml-2 h-5 w-5" />
              {t('button1')}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 text-muted-foreground border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
            >
              <Download className="ml-2 h-5 w-5" />
              {t('button2')}
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            {/* Phone */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-border rounded-2xl hover:border-primary/50 transition-all group">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">+966 53 455 1191</div>
              </div>
            </Card>

            {/* WhatsApp */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-border rounded-2xl hover:border-primary/50 transition-all group">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-sm text-muted-foreground">WhatsApp Business</div>
              </div>
            </Card>

            {/* Email */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-border rounded-2xl hover:border-primary/50 transition-all group">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="text-sm text-muted-foreground">info@marahel.com.sa</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
