"use client";
import React from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const queryClient = new QueryClient();

const Layout = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                {children}
            </div>
        </QueryClientProvider>
    );
};

export default Layout;