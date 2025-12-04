import Image from "next/image";
import Channle from "@/public/image/channle.png";

export default function CirclesChannle() {
  return (
    <div className=" order-1 md:w-1/2 md:order-2 relative flex justify-center md:justify-end">
      
 
      <Image
        src={Channle}
        alt=""
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-40 h-40
          md:w-[45vw] md:h-[45vw]   lg:w-[480px] lg:h-[480px] xl:scale-125
          md:left-0 md:translate-x-0
          z-20
        "
      />
     

      {/* --- دایره اصلی --- */}
      <div
        className="
          relative rounded-full border-2 border-white/20
          w-40 h-40
          md:w-[45vw] md:h-[45vw]
          lg:w-[480px] lg:h-[480px]
          shadow-[0_1.28px_6.42px_rgba(225,225,255,1)]
          md:shadow-[0_3.8px_19.01px_rgba(225,225,255,1)]
        "
      >

        {/* --- دایره شماره 1 --- */}
        <div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            rounded-full border border-white/20
            w-[74px] h-[74px]
            md:w-[20vw] md:h-[20vw]
            lg:w-56 lg:h-56
            shadow-[0_1.28px_6.42px_rgba(225,225,255,1)]
            md:shadow-[0_3.8px_19.01px_rgba(225,225,255,1)]
          "
        ></div>

        {/* --- دایره شماره 2 (blur) --- */}
        <div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            rounded-full border border-white/50 blur-[20px]
            w-40 h-40
            md:w-[25vw] md:h-[25vw]
            lg:w-56 lg:h-56
            shadow-[0_1.28px_6.42px_rgba(225,225,255,1)]
            md:shadow-[0_3.8px_19.01px_rgba(225,225,255,1)]
          "
        ></div>

        {/* --- دایره شماره 3 --- */}
        <div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            rounded-full border border-white/50
            w-32 h-32
            md:w-[34vw] md:h-[34vw]
            lg:w-[365px] lg:h-[365px]
            shadow-[0_1.28px_6.42px_rgba(225,225,255,1)]
            md:shadow-[0_3.8px_19.01px_rgba(225,225,255,1)]
          "
        ></div>

      </div>
    </div>
  );
}
  