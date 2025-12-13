"use client";

import React from "react";
import Image from "next/image";
import LogoSvg from "@/public/image/logo.svg";
import Link from "next/link";
import {MenuSidebar} from "@/config/menuSidebar";

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {usePathname} from "next/navigation";

const SidebarContent = () => {
    const pathname = usePathname();
    return (
        <div className="flex flex-col h-full bg-gray-800 text-white p-5 rounded-l-2xl">
            {/* Header */}
            <div className="flex items-center gap-3 pb-3 border-b border-gray-600">
                <Image src={LogoSvg} alt="Logo-Padideh" width={65}/>
                <h2 className="font-bold text-lg">پنل ادمین</h2>
            </div>

            {/* Menu */}
            <div className="mt-6 overflow-y-auto">
                <div className="flex flex-col gap-2">
                    {MenuSidebar?.map((menu) => (
                        <Link
                            href={menu.link}
                            key={menu.id}
                            className={`flex items-center gap-3 rounded-xl p-3 transition ${pathname===menu.link &&"bg-indigo-700"} hover:bg-indigo-700`}
                        >
                            {menu.icon}
                            <span className="font-semibold text-sm">{menu.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

const Sidebar = () => {
    return (
        <>
            {/*  Mobile Sidebar */}
            <div className="lg:hidden fixed top-4 right-4 z-50">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <Menu className="w-5 h-5"/>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="p-0 w-72">
                        <SidebarContent/>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block h-screen w-72">
                <SidebarContent/>
            </aside>
        </>
    );
};

export default Sidebar;
