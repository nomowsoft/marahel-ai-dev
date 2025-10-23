import React from "react";
import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { useLocale, useTranslations } from "next-intl";
import { getServicesMenu } from "@/utils/data";

export const ServiceDropdown = () => {
  const t = useTranslations('Header');
  const services = getServicesMenu(t);
  const localActive = useLocale();
  return(
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-foreground hover:text-primary">
        {t('serviceMenu')}
      </NavigationMenuTrigger>
      <NavigationMenuContent dir={`${localActive === 'ar'? 'rtl' : 'ltr'}`}>
        <div className="w-[400px] p-4 bg-card/95 backdrop-blur-lg rounded-lg shadow-lg">
          <div className="space-y-2">
            {services.map((item) => (
              <NavigationMenuLink asChild key={item.title}>
                <Link
                  href={`/${localActive}${item.href}/${item.id}`}
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

export const ServiceDropdownMobile = ({
  onLinkClick, 
}: {
  onLinkClick?: () => void;
}) => {
  const t = useTranslations('Header');
  const services = getServicesMenu(t);
  const localActive = useLocale();
  return(
    <div className="space-y-2">
      <div className="text-foreground font-semibold py-2">{t('serviceMenu')}</div>
      {services.map((item) => (
        <Link
          onClick={onLinkClick}
          key={item.title}
          href={`/${localActive}${item.href}/${item.id}`}
          className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 transition-all border border-border/40 text-primary"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
