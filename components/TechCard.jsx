import React from "react";
import { technicalCharacteristics } from "@/public/utill/staticText";
import Image from "next/image";

function TechCard() {
  return (
    <div className="w-full flex flex-wrap items-start justify-evenly">
      {technicalCharacteristics?.map((item, index) => (
        <div
          key={index}
          className={`w-full md:w-1/2   ${
            index < 3 ? "lg:w-1/3" : "lg:w-1/4"
          }  my-3  px-2  flex md:flex-wrap md:justify-center  items-center   `}>
          <div className=" md:bg-[image:var(--gradient-light)] gap-3 rounded-4xl w-full flex md:flex-wrap items-center md:items-start md:p-4 lg:p-6 ">
          
              <div className="w-10! h-10! md:w-[60px] md:h-[60px] rounded-full bg-blue-logo-0 flex  items-center justify-center md:mx-auto   ">
                <Image
                  className="w-5 h-5 md:w-6 md:h-6"
                  width={16}
                  height={16}
                  src={item.img}
                  alt={item.alt}
                />
              </div>
       
            <div className="md:w-full  ">
              <div className="text-blue-main font-bold my-2  w-full md:text-center">
                {item.title}
              </div>
              <div className="text-xs lg:text-sm text-nuetral-main-90 md:text-center font-light md:leading-6">
                {item.description}
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default TechCard;
