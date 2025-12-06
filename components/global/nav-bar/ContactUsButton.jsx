"use client"
import { text } from "@/public/utill/staticText";
import Phone from "@/public/icon/PhoneCalling.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CallIcon from "@/components/icon/CallIcon";

export default function ContactUsButton() {
  const pathname = usePathname();
    const path = pathname.split("/")[1]; 
  return (
    <Link href={`tel:${text.tel1}`} className={`${path==="" ? "text-white" : "text-black"} cursor-pointer px-2 md:px-4 hidden lg:flex  h-6 text-[10px] md:text-base  md:h-[50px]    border border-gray-active   justify-center items-center content-center gap-1.5 rounded-full text-center `}>
   <CallIcon className="text-gray-active mx-2 "/>
    {text.callUs}

</Link>
  )
}

