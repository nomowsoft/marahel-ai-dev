import { Card } from "../ui/card";
import { useTranslations } from "next-intl";
import { getSolutionHome } from "@/utils/data";
import Link from "next/link";
import { useLocale } from "next-intl";

const SolutionsHome = () => {
  const t = useTranslations('SolutionHome');
  const values = getSolutionHome(t);
  const localActive = useLocale();
  return (
    <section id="challenges" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-screen-xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {values.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className="w-16 h-12 rounded-2xl  flex items-center justify-center  transition-all duration-300 bg-primary/20 py-8"
                >
                  <Icon className="w-10 h-10  text-primary" />
                </div>

                <h3 className="text-2xl font-bold my-6 text-foreground">
                  {challenge.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <ul>
                      {challenge.content.map((items) => {
                        return(
                        <li key={items.id} className="flex items-center gap-3 my-2">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-muted-foreground text-sm">{items.name}</span>
                        </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link
            href={`${localActive}/solutions`}
            className="text-muted-foreground border-2 rounded-xl border-primary/50 hover:bg-primary/10 text-base sm:text-lg px-6 sm:px-8 py-3 flex items-center group "
          >
            {t('button')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SolutionsHome