"use client";

import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();

  // 🔄 تغيير اللغة
  const changeLocale = (nextLocale: string) => {
    if (nextLocale === localeActive) return;
    const segments = pathname.split("/");
    if (segments[1] && ["ar", "en"].includes(segments[1])) {
      segments[1] = nextLocale; // استبدال اللغة الحالية
    } else {
      segments.splice(1, 0, nextLocale); // إضافة اللغة إذا لم تكن موجودة
    }
    router.push(segments.join("/") || "/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* 🔹 Logo */}
          <div className="flex items-center">
            <Image src="/navbar/MarahelAI.svg" alt="Marahel AI" width={100} height={20} />
          </div>

          {/* 🔹 Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Company
            </a>
          </div>

          {/* 🔹 Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="border-border hover:bg-card">
                  <Globe className="h-5 w-5 text-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border z-50">
                <DropdownMenuItem
                  onClick={() => changeLocale("ar")}
                  className={`cursor-pointer ${
                    localeActive === "ar" ? "bg-primary/10 text-primary" : "text-foreground"
                  }`}
                >
                  العربية
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => changeLocale("en")}
                  className={`cursor-pointer ${
                    localeActive === "en" ? "bg-primary/10 text-primary" : "text-foreground"
                  }`}
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Us
            </Button>
          </div>

          {/* 🔹 Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* 🔹 Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#products" className="block text-foreground hover:text-primary transition-colors py-2">
              Products
            </a>
            <a href="#solutions" className="block text-foreground hover:text-primary transition-colors py-2">
              Solutions
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors py-2">
              About Company
            </a>

            {/* 🌐 Language Switcher - Mobile */}
            <div className="flex gap-2 py-2">
              <Button
                variant={localeActive === "ar" ? "default" : "outline"}
                onClick={() => changeLocale("ar")}
                className="flex-1"
              >
                العربية
              </Button>
              <Button
                variant={localeActive === "en" ? "default" : "outline"}
                onClick={() => changeLocale("en")}
                className="flex-1"
              >
                English
              </Button>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              تواصل معنا
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
