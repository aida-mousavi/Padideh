import Image from "next/image";

export default function Card1({ item, order=1 }) {

// console.log(order)
  
  return (
    <div className="h-[472px] w-[264px] md:w-[365px] flex flex-col justify-between flex-wrap">
      <div className={`w-full h-[162px] lg:h-[43%] rounded-4xl p-6 lg:p-8 bg-blue-prime-100 space-y-3 ${order===1 ? "order-1":"order-2"}`}>
        <div className="text-black-body font-light text-xl lg:text-2xl ">
          {item.location ?? "!تهران"}
        </div>
        <div className="text-2xl lg:text-[28px] font-semibold line-clamp-1 ">{item?.title}</div>
        <div className="text-black-body font-light text-lg lg:text-2xl ">
          {item?.date ?? "اردیبهشت | 1404!"}
        </div>
      </div>
      <div className={`w-full h-[304px] lg:h-[55%] rounded-4xl   ${order===1 ? "order-2":"order-1"}`}>
      <Image className="w-full h-full rounded-4xl object-cover" width={100} height={100} alt="project" src={item?.image} />

      </div>
    </div>
  );
}
