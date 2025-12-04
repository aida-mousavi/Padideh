import Link from "next/link";
import Whatsapp from "@/public/icon/WHATSAPP.svg";
import Mail from "@/public/icon/mail-contact.svg";
import Call from "@/public/icon/call-contact.svg";
import Image from "next/image";

export default function Social({ phoneNumber,email }) {
  return (
    <div className="flex justify-center md:justify-start gap-3 mt-3 ">
   


      <Link
        target="_blank"
        className="w-12 h-12 lg:w-[62px] lg:h-[62px]  rounded-[20px] bg-blue-prime-100 flex items-center justify-center"
        href={`tel:${phoneNumber}`}>
        <Image
          alt="Call"
          src={Call}
          className=" w-5 h-5 lg:w-7 lg:h-7 "
        />
      </Link>


      <Link
        target="_blank"
        className="w-12 h-12 lg:w-[62px] lg:h-[62px]  rounded-[20px] bg-blue-prime-100 flex items-center justify-center"
        href={`https://wa.me/${phoneNumber}`}>
        <Image
          alt="Whatsapp"
          src={Whatsapp}
          className=" w-5 h-5 lg:w-7 lg:h-7 "
        />
      </Link>

      <Link
        target="_blank"
        className="w-12 h-12 lg:w-[62px] lg:h-[62px]  rounded-[20px] bg-blue-prime-100 flex items-center justify-center"
        href={`mailto::${email}`}>
        <Image
          alt="Call"
          src={Mail}
          className=" w-5 h-5 lg:w-7 lg:h-7 "
        />
      </Link>

    </div>
  );
}
