"use client";

import ProductContent from "./ProductContent";
import TitleTab from "./ProductTitleTab";
import {useState} from "react";

export default function ProductIntroduce({data}) {
    const [activeTab, setActiveTab] = useState("introduction");
  return (
   <div className="w-full container-base md:container-xl ">
     <TitleTab activeTab={activeTab} setActiveTab={setActiveTab}/>
     <ProductContent activeTab={activeTab}  data={data}/>
   </div>
  )
}

