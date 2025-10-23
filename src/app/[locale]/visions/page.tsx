import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, TrendingUp, Globe, Sparkles, Shield, Users } from "lucide-react";

const goals = [
  {
    icon: Rocket,
    title: "الريادة التقنية",
    description: "أن نكون في طليعة الشركات المبتكرة في مجال الذكاء الاصطناعي والحلول الرقمية",
    color: "primary"
  },
  {
    icon: TrendingUp,
    title: "النمو المستدام",
    description: "تحقيق نمو مستمر ومستدام يواكب تطلعات رؤية المملكة 2030",
    color: "secondary"
  },
  {
    icon: Globe,
    title: "التوسع الإقليمي",
    description: "نشر حلولنا في جميع أنحاء المملكة والتوسع إلى الأسواق الإقليمية",
    color: "accent"
  },
  {
    icon: Sparkles,
    title: "الابتكار المستمر",
    description: "الاستثمار في البحث والتطوير لتقديم حلول مبتكرة باستمرار",
    color: "primary"
  },
  {
    icon: Shield,
    title: "الأمان والخصوصية",
    description: "ضمان أعلى معايير الأمان والخصوصية في جميع حلولنا",
    color: "secondary"
  },
  {
    icon: Users,
    title: "تمكين المجتمع",
    description: "المساهمة في بناء مجتمع رقمي متقدم من خلال التدريب والتطوير",
    color: "accent"
  }
];

const pillars = [
  {
    title: "الاستدامة",
    description: "نلتزم بتقديم حلول مستدامة تساهم في تحقيق أهداف التنمية المستدامة",
    items: [
      "تقنيات صديقة للبيئة",
      "كفاءة استخدام الموارد",
      "حلول طويلة المدى"
    ]
  },
  {
    title: "الشراكة",
    description: "نبني شراكات استراتيجية مع قادة الصناعة محلياً وعالمياً",
    items: [
      "شراكات تقنية عالمية",
      "تعاون مع الجامعات",
      "علاقات طويلة الأمد"
    ]
  },
  {
    title: "التطوير",
    description: "نستثمر في تطوير فريقنا وتقنياتنا بشكل مستمر",
    items: [
      "برامج تدريب متقدمة",
      "بحث وتطوير",
      "تبني أحدث التقنيات"
    ]
  }
];

const Visions = () => {
  return (
    <div className="min-h-screen bg-background">      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-primary">
              رؤيتنا للمستقبل
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              نطمح لتشكيل مستقبل رقمي متقدم يعزز من مكانة المملكة كوجهة عالمية للابتكار التقني
            </p>
          </div>
        </div>
      </section>

      {/* Main Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto border-2 border-primary/20 rounded-3xl shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl mb-4">رؤية 2030</CardTitle>
              <CardDescription className="text-lg">
                نسعى لأن نكون جزءاً أساسياً من تحقيق رؤية المملكة 2030
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                نؤمن بأن المملكة العربية السعودية تمتلك إمكانات هائلة لتكون مركزاً عالمياً للابتكار التقني. 
                رؤيتنا هي المساهمة في هذا التحول من خلال تقديم حلول ذكاء اصطناعي متقدمة تخدم مختلف القطاعات.
              </p>
              <p>
                نطمح لبناء اقتصاد رقمي قوي يعتمد على المعرفة والابتكار، ونعمل على تمكين المؤسسات السعودية 
                من المنافسة عالمياً من خلال التحول الرقمي المدروس والمبني على أسس علمية متينة.
              </p>
              <p>
                من خلال حلولنا المبتكرة، نساهم في رفع كفاءة الأداء، تحسين جودة الخدمات، وخلق فرص جديدة 
                للنمو والتطور في جميع القطاعات الحيوية.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">أهدافنا الاستراتيجية</h2>
            <p className="text-xl text-muted-foreground">
              نعمل على تحقيق أهداف طموحة تدعم رؤيتنا للمستقبل
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-primary rounded-3xl"
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl bg-${goal.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-8 h-8 text-${goal.color}`} />
                    </div>
                    <CardTitle className="text-xl">{goal.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {goal.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">ركائز النجاح</h2>
            <p className="text-xl text-muted-foreground">
              المبادئ الأساسية التي نبني عليها رؤيتنا
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="border-2 border-primary rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{pillar.title}</CardTitle>
                  <CardDescription className="text-base">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pillar.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              نحو مستقبل رقمي مزدهر
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              نواصل العمل بشغف وإصرار لتحقيق رؤيتنا، ونؤمن بأن المستقبل يبدأ اليوم. 
              معاً، نبني غداً أفضل للمملكة والمنطقة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">2030</div>
                <div className="text-muted-foreground">رؤيتنا المستقبلية</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-secondary mb-2">100%</div>
                <div className="text-muted-foreground">التزام بالتميز</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-accent mb-2">∞</div>
                <div className="text-muted-foreground">إمكانيات لا محدودة</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visions;
