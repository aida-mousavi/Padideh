import factory1 from "@/public/image/factory-1.jpg";
import factory2 from "@/public/image/factory-2.jpg";
import factory3 from "@/public/image/factory-3.jpg";
import Image from "next/image";

export default function AboutPadideh() {
  return (
    <div className="w-full container-base md:contain-xl lg:flex justify-center space-y-3 lg:space-y-0 gap-x-3">
      
      <div className="mx-auto lg:mx-0 max-w-[600px] lg:max-w-[365px] lg:flex flex-col justify-between space-y-3 lg:space-y-0  gap-x-3 ">
        <div className="w-full bg-blue-prime-100 p-8 rounded-4xl lg:h-[190px]">
          <div className="text-3xl font-bold">300+</div>
          <div className="text-2xl font-light">اجرای
            بیش از پروژه در سراسر کشور
          </div>
        </div>

        <div className="w-full bg-red-400 rounded-4xl  h-[310px] lg:h-[274px]">
          <Image
          alt="Factory image"
            src={factory1}
            className="w-full h-full rounded-4xl object-cover"
          />
        </div>
      </div>

      <div className="mx-auto lg:mx-0 max-w-[600px] lg:max-w-[365px] space-y-3 lg:space-y-0 ">
        <div className="w-full bg-red-400 rounded-4xl  h-[474px]">
          <Image
                    alt="Factory image"

            src={factory2}
            className="w-full h-full rounded-4xl object-cover"
          />
        </div>
      </div>

      <div className="mx-auto lg:mx-0 max-w-[600px] lg:max-w-[365px] lg:flex flex-col justify-between space-y-3 lg:space-y-0   gap-x-3 md:space-x-0">
        <div className="w-full bg-red-400 rounded-4xl  h-[310px] lg:h-[274px]">
          <Image
                    alt="Factory image"

            src={factory3}
            className="w-full h-full rounded-4xl object-cover"
          />
        </div>
        <div className="w-full bg-ambre p-8 rounded-4xl lg:h-[190px]">
          <div className="text-3xl font-bold">20+</div>
          <div className="text-2xl font-light">
            سال تجربه در بازار علم و فناوری و تولید محصولات صنعتی
          </div>
        </div>
      </div>
    </div>
  );
}
