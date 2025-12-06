"use client";
import React from 'react';
import Sidebar from "@/app/panel/_components/Sidebar";
import HeadNavbar from "@/app/panel/_components/HeadNavbar";
// ------------------------------------------------------------------>

const Layout = ({children}) => {
    return (
        <section className={"w-full h-screen flex"}>
            <div className={""}>
                <Sidebar/>
            </div>

            <div className={"w-full"}>
                <HeadNavbar/>
                <main className={"container mx-auto mt-10"}>{children}</main>
            </div>
        </section>
    );
};

export default Layout;