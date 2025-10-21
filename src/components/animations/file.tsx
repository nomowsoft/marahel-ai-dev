"use client";
import { useState, useEffect } from "react";
import { MapPin, Navigation, Star, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { getEvents, getPathSteps } from "@/utils/data";

export const EventNavigationDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(0);
  
  const t = useTranslations('Events')
  const t1 = useTranslations('PathStep')
  const events = getEvents(t)
  const pathSteps = getPathSteps(t1)

  useEffect(() => {
    const eventInterval = setInterval(() => {
      setSelectedEvent((prev) => (prev + 1) % events.length);
    }, 4000);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % pathSteps.length);
    }, 1000);

    return () => {
      clearInterval(eventInterval);
      clearInterval(stepInterval);
    };
  }, [events.length, pathSteps.length]);

  return (
    <div className="w-full h-full bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 ">
      {/* Header */}
      <div className=" p-6 bg-gradient-to-b from-background/90 to-transparent backdrop-blur-sm ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Navigation className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">{t('title')}</h4>
              <p className="text-xs text-muted-foreground">{t('p')}</p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold">
            {t('active')}
          </div>
        </div>
      </div>

      {/* Map View */}
      <div className="inset-0 p-6 pt-24">
        {/* Simplified Floor Plan */}
        <div className="w-full h-3/5 bg-background/40 rounded-xl border border-border/50 ">
          {/* Path */}
          <svg className="inset-0 w-full h-full">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
            <path
              d={`M ${pathSteps.map((step, idx) => `${idx === 0 ? 'M' : 'L'} ${step.x} ${step.y}`).join(' ')}`}
              stroke="url(#pathGradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10,5"
              className="animate-pulse"
            />
          </svg>

          {/* Path Steps */}
          {pathSteps.map((step, idx) => (
            <div
              key={idx}
              className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
              style={{ left: step.x, top: step.y }}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  idx <= currentStep
                    ? "bg-primary text-primary-foreground scale-110"
                    : "bg-border text-muted-foreground"
                } transition-all duration-500`}
              >
                {idx === currentStep ? (
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                ) : (
                  <span className="text-xs font-bold">{idx + 1}</span>
                )}
              </div>
              <p className="text-xs text-center mt-2 text-foreground font-medium whitespace-nowrap">
                {step.label}
              </p>
            </div>
          ))}

          {/* Destination Marker */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 animate-bounce"
            style={{ left: pathSteps[pathSteps.length - 1].x, top: pathSteps[pathSteps.length - 1].y }}
          >
            <Star className="w-6 h-6 text-accent fill-accent" />
          </div>
        </div>

        {/* Event Schedule */}
        <div className="mt-4 space-y-2">
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 p-3 rounded-xl border transition-all duration-500 ${
                idx === selectedEvent
                  ? "bg-primary/10 border-primary/50 scale-105"
                  : "bg-card/30 border-border/30 opacity-60"
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
                <Clock className="w-4 h-4 text-primary mb-1" />
                <span className="text-[10px] text-primary font-bold">{event.time}</span>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-foreground text-sm mb-1">{event.title}</h5>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{event.location}</span>
                  <span className="px-2 py-0.5 rounded bg-accent/20 text-accent font-bold">
                    {event.room}
                  </span>
                </div>
              </div>
              {idx === selectedEvent && (
                <Navigation className="w-5 h-5 text-primary animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
    </div>
  );
};
