import React from "react";
import ArrowPointer from "./component/ArrowPointer";
import IntroduceCompany from "./component/IntroduceCompany";
import CirclesChannle from "./component/CirclesChannle";

function Hero() {
  return (
    <section
      className={"w-full   h-[496px] md:h-[778px]  relative text-white "}>
      <div className="bg-[url('/image/image-hero.png')] bg-cover h-full bg-bottom  ">
        <div className=" md:flex    justify-between items-center md:container-xl  md:h-full pt-20 md:pt-0 ">
          <CirclesChannle />
          <IntroduceCompany />
        </div>
        <ArrowPointer />
      </div>
    </section>
  );
}

export default Hero;
