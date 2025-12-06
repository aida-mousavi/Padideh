"use client";
import { whyOurPanelData, whyOurPanelTitle } from "@/public/utill/staticText";
import PicBorder from "./PicBorder";
import BoxWhyUs from "./BoxWhyUs";
import Image from "next/image";
import PanelSheet from "@/public/image/PanelSheet.png";
import Title from "./Title";
export default function WhyUs_Desktop() {
  return (
    <section className=" hidden md:block ">
      <Title
        title={whyOurPanelTitle.title}
        description={whyOurPanelTitle.description}
      />

      <PicBorder>
        <BoxWhyUs data={[whyOurPanelData[0], whyOurPanelData[2]]} />
        <div className="flex items-center">
          <Image
            className="  max-w-[21vw] xl:max-w-[281.05px] xl:max-h-[408.99px] object-cover "
            alt="Panel Sheet"
            src={PanelSheet}
          />
        </div>
        <BoxWhyUs data={[whyOurPanelData[1], whyOurPanelData[3]]} />
      </PicBorder>

      <div></div>
    </section>
  );
}
