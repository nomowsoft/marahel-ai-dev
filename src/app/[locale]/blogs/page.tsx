import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getblogPosts, getFilter } from "@/utils/data";


const Blogs = () => {
  const t = useTranslations('blogs');
  const categories = getFilter(t);
  const blogPosts = getblogPosts(t);

  return (
    <div className="min-h-screen bg-background">
  
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
              {t('title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full border border-primary text-foreground"
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden max-w-6xl mx-auto border-2 hover:shadow-2xl transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image src={blogPosts[0].image} alt={blogPosts[0].title} width={500} height={20} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {t('done')}
                  </span>
                </div>
              </div>
              <CardHeader className="p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    {blogPosts[0].category}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </div>
                </div>
                <CardTitle className="text-3xl mb-4">{blogPosts[0].title}</CardTitle>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </div>
                  <Button>
                    {t('readmore')}
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              </CardHeader>
            </div>
          </Card>
        </div>
      </section>

      {/* Blogs Posts Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card 
                key={post.id}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                  width={500}
                  height={20}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-background/90 backdrop-blur text-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div>{post.readTime}</div>
                  </div>
                  <CardTitle className="text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <Button variant="ghost" size="sm">
                      {t('read')}
                      <ArrowRight className="w-4 h-4 mr-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Button size="lg" variant="outline" className="border border-primary text-foreground">
            {t('button')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
