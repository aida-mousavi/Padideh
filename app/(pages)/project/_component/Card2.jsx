import Image from "next/image"


export default function Card2({item}) {


  console.log("----------------")
  console.log(item)
  console.log("-----------")
  return (
    <div className="h-[472px] w-[264] md:w-[365px] bg-red-400 rounded-4xl flex items-center justify-center">
            <Image className="w-full h-full rounded-4xl object-cover" width={100} height={100} alt="project" src={item?.image} />

        <div className="w-[96%] h-[162px] rounded-4xl p-6 lg:p-4 flex flex-col justify-between bg-white space-y-3  absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
          <div className="text-black-body font-light text-xl lg:text-2xl text-center">{item.location ?? "!تهران"}</div>
          <div className="text-2xl lg:text-[28px] text-center font-semibold">{item?.title}</div>
          <div className="text-black-body font-light text-lg lg:text-2xl text-center">{item?.date ?? "اردیبهشت | 1404!"}</div>
        </div>
        </div>
  )
}

