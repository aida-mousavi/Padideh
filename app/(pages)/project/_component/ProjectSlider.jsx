"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import { useState } from "react";

export default function ProjectSlider({ data }) {
  const cards = [Card2, Card1, Card3];

  const [direction, setDirection] = useState("left");

  return (
    <div className="w-full container-3xl overflow-hidden ">
      <Swiper
        modules={[FreeMode, Autoplay]}
        slidesPerView="auto"
        spaceBetween={16}
        freeMode={{
          enabled: true,
          momentum: false,
          sticky: false,
        }}
        grabCursor={true}
        className="!overflow-visible py-4"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={12000}
        onReachEnd={(swiper) => {
          swiper.params.autoplay.reverseDirection = true;
          setDirection("right");
          swiper.autoplay.start();
        }}
        onReachBeginning={(swiper) => {
          swiper.params.autoplay.reverseDirection = false;
          setDirection("left");
          swiper.autoplay.start();
        }}
      >
        {data?.map((item, i) => {
          const CardComponent = cards[i % 3];

          return (
            <SwiperSlide
              key={i}
              className="!w-auto"
              style={{ width: "auto" }}
            >
              <CardComponent item={item} data={data}  />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
