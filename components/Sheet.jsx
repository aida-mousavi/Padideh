import AnimatedLine from "../components/AnimatedLine";
import Image from "next/image";
import Sheets from "@/public/image/Sheets.svg";
import TextSheet from "./TextSheet";
import { sheet } from "@/public/utill/staticText";

function Sheet() {
  return (
    <div className="w-full mb-10 lg:mb-0">
      <div className="w-full text-lg lg:text-3xl font-bold text-center  mb-9 lg:mb-3">{sheet.techInsulation}  </div>
      <div className="w-full flex justify-center relative flex-wrap ">
        <TextSheet
          title={sheet.outerLayer}
          description={sheet.outerLayerDescription}
          position={"top-[50%] right-[0%]"}
          padding={"!px-14"}
        />

        <div className=" relative ">
          <AnimatedLine
            customClass={
              "rotate-90 left-[41px] top-[15%]  lg:left-[72%] lg:top-[53%] lg:rotate-180   "
            }
          />
          {/* <video
        // ref={videoRef}
        controls
        preload="none"
        src="/video/sheet.mp4"
        // poster="/image/Exhibition.png"
        className="w-full h-full object-cover rounded-xl shadow-md"
      /> */}
          <Image
            alt="Sheet"
            src={Sheets}
            className="relative z-20 w-[400px] my-16 lg:my-0"
          />
          <AnimatedLine
            customClass={
              "-rotate-90 lg:rotate-0 left-[41px] bottom-[17%] lg:right-[70%] lg:top-[20%] z-30 lg:z-20 "
            }
          />
        </div>

        <TextSheet
          title={sheet.Insulation}
          description={sheet.InsulationDescription}
          position={"left-[-2%] top-[28%]"}
        />
      </div>
    </div>
  );
}

export default Sheet;
