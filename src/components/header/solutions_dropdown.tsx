"use client";

import React from "react";
import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { useLocale, useTranslations } from "next-intl";
import { getSolutionsMenu } from "@/utils/data";

export const SolutionsDropdown = () => {
  const t = useTranslations("Header");
  const solutions = getSolutionsMenu(t)
  const localeActive = useLocale();
  return(
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-foreground hover:text-primary">
        {t('solutionmenu')}
      </NavigationMenuTrigger>
      <NavigationMenuContent dir={`${localeActive === 'ar'? 'rtl' : 'ltr'}`}>
        <div className="w-[400px] p-4 bg-card/95 backdrop-blur-lg rounded-lg shadow-lg">
          <div className="space-y-2">
            {solutions.map((item) => (
              <NavigationMenuLink asChild key={item.title}>
                <Link
                  href={`/${localeActive}${item.href}`}
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

export const SolutionsDropdownMobile = () => {
  const t = useTranslations("Header");
  const solutions = getSolutionsMenu(t)
  return(
    <div className="space-y-2">
      <div className="text-foreground font-semibold py-2">{t('solutionmenu')}</div>
      {solutions.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 transition-all border border-border/40 text-primary"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
