"use client";
import React, { useEffect, useRef, useState } from "react";
import { Brain, FileText, Loader2 } from "lucide-react";

type Msg = { id: number; role: "bot" | "question" | "answer"; text: string };

export const KnowledgeHubDemo = () => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [isRunning, setIsRunning] = useState(true);
  const [typing, setTyping] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const demoFiles = [
    "تقرير_المبيعات_Q3.pdf",
    "تحليل_العملاء.xlsx",
    "ملف_العمليات.docx",
  ];

  const qaPairs = [
    {
      q: "ما هي أبرز النتائج المستخلصة من الملفات؟",
      a: "أبرز النتائج: ارتفاع المبيعات في الربع الثالث بنسبة 14٪، وتحسن في تقييم رضا العملاء بمقدار 0.4 نقطة.",
    },
    {
      q: "هل هناك تكرار في السجلات؟",
      a: "نعم، تم اكتشاف تكرار طفيف في 8% من السجلات وتم اقتراح إزالة التكرارات أو تنظيفها.",
    },
    {
      q: "ما هي المناطق الأعلى مبيعًا؟",
      a: "المنطقة الشرقية والأجزاء الحضرية في الرياض سجلت أعلى معدلات مبيعات خلال الفترة.",
    },
    {
      q: "هل هناك توجه واضح بخصوص المنتج؟",
      a: "نعم، المنتجات الرقمية والخدمات المرتبطة بالدعم الفني أظهرت نموًا أكبر من المنتجات المادية.",
    },
  ];

  const pushMsg = (m: Msg) => {
    setMessages((prev) => [...prev, m]);
  };

  const typeOut = async (targetId: number, text: string, speed = 25) => {
    setTyping(true);
    let displayed = "";
    for (const ch of text) {
      displayed += ch;
      setMessages((prev) =>
        prev.map((m) => (m.id === targetId ? { ...m, text: displayed } : m))
      );
      await new Promise((r) => setTimeout(r, speed));
      scrollToBottom();
    }
    setTyping(false);
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const fakeUpload = async (filename: string) => {
    pushMsg({ id: Date.now() + Math.random(), role: "bot", text: `جاري رفع الملف: ${filename}` });
    setProgress(2);
    for (let p = 5; p <= 95; p += Math.floor(3 + Math.random() * 8)) {
      setProgress(p);
      await new Promise((r) => setTimeout(r, 120 + Math.random() * 200));
      scrollToBottom();
    }
    setProgress(100);
    await new Promise((r) => setTimeout(r, 400));
    pushMsg({ id: Date.now() + Math.random(), role: "bot", text: `تم رفع الملف: ${filename}` });
    setProgress(null);
  };

  const fakeAnalyze = async () => {
    pushMsg({ id: Date.now() + Math.random(), role: "bot", text: "" });
    const lastId = Date.now() + Math.random();

    setMessages((prev) => [...prev.slice(0, -1), { id: lastId, role: "bot", text: "" }]);
    await typeOut(lastId, "جارِ تحليل الملفات وتجهيز الملخص...");

    await new Promise((r) => setTimeout(r, 900 + Math.random() * 800));
    pushMsg({ id: Date.now() + Math.random(), role: "bot", text: "التحليل اكتمل. إليك ملخصًا مختصرًا." });
  };

  useEffect(() => {
    let cancelled = false;

    const runDemo = async () => {
      while (!cancelled && isRunning) {
        setMessages([]);
        pushMsg({ id: Date.now() + Math.random(), role: "bot", text: "📂 البوت يقوم الآن بإضافة الملفات تلقائيًا..." });
        await new Promise((r) => setTimeout(r, 700));
        for (const f of demoFiles) {
          if (cancelled) break;
          pushMsg({ id: Date.now() + Math.random(), role: "bot", text: `تم العثور على الملف: ${f}` });
          await fakeUpload(f);
        }
        if (cancelled) break;

        pushMsg({ id: Date.now() + Math.random(), role: "bot", text: "" });
        await fakeAnalyze();

        for (const pair of qaPairs) {
          if (cancelled) break;
          pushMsg({ id: Date.now() + Math.random(), role: "question", text: "" });
          const qId = Date.now() + Math.random();
          setMessages((prev) => [...prev.slice(0, -1), { id: qId, role: "question", text: "" }]);
          await typeOut(qId, pair.q, 30);
          await new Promise((r) => setTimeout(r, 900));

          pushMsg({ id: Date.now() + Math.random(), role: "answer", text: "" });
          const aId = Date.now() + Math.random();
          setMessages((prev) => [...prev.slice(0, -1), { id: aId, role: "answer", text: "" }]);
          await typeOut(aId, pair.a, 22);
          await new Promise((r) => setTimeout(r, 1100));
        }

        if (cancelled) break;

        pushMsg({ id: Date.now() + Math.random(), role: "bot", text: " إعادة تشغيل العرض التجريبي بعد ثوانٍ..." });
        await new Promise((r) => setTimeout(r, 3000));
      }
    };

    runDemo();

    return () => {
      cancelled = true;
    };
  }, [isRunning]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-background/80 to-card/80 backdrop-blur-xl border border-border/30 rounded-2xl shadow-xl">
      {/* رأس البوت */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/30 to-accent/30">
          <Brain className="w-6 h-6 text-primary" />
        </div>
        <div>
          <div className="font-bold text-foreground">Knowledge Hub (Demo)</div>
          <div className="text-xs text-muted-foreground">البوت يرفع الملفات ويحللها ويعرض أسئلة وإجابات تلقائية</div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setIsRunning((s) => !s)}
            className="text-xs px-2 py-1 rounded-md border border-border/30 bg-card/20"
          >
            {isRunning ? "إيقاف العرض" : "تشغيل العرض"}
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="h-80 overflow-y-auto p-4 rounded-xl bg-background/40 border border-border/20 space-y-3"
      >
        {messages.map((m) => {
          if (m.role === "question") {
            return (
              <div key={m.id} className="flex justify-start">
                <div className="flex-shrink-0 mr-2 mt-1">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
                <div className="bg-card/60 text-foreground px-3 py-2 rounded-lg max-w-[80%] shadow-sm">
                  {m.text || <span className="text-muted-foreground">...</span>}
                </div>
              </div>
            );
          }
          if (m.role === "answer") {
            return (
              <div key={m.id} className="flex justify-end">
                <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg max-w-[80%] shadow-sm">
                  {m.text || <span className="text-primary/30">...</span>}
                </div>
              </div>
            );
          }
          return (
            <div key={m.id} className="flex justify-start">
              <div className="bg-card/50 text-foreground px-3 py-2 rounded-lg max-w-[80%] shadow-sm flex items-center gap-3">
                <div>{m.text || <span className="text-muted-foreground">...</span>}</div>
                {typing && (
                  <div className="ml-2">
                    <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {progress !== null && (
          <div className="mt-2">
            <div className="text-xs text-muted-foreground mb-1">رفع... {Math.min(100, Math.round(progress))}%</div>
            <div className="h-2 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                style={{ width: `${Math.min(100, progress)}%` }}
              />
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
