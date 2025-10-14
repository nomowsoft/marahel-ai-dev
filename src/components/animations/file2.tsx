"use client";
import { useState, useEffect } from "react";
import { FileText, Search, Sparkles, ChevronRight } from "lucide-react";

export const KnowledgeHubDemo = () => {
  const [searchProgress, setSearchProgress] = useState(0);
  const [activeDoc, setActiveDoc] = useState(0);

  const documents = [
    { title: "دليل السياسات", type: "PDF", pages: 24 },
    { title: "التقرير السنوي", type: "PDF", pages: 156 },
    { title: "الإجراءات التشغيلية", type: "DOC", pages: 89 },
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setSearchProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 50);

    const docInterval = setInterval(() => {
      setActiveDoc((prev) => (prev + 1) % documents.length);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(docInterval);
    };
  }, [documents.length]);

  return (
    <div className="relative w-full h-full bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 overflow-hidden">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="flex items-center gap-3 bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl p-4">
          <Search className="w-5 h-5 text-primary" />
          <input
            type="text"
            value="ما هي سياسة الإجازات؟"
            className="flex-1 bg-transparent text-foreground outline-none"
            disabled
          />
          <Sparkles className="w-5 h-5 text-accent animate-pulse" />
        </div>
        {searchProgress > 0 && searchProgress < 100 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300"
              style={{ width: `${searchProgress}%` }}
            ></div>
          </div>
        )}
      </div>

      {/* Documents Grid */}
      <div className="space-y-3 mb-6">
        {documents.map((doc, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-500 ${idx === activeDoc
                ? "bg-primary/10 border-primary/50 scale-105"
                : "bg-card/30 border-border/30 opacity-60"
              }`}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-foreground mb-1">{doc.title}</h4>
              <p className="text-xs text-muted-foreground">
                {doc.type} • {doc.pages} صفحة
              </p>
            </div>
            {idx === activeDoc && (
              <div className="animate-fade-in">
                <div className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold">
                  معالجة
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* AI Summary */}
      {searchProgress === 100 && (
        <div className="animate-fade-in bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 border border-primary/30">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h5 className="font-bold text-foreground mb-2">ملخص ذكي</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                وفقاً لسياسة الشركة، يحق للموظف 30 يوم إجازة سنوية مدفوعة الأجر...
              </p>
              <button className="flex items-center gap-2 mt-3 text-primary text-sm font-medium hover:gap-3 transition-all">
                عرض التفاصيل الكاملة
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Particles */}
      <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-primary/40 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 rounded-full bg-secondary/40 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-20 w-2 h-2 rounded-full bg-accent/40 animate-float" style={{ animationDelay: "2s" }}></div>
    </div>
  );
};
