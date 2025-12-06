import {Newspaper, ShoppingCart, SquareChartGantt} from "lucide-react";

export const MenuSidebar = [
    {
        id: 1,
        title: "محصولات",
        link: "/panel/products",
        icon: <ShoppingCart/>
    },
    {
        id: 2,
        title: "پروژه ها",
        link: "/panel/projects",
        icon: <SquareChartGantt/>
    },
    {
        id: 3,
        title: "مقاله ها",
        link: "/panel/blogs",
        icon: <Newspaper/>
    }
]