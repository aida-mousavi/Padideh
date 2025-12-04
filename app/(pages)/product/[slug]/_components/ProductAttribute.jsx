"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function AttributeItem({ item }) {



  return (
    <div className="px-2 py-1 border border-outline rounded-xl text-sm">
      {item.key} : {item.value}
    </div>
  );
}


export default function ProductAttribute({ data }) {

  return (
    <div className="mt-6 mb-4 text-outline text-xs md:text-sm ps-1">

      {/* Mobile (Swiper) */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={4}
          slidesPerView="auto"
          grabCursor
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
          }}
          className="md:hidden"
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <AttributeItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex flex-wrap gap-2">
        {data?.map((item, index) => (
          <AttributeItem key={index} item={item} />
        ))}
      </div>

    </div>
  );
}
