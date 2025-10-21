"use client";

import React from "react";
import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { getProductsMenu } from "@/utils/data";
import { useLocale, useTranslations } from "next-intl";


export const ProductsDropdown = () => {
  const localActive = useLocale();
  const t = useTranslations("Header");
  const products = getProductsMenu(t)
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-foreground hover:text-primary">
        {t('products')}
      </NavigationMenuTrigger>
      <NavigationMenuContent  dir={`${localActive === 'ar'? 'rtl' : 'ltr'}`}>
        <div className="w-[400px] p-4 bg-card/95 backdrop-blur-lg rounded-lg shadow-lg">
          <div className="space-y-2">
            {products.map((item) => (
              <NavigationMenuLink asChild key={item.title}>
                <Link
                  href={`/${localActive}/products/${item.id}`}
                  className={`group block rounded-lg p-3 transition-all ${item.hoverColor}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.bgColor}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {item.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.description}
                      </div>
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

export const ProductsDropdownMobile = () => {
  const localActive = useLocale();
  const t = useTranslations("Header");
  const products = getProductsMenu(t)
  return (
    <div className="space-y-2">
      <div className="text-foreground font-semibold py-2">{t('products')}</div>
      {products.map((item) => (
        <Link
          key={item.title}
          href={`/${localActive}/products/${item.id}`}
          className={`flex items-start gap-3 p-3 rounded-lg transition-all border border-border/40 ${item.hoverColor}`}
        >
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.bgColor}`}
          >
            {item.icon}
          </div>
          <div>
            <div className="font-semibold text-foreground mb-1">
              {item.title}
            </div>
            <div className="text-sm text-muted-foreground">
              {item.description}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
