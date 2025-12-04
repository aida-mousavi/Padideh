import Arrowdown from "@/public/icon/Arrowdown.svg";
import Image from "next/image";

export default function ArrowPointer() {
  return (
    <div className="w-9 h-9 md:h-16 md:w-16 bg-white/10 flex justify-center items-center  rounded-full absolute bottom-4   left-[50%] translate-x-[-50%]">
    <Image
    alt="Arrow down"
      src={Arrowdown}
      className="animate-bounce w-4 h-4 md:w-7 md:h-7 mt-4 "
    />
  </div>
  )
}

