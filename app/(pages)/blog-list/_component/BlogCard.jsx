import useShamsiDate from "@/hooks/useShamsiDate";
import {blogList} from "@/public/utill/staticText";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({order,data}) {
  return (
    <div className="flex flex-col gap-y-2">
      <div className={`max-w-[600px] lg:max-w-[312px]  h-[219px] rounded-4xl p-8 bg-blue-prime-100 space-y-3 ${order ? "order-1" : "order-2"}`}>
        <div className="text-[22px]">{useShamsiDate(data?.createdAt)}</div>
        <div className="text-lg">
            {data.title}        </div>
            <Link target="_blank" href={"/blog/"+data?.id} className="h-11 w-[109px] border-[1.5px] border-outline rounded-2xl text-outline  text-base font-semibold flex justify-center items-center">
            {blogList.knowMore}
        </Link>
      </div>

      <div className={` h-[245px] max-w-[600px] lg:max-w-[312px] rounded-4xl bg-red-400 ${order ? "order-2" : "order-1"} `}>
        <Image alt="blog" width={400} height={312} className="w-full h-full rounded-4xl"  src={data.image}/>
      </div>
    </div>
  );
}
