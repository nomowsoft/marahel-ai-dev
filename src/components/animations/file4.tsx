"use client";
import { useState, useEffect } from "react";
import { Database, Cloud, Lock, Zap } from "lucide-react";

export const SystemArchitecture = () => {
  const [activeConnection, setActiveConnection] = useState(0);

  const nodes = [
    { icon: Database, label: "قاعدة البيانات", color: "primary", position: "top-1/4 left-1/4" },
    { icon: Cloud, label: "الخدمات السحابية", color: "secondary", position: "top-1/4 right-1/4" },
    { icon: Lock, label: "الأمان", color: "accent", position: "bottom-1/4 left-1/4" },
    { icon: Zap, label: "المعالجة", color: "primary", position: "bottom-1/4 right-1/4" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection((prev) => (prev + 1) % 6);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 3 },
    { from: 3, to: 2 },
    { from: 2, to: 0 },
    { from: 0, to: 3 },
    { from: 1, to: 2 },
  ];

  return (
    <div className="relative w-full h-full bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 overflow-hidden">
      {/* Center Hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center glow-primary">
        <div className="w-20 h-20 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center">
          <Zap className="w-10 h-10 text-primary" />
        </div>
      </div>

      {/* Nodes */}
      {nodes.map((node, idx) => {
        const Icon = node.icon;
        const isActive = connections[activeConnection]?.from === idx || connections[activeConnection]?.to === idx;

        return (
          <div
            key={idx}
            className={`absolute ${node.position} -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              isActive ? "scale-110" : ""
            }`}
          >
            <div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${node.color}/20 to-${node.color}/5 border-2 ${
                isActive ? `border-${node.color}` : "border-border"
              } flex items-center justify-center transition-all duration-500 relative`}
            >
              <Icon className={`w-8 h-8 text-${node.color}`} />
              
              {/* Pulse effect when active */}
              {isActive && (
                <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping"></div>
              )}
            </div>
            <p className="text-xs text-center mt-2 text-muted-foreground font-medium">
              {node.label}
            </p>
          </div>
        );
      })}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {connections.map((conn, idx) => {
          const isActive = idx === activeConnection;
          return (
            <line
              key={idx}
              x1="50%"
              y1="50%"
              x2="50%"
              y2="50%"
              stroke={isActive ? "url(#lineGradient)" : "hsl(var(--border))"}
              strokeWidth={isActive ? "3" : "1"}
              strokeDasharray={isActive ? "0" : "5,5"}
              className="transition-all duration-500"
              opacity={isActive ? "1" : "0.3"}
            />
          );
        })}
      </svg>

      {/* Data Flow Indicators */}
      {activeConnection !== undefined && (
        <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-xs text-primary font-bold">نقل البيانات نشط</span>
        </div>
      )}

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>
  );
};
