"use client";
import { channelTypes } from "@/public/utill/staticText";
import Title from "./Title";
import { useState } from "react";

export default function ChannelTypes() {


  const [channel, setchannel] = useState("preInsulatedPanel");

  return (
    <section className="w-full container-base md:container-xl">
      <Title
        title={channelTypes.channelTypesText}
        description={channelTypes.history}
      />
      <div className="flex justify-center">
        <div className="w-[1088px] ">
          <div className="w-full p-2 text-sm md:text-base  border border-blue-logo-9 rounded-full flex justify-evenly">
            {channelTypes.typesTitle?.map((item) => (
              <div
                className="cursor-pointer flex items-center justify-center gap-1"
                key={item.type}
                onClick={() => setchannel(item.type)}
                >
                  <input
      type="radio"
      name="type"
      value={item.type}
      checked={item.type === channel}
      onChange={() => setchannel(item.type)} 
    />
                {item.title}
              </div>
            ))}
          </div>

        
            <div className="w-full space-y-5 text-sm md:text-base font-bold mt-7">
        
                {channelTypes.tableTitles.map((item,i) => (
                  <div key={i} className={` p-4 px-6 md:px-10  rounded-full w-full flex justify-between ${i%2!=0 ? "bg-white shadow-[0_0_106px_0_rgba(0,0,0,0.06)]" : "bg-primary-main-60"}`}>
                    <div>{channelTypes.tableTitles[i]}</div>
                <div> {channelTypes.types[channel][i]}</div>
                  </div>
                ))}
         

          

          </div>
        </div>
      </div>
    </section>
  );
}
