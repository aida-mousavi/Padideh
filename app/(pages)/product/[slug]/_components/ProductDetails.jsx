import Link from "next/link";
import ProductAttribute from "./ProductAttribute";
import { singleProduct, text } from "@/public/utill/staticText";
import ShareButton from "@/components/btn/ShareButton";
import React from 'react'
import config from "@/config/appConfig";

export default function ProductDetails({data}) {
  return (
    <div className="w-full max-w-[450px] md:max-w-[470px] lg:max-w-[600px]  mx-auto md:mx-0 md:order-1 mt-6 md:mt-0">
    {/* Product Card */}
    <div className="bg-gray-main-50 rounded-4xl min-h-[235px] md:min-h-80">
      <div className="p-4">
        {/* Title + Share */}
        <div className="w-full pb-2 border-b border-gray-active font-lg font-semibold flex justify-between items-center">
          <div>
            <span className="px-2">{singleProduct.title}</span>|
            <span className="px-2">{data?.title}</span>
          </div>
          <ShareButton link={`${config.siteUrl}product/${data?.slug}-${data?.id}`} />
        </div>

        {/* Product Info */}
        <div className="w-full overflow-hidden">
          <div className="my-6">
            <span className="text-outline">{singleProduct.code}</span> : <span> {data?.sku}</span>
           
          </div>

          {/* Attributes */}
          <div>
            <span className="text-outline">{singleProduct.attribute}</span>
            <ProductAttribute data={data?.attribute} />
          </div>
        </div>
      </div>
    </div>

    {/* Contact */}
    <div className="w-full flex justify-center lg:justify-between items-center flex-wrap lg:flex-nowrap font-semibold md:text-lg mt-5">
      <div className="w-full lg:w-fit flex justify-center lg:justify-start items-center text-red-attentive">
        {singleProduct.contactPurchasing}
      </div>

      <Link
       href={`tel:${text.phoneNumber}`}
        className="bg-blue-fill-active text-white w-[280px] h-11 md:h-12 flex justify-center items-center rounded-2xl md:rounded-[29px] mt-6 lg:mt-0">
        {text.freeConsultation}
      </Link>
    </div>
  </div>
  )
}

