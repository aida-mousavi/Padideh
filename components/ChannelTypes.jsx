"use client";
import { channelTypes } from "@/public/utill/staticText";
import Title from "./Title";
import { useState } from "react";

export default function ChannelTypes() {
  const [channel, setchannel] = useState("preInsulatedPanel");

  return (
    <section className="w-full  ">
      <Title
        title={channelTypes.channelTypesText}
        description={channelTypes.history}
      />
      <div className=" container-base md:container-xl">
     


          <div className="w-full p-2 text-sm md:text-base gap-x-3  flex ">
            {channelTypes.typesTitle?.map((item,i) => (
            <div key={i}>
                <div
              onChange={() => setchannel(item.type)}
                className={`cursor-pointer flex items-center mb-2 justify-center gap-1 ${item.type === channel ? "text-blue-fill-active" :"text-gray-mute"}`}
                key={item.type}
                onClick={() => setchannel(item.type)}>
             
                {item.title}
              </div>
                <div className={`w-full border-b-[1.5px]  ${item.type === channel ? "border-blue-fill-active" :"border-gray-mute"}`}></div>
            </div>
            ))}
          </div>


          <div className="w-full flex justify-between flex-wrap space-y-3 md:space-y-5 text-sm md:text-base font-bold mt-7  ">
            {channelTypes.tableTitles.map((item, i) => (
              <div
                key={i}
                className={`  w-full md:w-[49%] lg:w-[30%] flex justify-between `}>
                <div className="bg-gray-main-50 px-2 py-1 rounded-sm">{channelTypes.tableTitles[i]}</div>
                <div className="bg-blue-prime-100 text-blue-brand px-2 py-1 rounded-sm"> {channelTypes.types[channel][i]}</div>
              </div>
            ))}
          </div>
        </div>

    </section>
  );
}
