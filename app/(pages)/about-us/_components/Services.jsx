import IconWrapper from "@/components/IconWrapper";
import { services } from "@/public/utill/staticText";


export default function Services() {
  return (
    <div className="w-full container-base md:container-xl">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-2 lg:gap-3 ">
      {services.map((item, i) => {

        return (
          <div
            key={i}
            className={`flex   ${
              i === 0 || i === 2 ? "items-end" : "items-start"
            }`}>
            <div
              className={` bg-gray-main-50 w-full  rounded-4xl p-4 lg:p-8 ${
                i % 3 === 1 ? "lg:h-[264px]" : "lg:h-[228px]"
              }`}>
              <div className="w-full flex lg:flex-wrap  gap-x-4 items-center line-clamp-1  ">
                  <IconWrapper item={item.color} />  
                  <div className="hidden lg:flex text-2xl xl:text-3xl line-clamp-1 items-center font-bold ">
                   <div className="line-clamp-1"> {item.title}</div>
                  </div>
              
                <div>
                  <div className="text-lg lg:hidden font-bold lg:mt-5">
                    {item.title}
                  </div>
                  <div className="text-xs md:text-sm lg:text-base xl:text-lg line-clamp-3 xl:line-clamp-4 mt-1 md:mt-3 text-gray-600">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )
}

