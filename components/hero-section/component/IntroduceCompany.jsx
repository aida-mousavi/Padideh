import { header } from "@/public/utill/staticText";
import HeroButton from "./HeroButton";

export default function IntroduceCompany() {
  return (
    <div className="text-center pe-6 md:w-1/2 md:text-start mb-24  order-2 md:order-1  mx-auto t-3 md:m-0 ">
      <div className="space-y-2  md:space-y-3 ">
        <h1 className="font-bold text text-3xl md:text-[6vw] lg:text-[64px]">
          {header.padideIliyaPars}
        </h1>

        <div className="font-bold text-lg md:text-[3vw] lg:text-3xl">
          {header.healthyBreath}
        </div>

        <div className="text-xs md:text-base lg:text-lg font-light mb-4">
          {header.additionalCosts}
        </div>

        <HeroButton />
      </div>
    </div>
  );
}
