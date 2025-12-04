import React from "react";
import { certificate } from "@/public/utill/staticText";
import Image from "next/image";
import CertificateImg from "@/public/image/certificate.svg";

export default function Certificate() {
  return (
    <section className="w-full bg-primary-main-60 z-10 py-7 md:py-12 lg:py-16 ">
    <div className="container-base md:container-xl lg:flex items-center ">
      
      <div className="lg:order-2  lg:ps-12 space-y-4">
        
        <div className="text-xl md:text-3xl font-bold lg:text-4xl">
          {certificate.title}
        </div>
        <div className="text-nuetral-main-90 text-sm md:text-base lg:text-lg leading-6">
          {certificate.description}
        </div>
      </div>
  
      <div className="w-full flex justify-center lg:justify-end relative mt-10 lg:order-1 lg:w-[430px] flex-none">
        <Image
          src={CertificateImg}
          alt="Certificate"
          className="z-30 lg:h-[569px] lg:w-[409px]"
        />
        <div className="border h-[426px] w-[307px] lg:h-[569px] lg:w-[409px] border-primary-main-10 rounded-xs absolute -translate-y-4 translate-x-5 z-20"></div>
      </div>
  
    </div>
  </section>
  
  );
}
