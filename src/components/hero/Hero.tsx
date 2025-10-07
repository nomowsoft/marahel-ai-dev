import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen md:min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Floating Orbs */}
      <div className="absolute top-10 right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in px-2 sm:px-6 md:px-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-foreground block">Advanced AI Solutions</span>
            <span className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2">
              for Government and Private Sectors
            </span>
            <span className="bg-gradient-to-l from-primary via-secondary to-accent bg-clip-text text-transparent block mt-3 text-xl sm:text-2xl md:text-3xl">
              Fully Hosted in Saudi Arabia
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Secure, compliant, and powerful AI solutions built for Saudi enterprises. <br className="hidden sm:block" />
            Keep your data sovereign while unlocking the full potential of artificial intelligence.
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <div className="w-10 h-7 bg-[#1a5d3a] rounded flex items-center justify-center text-white text-xs font-bold">KSA</div>
              </div>
              <span className="text-sm sm:text-base text-foreground font-medium text-center">Hosted in KSA</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
              </div>
              <span className="text-sm sm:text-base text-foreground font-medium text-center">Agentic Innovation</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
              </div>
              <span className="text-sm sm:text-base text-foreground font-medium text-center">Zero Latency</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <span className="text-sm sm:text-base text-foreground font-medium text-center">Flexible Delivery</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              Explore Our AI Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-muted-foreground border-2 border-primary/50 hover:bg-primary/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group"
            >
              <Play className="ml-2 h-5 w-5" />
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
