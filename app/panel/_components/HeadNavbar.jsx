import React from "react";
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
    // TODO: Replace with API data
    const username = "رضا حسین زاده";

    const handleLogout = () => {
        console.log("logout...");
        // TODO: logout logic
    };

    return (
        <header className="w-full border-b bg-background">
            <div className="flex h-14 items-center justify-between px-5">
                {/* User name */}
                <p className="text-sm font-semibold">{username}</p>

                {/* Avatar dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-9 w-9 rounded-full p-0">
                            <Avatar className="h-8 w-8">
                                <AvatarFallback className="font-bold border-2 border-indigo-600">
                                    <User/>
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
