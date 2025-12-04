import Image from "next/image";
import Social from "../../global/Social";
import bgContact from "@/public/image/bgContact.png";



export default function ContactCard({pic,phoneNumber,order,email,name,position}) {

  return (
    <div className="  lg:max-w-[558px] w-full flex flex-col overflow-hidden ">
    <div className={`w-full lg:max-h-[186px] lg:h-full bg-blue-prime-50 rounded-3xl  p-4 lg:p-8 space-y-3 ${order=== 2 ? "order-2 mt-2" : "order-1 mb-2" } `}>
      <div className="ps-2 lg:text-2xl">
        {name}
        <span className="text-red-intormative"> {position} </span>
      </div>
      <Social email={email} phoneNumber={phoneNumber} />
    </div>

    <div className={`w-full h-[278px] rounded-3xl bg-red-400 relative  ${order=== 2 ? "order-1 " : "order-2  " }`}>
       <Image src={bgContact} alt="bgContact" className="w-full h-full object-cover rounded-3xl object-top"/>
       <Image src={pic} alt="Support" className="w-[350px]  object-cover rounded-3xl object-top absolute bottom-0 left-[50%] translate-x-[-50%]"/>
       
    </div>
  </div>
  )
}


//   <div className="flex justify-center items-center lg:w-[48%] ">
//   <div className="w-[375px] md:w-[500px]   md:pb-8 pb-3 pt-9 md:pt-[90px] border border-blue-logo-0 rounded-lg relative text-center space-y-3 md:space-y-5">
//     <Image
//       src={pic}
//       alt="support"
//       className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] absolute top-0 left-[50%] translate-y-[-70%] translate-x-[-50%] "
//     />
//     <div className="text-lg md:text-3xl font-bold">{text.founderName}</div>
//     <div className="text-sm md:text-base">{text.founder}</div>
//     <Social phoneNumber={phoneNumber}/>
//   <ResumeButton phoneNumber={phoneNumber}/>
//   </div>
// </div>