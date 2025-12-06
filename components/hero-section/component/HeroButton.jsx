import React from 'react'
import { header, text } from '@/public/utill/staticText'
import DownloadIcon from "@/public/icon/download.svg";
import Phone from "@/public/icon/PhoneCalling.svg";
import Link from 'next/link';
import Image from 'next/image';
import config from '@/config/appConfig';

export default function HeroButton() {
  return (
    <div className=" flex justify-center md:justify-start gap-1.5 md:gap-3.5 text-[10px] md:text-sm lg:text-base ">
    <Link target='_blank' href={"/product-list"} className="cursor-pointer  px-3 h-6 md:w-[211px] md:h-[45px] bg-white text-black flex justify-between items-center  rounded-full text-center ">
        <div className="w-full  font-bold">
       
          {header.seeProductList}
        </div>
    
    </Link>
    <Link target='_blank' href={config.urlImage+"/uploads/cataloge.pdf"}  className="cursor-pointer px-2   h-6  md:w-[178px] md:h-[45px]  text-white  border border-white flex justify-center items-center content-center gap-1 rounded-full text-center ">
        <Image
          alt="Download Icon"
          className="w-2.5 h-2.5 md:w-6 md:h-6"
          src={DownloadIcon}
        />
        {header.dlCataloge}

    </Link>

    <Link href={`tel:${text.tel1}`}className="cursor-pointer px-2 md:hidden  h-6  md:w-[178px] md:h-[45px]  text-white  border border-white flex justify-center items-center content-center gap-1 rounded-full text-center ">
        <Image
          alt="Phone"
          className="w-2.5 h-2.5 md:w-6 md:h-6"
          src={Phone}
        />
        {text.callUs}
 
    </Link>
  </div>
  )
}

