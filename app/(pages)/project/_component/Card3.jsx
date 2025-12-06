import useShamsiDate from "@/hooks/useShamsiDate";
import Image from "next/image";


export default function Card3({item}) {



  return (
    <div className="h-[472px] w-[264px] md:w-[365px] flex flex-col justify-between items-center flex-wrap">
    <div className={`w-full h-[304px] lg:h-[55%] rounded-4xl  bg-red-400 `}>
      <Image className="w-full h-full rounded-4xl object-cover" width={100} height={100} alt="project" src={item?.images[0]} />
    </div>
    <div className={`w-full h-[162px] lg:h-[43%] rounded-4xl p-6 lg:p-8 bg-ambre space-y-3 `}>
      <div className="text-black-body font-light text-xl lg:text-2xl ">
        {item.location ?? "!تهران"}
      </div>
      <div className="text-2xl lg:text-[28px] font-semibold line-clamp-1 ">{item?.projectTitle}</div>
      <div className="text-black-body font-light text-lg lg:text-2xl ">
      {useShamsiDate(item?.date)}
      </div>
    </div>
  </div>
  )
}

