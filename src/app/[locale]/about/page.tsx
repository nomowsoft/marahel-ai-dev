import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const values = [
  {
    icon: Target,
    title: "الابتكار",
    description: "نسعى دائماً لتقديم حلول مبتكرة تواكب أحدث التطورات التقنية"
  },
  {
    icon: Award,
    title: "التميز",
    description: "نلتزم بأعلى معايير الجودة في كل ما نقدمه من خدمات وحلول"
  },
  {
    icon: Users,
    title: "الشراكة",
    description: "نؤمن ببناء علاقات طويلة الأمد مع عملائنا وشركائنا"
  },
  {
    icon: Eye,
    title: "الشفافية",
    description: "نعمل بشفافية تامة ونحرص على بناء الثقة مع جميع أصحاب المصلحة"
  }
];

const timeline = [
  {
    year: "2020",
    title: "التأسيس",
    description: "انطلاق مراحل بهدف تقديم حلول الذكاء الاصطناعي في المملكة"
  },
  {
    year: "2021",
    title: "التوسع",
    description: "إطلاق أول منتجاتنا وخدمة أكثر من 50 عميل"
  },
  {
    year: "2022",
    title: "النمو",
    description: "التوسع في الخدمات وزيادة الفريق إلى أكثر من 30 خبير"
  },
  {
    year: "2023",
    title: "الريادة",
    description: "أصبحنا من الشركات الرائدة في مجال الذكاء الاصطناعي بالمملكة"
  },
  {
    year: "2024",
    title: "المستقبل",
    description: "نواصل الابتكار والتطوير لخدمة رؤية المملكة 2030"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-primary">
              عن مراحل
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              نحن شركة سعودية متخصصة في تقديم حلول الذكاء الاصطناعي والتحول الرقمي
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">قصتنا</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  انطلقت مراحل من رؤية طموحة لتكون الشريك الأمثل للمؤسسات السعودية في رحلة التحول الرقمي. 
                  نؤمن بأن الذكاء الاصطناعي هو المستقبل، ونعمل على تمكين المؤسسات من الاستفادة من هذه التقنية المتقدمة.
                </p>
                <p className="text-lg leading-relaxed">
                  مع فريق من الخبراء المتخصصين، نقدم حلولاً مبتكرة ومخصصة تلبي احتياجات كل عميل. 
                  نفخر بكوننا جزءاً من رؤية المملكة 2030 ونساهم في بناء مستقبل رقمي مزدهر.
                </p>
              </div>
              <Button size="lg" className="mt-8">
                تواصل معنا
              </Button>
            </div>
            <div className="relative">
              <Image
                width={500}
                height={20}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="فريق العمل"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary rounded-3xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">رسالتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  تمكين المؤسسات السعودية من تحقيق التحول الرقمي من خلال حلول الذكاء الاصطناعي المبتكرة، 
                  والمساهمة في بناء اقتصاد رقمي متقدم يواكب رؤية المملكة 2030.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary rounded-3xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  أن نكون الشركة الرائدة في مجال حلول الذكاء الاصطناعي في المملكة والمنطقة، 
                  ونكون الخيار الأول للمؤسسات التي تسعى للتميز في التحول الرقمي.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">قيمنا</h2>
            <p className="text-xl text-muted-foreground">
              المبادئ التي نؤمن بها ونعمل على أساسها
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary rounded-3xl">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">رحلتنا</h2>
            <p className="text-xl text-muted-foreground">
              من التأسيس إلى الريادة
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 items-center">
                  <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.year}
                  </div>
                  <Card className="flex-1 border-primary rounded-2xl">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
