import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase } from "lucide-react";

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "مهندس ذكاء اصطناعي أول",
      department: "الهندسة",
      location: "الرياض، السعودية",
      type: "دوام كامل",
      description: "نبحث عن مهندس ذكاء اصطناعي متمرس للانضمام إلى فريقنا في تطوير حلول مبتكرة",
      requirements: [
        "خبرة 5+ سنوات في تطوير نماذج الذكاء الاصطناعي",
        "إتقان Python وأطر عمل التعلم الآلي",
        "خبرة في معالجة اللغات الطبيعية",
        "شهادة بكالوريوس أو ماجستير في علوم الحاسب"
      ]
    },
    {
      id: 2,
      title: "مستشار استراتيجية الذكاء الاصطناعي",
      department: "الاستشارات",
      location: "الرياض، السعودية",
      type: "دوام كامل",
      description: "نبحث عن مستشار لمساعدة العملاء في تحديد وتنفيذ استراتيجيات الذكاء الاصطناعي",
      requirements: [
        "خبرة 3+ سنوات في الاستشارات التقنية",
        "فهم عميق لتقنيات الذكاء الاصطناعي",
        "مهارات تواصل ممتازة بالعربية والإنجليزية",
        "خبرة في إدارة المشاريع"
      ]
    },
    {
      id: 3,
      title: "مطور واجهات أمامية",
      department: "التطوير",
      location: "الرياض، السعودية / عن بعد",
      type: "دوام كامل",
      description: "انضم لفريقنا لبناء واجهات مستخدم متطورة لمنصات الذكاء الاصطناعي",
      requirements: [
        "خبرة 3+ سنوات في React و TypeScript",
        "إتقان Tailwind CSS وأدوات التصميم الحديثة",
        "خبرة في تطوير واجهات المستخدم التفاعلية",
        "فهم جيد لمبادئ UX/UI"
      ]
    },
    {
      id: 4,
      title: "مهندس بيانات",
      department: "البيانات",
      location: "الرياض، السعودية",
      type: "دوام كامل",
      description: "نبحث عن مهندس بيانات لبناء وصيانة البنية التحتية للبيانات",
      requirements: [
        "خبرة 4+ سنوات في هندسة البيانات",
        "إتقان SQL وأدوات ETL",
        "خبرة في AWS أو Azure",
        "معرفة بأنظمة البيانات الضخمة"
      ]
    },
    {
      id: 5,
      title: "مدير منتجات الذكاء الاصطناعي",
      department: "المنتجات",
      location: "الرياض، السعودية",
      type: "دوام كامل",
      description: "قيادة استراتيجية وتطوير منتجات الذكاء الاصطناعي المبتكرة",
      requirements: [
        "خبرة 5+ سنوات في إدارة المنتجات التقنية",
        "فهم عميق لتقنيات الذكاء الاصطناعي",
        "مهارات قيادية قوية",
        "سجل حافل في إطلاق منتجات ناجحة"
      ]
    },
    {
      id: 6,
      title: "متدرب ذكاء اصطناعي",
      department: "الهندسة",
      location: "الرياض، السعودية",
      type: "تدريب",
      description: "فرصة تدريبية لتعلم وتطوير مهارات الذكاء الاصطناعي في بيئة احترافية",
      requirements: [
        "طالب في السنة الأخيرة أو خريج حديث",
        "معرفة بأساسيات Python والتعلم الآلي",
        "شغف بالذكاء الاصطناعي والتكنولوجيا",
        "مهارات تحليلية قوية"
      ]
    }
  ];

  const benefits = [
    {
      title: "بيئة عمل مبتكرة",
      description: "اعمل مع أحدث تقنيات الذكاء الاصطناعي في منطقة الشرق الأوسط"
    },
    {
      title: "فرص التطوير",
      description: "برامج تدريب مستمرة وفرص للنمو المهني"
    },
    {
      title: "رواتب تنافسية",
      description: "حزمة تعويضات ومزايا شاملة ومميزة"
    },
    {
      title: "مرونة في العمل",
      description: "خيارات العمل عن بعد والمرونة في ساعات العمل"
    },
    {
      title: "ثقافة داعمة",
      description: "فريق متنوع وبيئة عمل تشجع الابتكار والإبداع"
    },
    {
      title: "مشاريع مؤثرة",
      description: "شارك في مشاريع تساهم في تحقيق رؤية 2030"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-l from-primary to-primary/60 bg-clip-text text-primary">
              انضم إلى فريقنا
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              كن جزءًا من رحلة تحويل المستقبل بالذكاء الاصطناعي. نبحث عن أفضل المواهب للانضمام إلى فريقنا المتنامي.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">لماذا تنضم إلينا؟</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نوفر بيئة عمل محفزة ومزايا استثنائية لدعم نموك المهني والشخصي
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg border border-primary rounded-3xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-down">
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">الوظائف المتاحة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              استكشف الفرص المتاحة وابدأ رحلتك معنا
            </p>
          </div>

          <div className="grid gap-6 max-w-5xl mx-auto">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-xl border border-primary rounded-3xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-base">{job.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {job.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-lg">المتطلبات:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full md:w-auto" size="lg">
                    تقدم للوظيفة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            لم تجد الوظيفة المناسبة؟
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            نحن دائمًا نبحث عن مواهب استثنائية. أرسل سيرتك الذاتية وسنتواصل معك عند توفر فرصة مناسبة.
          </p>
          <Button size="lg" className="text-lg px-8">
            أرسل سيرتك الذاتية
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
