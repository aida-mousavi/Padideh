"use client";
import React from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";


const queryClient = new QueryClient();

const Layout = ({children}) => {
    const router = useRouter();
    const token = Cookies.get("token");

    if (token) {
        router.push("/panel");
    }
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                {children}
            </div>
        </QueryClientProvider>
    );
};

export default Layout;