"use client"
import React from "react";
import LogoMobile from "@/public/image/logo-padideh.png";
import { navBar, text } from "@/public/utill/staticText";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavBarContent() {

    const pathname = usePathname();
    const path = pathname.split("/")[1]; 
  return (
    <div
      className={`w-full h-10 md:h-14 md:w-[75vw]  lg:w-[618px] text-[9px] md:text-sm lg:text-base rounded-full border px-6 border-gray-active text-white`}>
      <ul className="flex h-full justify-between  content-center items-center text-xs md:text-sm lg:text-base ">
        <li className="md:hidden">
          <Link href={"/"}>
          <Image
            alt="LOGO"
            src={LogoMobile}
            className="h-8 w-fit object-center py-0.5  "
          />
          </Link>
        </li>
        {navBar.map((items, index) => (
          <Link className={`${items.link === "/" ? " hidden md:flex" : " flex"}`} href={items.link} key={index}>
            <li
              className={`  ${
                items.link === "/" + path    ? `text-blue-secondary ${path === "" && "bg-white px-4 py-1 rounded-2xl"   }`  : ` ${   path === "" ? "text-white" : "text-black"  }`
              }`}>
              {items.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

