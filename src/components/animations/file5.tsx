"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { getMetric } from "@/utils/data";
import { Metric } from "@/utils/types";

type ExtendedMetric = Metric & { finishedAt?: number };

export const MetricsDemo = () => {
  const t = useTranslations("Metric");
  const prev = getMetric(t);

  const [metrics, setMetrics] = useState<ExtendedMetric[]>(
    () => prev.map((m) => ({ ...m }))
  );

  useEffect(() => {
  const tickMs = 50;

  const interval = setInterval(() => {
    setMetrics((prev) => {
      let anyChange = false;

      const updated = prev.map((metric) => {
        if (metric.value >= metric.max) {
          return metric; // توقف نهائي
        }

        const step = metric.max / 50;
        const next = Math.min(metric.value + step, metric.max);
        if (next >= metric.max) {
          anyChange = true;
          return { ...metric, value: metric.max };
        }

        anyChange = true;
        return { ...metric, value: next };
      });

      return anyChange ? updated : prev; // إذا لم يكن هناك تغيير، لا تعيد تعيين الحالة
    });
  }, tickMs);

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
                    {metric.value.toLocaleString("en-US", {
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