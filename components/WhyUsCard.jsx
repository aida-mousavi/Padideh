import Image from "next/image";
import BlueLogo from "@/public/image/blue_logo.png";

export default function WhyUsCard({ items, flag,}) {

 
  return (
    <div
  
      className={`w-full flex  ${flag ? "justify-start" : "justify-end"}`}>
      <div
        className={`w-[332px]  primary-main-60 rounded-3xl p-4 relative overflow-hidden ${
          flag ? "bg-primary-main-60" : "border border-primary-main-60"
        } `}>
        <div>
          <Image
          alt="Blue   Logo"
            src={BlueLogo}
            className={`absolute left-0 bottom-1 opacity-50 ${flag && "hidden"}`}
          />

          <div className="mb-2">
          <span className="w-8 h-8 rounded-full bg-blue-logo-0 text-white inline-block text-center content-center text-lg">
            {items.id}
          </span>
          <span className="text-lg font-bold px-2 ">{items?.title}</span>
          </div>
        </div>
        <div>
          {items.items?.map((item, i) => (
            <li key={i} className={`text-neutral-main-90 font-light mt-1 text-sm }`}>
              • {item}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
