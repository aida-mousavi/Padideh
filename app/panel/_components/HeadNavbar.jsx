'use client';

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {LogOut, User} from "lucide-react";

const HeadNavbar = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        try {
            const raw = window.localStorage.getItem("user");
            if (raw) setUser(JSON.parse(raw));
        } catch (e) {
            console.warn("Failed to read user from localStorage:", e);
            setUser(null);
        }
    }, []);

    const username = user?.username ?? user?.mobile ?? "کاربر";

    const handleLogout = () => {
        console.log("logout...");
        try {
            window.localStorage.removeItem("user");
        } catch (e) {
            console.warn("Failed to remove user from localStorage:", e);
        }
        // Redirect to login (adjust path as needed)
        router.push("/login");
    };

    return (
        <header className="w-full border-b bg-background fixed top-0 z-10">
            <div className="flex h-14 items-center justify-between px-5">
                {/* User name */}
                <p className="text-sm font-semibold">{username}</p>

                {/* Avatar dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-9 w-9 rounded-full p-0">
                            <Avatar className="h-8 w-8">
                                <AvatarFallback className="font-bold border-2 border-indigo-600">
                                    {/* اگر بخوایم حرف اول نام کاربر نشون بدیم */}
                                    {user?.username ? user.username.charAt(0).toUpperCase() : <User/>}
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem
                            onClick={handleLogout}
                            className="cursor-pointer gap-2 text-red-500 focus:text-red-500"
                        >
                            <LogOut className="w-4 h-4"/>
                            خروج از حساب
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default HeadNavbar;
