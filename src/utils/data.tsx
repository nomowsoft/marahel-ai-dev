import { MenuItem } from "./types";


export const getMenuItem = (t: (key: string) => string): MenuItem[] => [
    {
        name: t('home'),
        href: "",
        isActive: true,
    }
    // {
    //     name: t('services'),
    //     href: "seervice",
    //     isActive: false,
    // }
]
