'use client';
import { useState, useEffect, useMemo } from "react";
import { Send, Bot, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { getDemomessage } from "@/utils/data";
import { Message } from "@/utils/types";

export const ChatbotDemo = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = useTranslations('Message');

  // تثبيت مصفوفة الرسائل التجريبية
  const demomessage = useMemo(() => getDemomessage(t), [t]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < demomessage.length) {
        setMessages((prev) => [...prev, demomessage[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setMessages([]);
          setCurrentIndex(0);
        }, 3000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, demomessage]);

  return (
    <div className="relative w-full h-full bg-card/50 backdrop-blur-sm rounded-2xl p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Bot className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="font-bold text-foreground">{t('murshed')}</h4>
          <p className="text-xs text-muted-foreground">{t('now')}</p>
        </div>
        <div className="mr-auto">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-4 min-h-[300px]">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-3 items-start animate-fade-in ${
              msg.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === "user"
                  ? "bg-secondary/10"
                  : "bg-primary/10"
              }`}
            >
              {msg.role === "user" ? (
                <User className="w-4 h-4 text-secondary" />
              ) : (
                <Bot className="w-4 h-4 text-primary" />
              )}
            </div>
            <div
              className={`max-w-[70%] p-3 rounded-2xl ${
                msg.role === "user"
                  ? "bg-secondary/20 text-foreground"
                  : "bg-primary/10 text-foreground"
              }`}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-3">
          <input
            type="text"
            placeholder={t('placeholder')}
            className="flex-1 bg-transparent text-sm text-foreground outline-none"
            disabled
          />
          <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
            <Send className="w-4 h-4 text-primary" />
          </button>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};
