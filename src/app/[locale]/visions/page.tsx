import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { getGoalsVisions } from "@/utils/data";
import { getPillars } from "@/utils/data";

const Visions = () => {
  const t = useTranslations('visions');
  const GoalsVisions = getGoalsVisions(t);
  const Pillars = getPillars(t);
  return (
    <div className="min-h-screen bg-background">      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-primary">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto border-2 border-primary/20 rounded-3xl shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl mb-4">{t('card.title')}</CardTitle>
              <CardDescription className="text-lg">
                {t('card.title1')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                {t('card.p1')}
              </p>
              <p>
                {t('card.p2')}
              </p>
              <p>
                {t('card.p3')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t('goalstitle')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('goalsdesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GoalsVisions.map((goal, index) => {
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t('successtitle')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('successdesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Pillars.map((pillar) => (
              <Card key={pillar.id} className="border-2 border-primary rounded-3xl">
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
                        <span className="text-muted-foreground">{item.title}</span>
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
              {t('endtitle')}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {t('enddesc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">2030</div>
                <div className="text-muted-foreground">{t('p1')}</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-secondary mb-2">100%</div>
                <div className="text-muted-foreground">{t('p2')}</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-accent mb-2">∞</div>
                <div className="text-muted-foreground">{t('p3')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visions;
