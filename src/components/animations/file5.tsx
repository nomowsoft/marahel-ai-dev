"use client";
import { useState, useEffect } from "react";
import { TrendingUp, Users, Clock, Zap, type LucideIcon } from "lucide-react";

interface Metric {
  icon: LucideIcon;
  label: string;
  value: number;
  max: number;
  suffix: string;
  color: string;
}

export const MetricsDemo = () => {
  const [metrics, setMetrics] = useState<Metric[]>([
    { icon: Users, label: "المستخدمون النشطون", value: 0, max: 2847, suffix: "", color: "primary" },
    { icon: TrendingUp, label: "معدل الرضا", value: 0, max: 98, suffix: "%", color: "secondary" },
    { icon: Clock, label: "متوسط وقت الاستجابة", value: 0, max: 2.3, suffix: "ث", color: "accent" },
    { icon: Zap, label: "المعاملات المكتملة", value: 0, max: 15420, suffix: "", color: "primary" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value:
            metric.value < metric.max
              ? Math.min(metric.value + metric.max / 50, metric.max)
              : 0, // Reset when reaches max
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 overflow-hidden">
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          const progress = (metric.value / metric.max) * 100;

          return (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-card/80 to-background/40 rounded-xl p-5 border border-border/30 overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              {/* Background Progress */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-${metric.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 text-${metric.color}`} />
                  </div>
                  <div className={`text-xs font-bold px-2 py-1 rounded-full bg-${metric.color}/10 text-${metric.color}`}>
                    مباشر
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {metric.value.toLocaleString("ar-SA", {
                      maximumFractionDigits: 1,
                    })}
                    <span className="text-sm text-muted-foreground mr-1">
                      {metric.suffix}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-border/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-${metric.color} to-${metric.color}/50 transition-all duration-500 rounded-full`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Glow on hover */}
              <div className={`absolute -bottom-10 -right-10 w-20 h-20 bg-${metric.color}/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </div>
          );
        })}
      </div>

      {/* Floating Orb */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};
