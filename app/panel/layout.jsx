"use client";

import React from "react";
import Sidebar from "@/app/panel/_components/Sidebar";
import HeadNavbar from "@/app/panel/_components/HeadNavbar";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <section className="w-full h-screen flex overflow-hidden">
                {/* Sidebar */}
                <div>
                    <Sidebar/>
                </div>

                {/* Content */}
                <div className="w-full flex flex-col">
                    <HeadNavbar/>

                    <main className="flex-1 overflow-y-auto container mx-auto mt-16">
                        {children}
                    </main>
                </div>
            </section>
        </QueryClientProvider>
    );
};

export default Layout;
