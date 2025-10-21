import React from "react";
import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { useLocale, useTranslations } from "next-intl";
import { getCompanyMenu } from "@/utils/data";

export const CompanyDropdown = () => {
  const t = useTranslations("Header");
  const dataheader = getCompanyMenu(t);
  const localeActive = useLocale();
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-foreground hover:text-primary">
        {t('companymenu')}
      </NavigationMenuTrigger>
      <NavigationMenuContent dir={`${localeActive === 'ar'? 'rtl' : 'ltr'}`}>
        <div className="w-[400px] p-4 bg-card/95 backdrop-blur-lg rounded-lg shadow-lg">
          <div className="space-y-2">
            {dataheader.map((item) => (
              <NavigationMenuLink asChild key={item.title}>
                <Link
                  href={item.href}
                  className="group block rounded-lg p-3 hover:bg-primary/10 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="font-semibold text-foreground mb-1">
                      {item.title}
                    </div>
                  </div>
                </Link>
              </NavigationMenuLink>
            ))}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export const CompanyDropdownMobile = () => {
  const t = useTranslations("Header");
  const dataheader = getCompanyMenu(t);
  return (
    <div className="space-y-2">
      <div className="text-foreground font-semibold py-2">{t('companymenu')}</div>
      {dataheader.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 transition-all text-primary border border-primary/20"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
