import { text } from "@/public/utill/staticText";
import Image from "next/image";
import ArrowIcon from "@/components/icon/ArrowIcon";
import Link from "next/link";
import config from "@/config/appConfig";
export default function Card({ item }) {


  return (
<div className="w-full max-w-full sm:max-w-none lg:max-w-[357px] lg:h-[513px] relative overflow-hidden
  flex lg:flex-wrap lg:justify-center space-x-6 lg:space-x-0 items-center rounded-2xl lg:rounded-4xl 
  bg-gray-main-50 p-2 sm:p-4 lg:p-6">
      <Image
        alt="Product Image"
        width={100}
        height={100}
        className="w-[112px] sm:w-[12vw] md:w-[15vw]  lg:w-[309px]   rounded-2xl object-cover   lg:h-[272px] lg:rounded-4xl lg:border border-gray-active"
        src={config.urlImage + item?.image[0]}
      />

      <div className=" space-y-4 lg:space-y-3  lg:w-full py-5 ">
        <div className="font-semibold text-base lg:text-2xl line-clamp-1">
          {item?.title}
        </div>
        {/* <div className="text-xs font-semibold line-clamp-1">
          <span className="text-gray-mute pe-2 "> {text.category} :</span>
          {item?.category}
        </div> */}

        <div className="text-xs font-semibold flex flex-wrap">
          <span className="text-gray-mute pe-2 line-clamp-1"> {text.productId} :</span>
          {item?.sku}
        </div>
      <div className="hidden  lg:block">
      <div
          dangerouslySetInnerHTML={{ __html: item.description }}
          className=" line-clamp-3 text-outline text-sm"

        />
      </div>

        <Link
          target="_blank"
          href={`/product/${item?.slug}-${item?.id}`}
          className="w-full cursor-pointer lg:p-6 !pt-0 text-sm lg:text-base flex items-center font-semibold gap-x-1 text-blue-secondary  bg-gray-main-50 rounded-b-4xl lg:absolute bottom-0 right-0">
          {text.moreInfo}
          <ArrowIcon customClass=" rotate-90 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
