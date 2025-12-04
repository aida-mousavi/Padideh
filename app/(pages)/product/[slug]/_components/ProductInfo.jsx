"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import config from "@/config/appConfig";
import ImageLoading from "@/components/ImageLoading";
import ProductDetails from "./ProductDetails";

export default function ProductInfo({ data }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isLoading, setIsLoading] = useState(false);

  const containerRef = useRef(null);

  // حرکت موس روی عکس برای زوم نقطه‌ای
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  // تغییر عکس + preload + freeze + loading
  const handleChangeImage = (index) => {
    if (index === activeImage) return;

    setIsLoading(true);

    // جلوگیری از خطا: استفاده از window.Image
    const img = new window.Image();
    img.src = config.urlImage + data.image[index];

    img.onload = () => {
      setActiveImage(index);
      setIsLoading(false);
    };
  };

  return (
    <div className="w-full md:flex justify-between md:gap-x-6">
      {/* Left Side (Images) */}
      <div className="w-full max-w-[450px] md:max-w-[470px] lg:max-w-fit lg:flex mx-auto lg:mx-0 md:order-2">

        {/* Main Image */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          className="relative w-full h-[235px] lg:max-w-lg lg:min-w-lg md:h-80 
                     rounded-4xl border border-gray-active overflow-hidden select-none"
        >
          {/* Loading mask while new image loads */}
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200/70 animate-pulse z-20 rounded-4xl" />
          )}

          {/* Main Image Display */}
          {data?.image ? (
            <Image
              className="w-full h-full object-cover rounded-4xl"
              width={400}
              height={235}
              alt="Product Image"
              src={config.urlImage + data?.image[activeImage]}
              style={{
                transform: isZoomed ? "scale(1.3)" : "scale(1)",
                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                transition: "transform 0.25s ease-out",
              }}
            />
          ) : (
            <ImageLoading />
          )}
        </div>

        {/* Thumbnails */}
        <div className="w-full flex lg:flex-col gap-x-3 lg:gap-5 lg:ms-3 mt-3 lg:mt-0">
          {data?.image?.map((item, index) => (
            <Image
              key={index}
              alt="Product Thumbnail"
              width={64}
              height={64}
              onClick={() => handleChangeImage(index)}
              src={config.urlImage + item}
              className={`
                w-16 h-16 md:w-20 md:h-20 rounded-3xl object-cover cursor-pointer duration-200
                ${activeImage === index
                  ? "opacity-100 border-blue-logo-0 border-2 p-1"
                  : "opacity-45 border-gray-active border"}
              `}
            />
          ))}
        </div>
      </div>

      {/* Right Side (Details) */}
      <ProductDetails data={data} />
    </div>
  );
}
