"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import Card from "@/components/Card";
export default function ProductSwiper({ productIndexData }) {

  return (
    <div className="">
     <Swiper
  slidesPerView={"auto"}
  spaceBetween={16}
  className="mySwiper px-2"
>
  {productIndexData?.map((item, i) => (
    <SwiperSlide
      key={i}
      className="
        !w-[75%] 
        sm:!w-[250px] 
        md:!w-[300px] 
        lg:!w-[350px]
      "
    >
      <Card item={item} />
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
}
