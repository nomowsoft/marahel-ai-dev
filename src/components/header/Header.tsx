"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Menu, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ProductsDropdown,
  ProductsDropdownMobile,
} from "./product_dropdown";
import {
  ServiceDropdown,
  ServiceDropdownMobile,
} from "./service_dropdown";
import {
  SolutionsDropdown,
  SolutionsDropdownMobile,
} from "./solutions_dropdown";
import {
  BlogsDropdown,
  BlogsDropdownMobile,
} from "./blogs_dropdown";
import {
  CompanyDropdown,
  CompanyDropdownMobile,
} from "./company_dropdown";

const DESKTOP_MENUS = [
  ProductsDropdown,
  ServiceDropdown,
  SolutionsDropdown,
  BlogsDropdown,
  CompanyDropdown,
];

const MOBILE_MENUS = [
  ProductsDropdownMobile,
  ServiceDropdownMobile,
  SolutionsDropdownMobile,
  BlogsDropdownMobile,
  CompanyDropdownMobile,
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();
  const t = useTranslations("Header");
  const t1 = useTranslations("MenuItem");

  const changeLocale = useCallback(
    (nextLocale: string) => {
      if (nextLocale === localeActive) return;
      const segments = pathname.split("/");
      if (["ar", "en"].includes(segments[1])) {
        segments[1] = nextLocale;
      } else {
        segments.splice(1, 0, nextLocale);
      }
      router.push(segments.join("/") || "/");
      setIsOpen(false); // ✅ إغلاق المنيو بعد تغيير اللغة
    },
    [localeActive, pathname, router]
  );

  // ✅ دالة لإغلاق المنيو عند الضغط على أي رابط
  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/navbar/MarahelAI.svg"
              alt="Marahel AI"
              width={100}
              height={20}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/"
              className="text-white hover:bg-primary py-2 px-4 rounded-lg hover:text-primary-foreground"
            >
              {t1("home")}
            </Link>
            {DESKTOP_MENUS.map((Dropdown, i) => (
              <NavigationMenu key={i}>
                <NavigationMenuList>
                  <Dropdown />
                </NavigationMenuList>
              </NavigationMenu>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-border hover:bg-card"
                >
                  <Globe className="h-5 w-5 text-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border z-50">
                {["ar", "en"].map((locale) => (
                  <DropdownMenuItem
                    key={locale}
                    onClick={() => changeLocale(locale)}
                    className={`cursor-pointer ${
                      localeActive === locale
                        ? "bg-primary/10 text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {locale === "ar" ? "العربية" : "English"}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href={`/${localeActive}/contactus`}
              className="bg-primary hover:bg-accent text-primary-foreground p-2 rounded-sm"
            >
              {t("contactus")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden"
          >
            <Menu className="text-primary" size={4} />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 overflow-y-auto max-h-[calc(100vh-80px)]">
            {MOBILE_MENUS.map((DropdownMobile, i) => (
              // ✅ تمرير دالة الإغلاق كمُعطى إلى كل مكون منسدلة للموبايل
              <DropdownMobile key={i} onLinkClick={handleLinkClick} />
            ))}

            {/* Language Switcher - Mobile */}
            <div className="flex gap-2 py-2">
              {["ar", "en"].map((locale) => (
                <Button
                  key={locale}
                  variant={localeActive === locale ? "default" : "outline"}
                  onClick={() => changeLocale(locale)}
                  className="flex-1"
                >
                  {locale === "ar" ? "العربية" : "English"}
                </Button>
              ))}
            </div>

            <Link
              href={`/${localeActive}/contactus`}
              onClick={handleLinkClick}
              className="block text-center bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-md"
            >
              {t("contactus")}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
