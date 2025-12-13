import { footer, text } from "@/public/utill/staticText";
import Phone from "@/public/icon/Phone.svg";
import Emails from "@/public/icon/Emails.svg";
import Location from "@/public/icon/Location.svg";
import Comapny from "@/public/icon/map-location-pin.svg";
import Factory from "@/public/icon/Travel.svg";
import Faq from "@/public/icon/Faq.svg";
import PhoneCalling from "@/public/icon/PhoneCalling.svg";
import Package from "@/public/icon/package.svg";
import Users from "@/public/icon/Users.svg";
import Copyright from "@/public/icon/Copyright.svg";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full  text-white  bg-[#50555E]   md:pt-7 pt-4  relative mt-20 ">
      <div className="container-base text-sm md:text-base md:container-xl flex flex-wrap lg:flex-nowrap lg:space-x-3 justify-between gap-y-4 ">
        <div className=" font-light space-x-7  flex flex-wrap  lg:block lg:order-2">
          <div className="text-lg md:text-2xl mb-4 font-bold w-full">
            {footer.pagesLink}
          </div>

          <div className=" lg:w-full">
            <Link target="_blank" href={"/faq"} className=" flex gap-2 items-center  ">
              <Image width={24} height={24} src={Faq} alt="Faq" />
              {text.faq}
            </Link>
            <Link target="_blank" href={"/product-list"}className=" flex gap-2 items-center  py-4">
              <Image width={24} height={24} src={Package} alt="Package" />{" "}
              {footer.productList}{" "}
              </Link>
          </div>

          <div className=" lg:w-full">
          <Link target="_blank" href={"/about-us"}className=" flex gap-2 items-center">
              <Image
                width={24}
                height={24}
                src={PhoneCalling}
                alt="PhoneCalling"
              />
              {text.callUs}
              </Link>

              <Link target="_blank" href={"/project"} className=" flex gap-2 items-center py-4 ">
              <Image width={24} height={24} src={Users} alt="Users" />{" "}
              {footer.projects}
              </Link>
          </div>
        </div>

        <div className=" font-light space-y-4 md:max-w-[569px]  ">
          <div className="text-lg md:text-2xl font-bold ">
            {footer.contactUs}
          </div>
          <div className=" flex gap-2 items-center">
            <Image width={24} height={24} src={Phone} alt="Phone" />{" "}
            {text.phoneNumber}{" "}
          </div>
          <div className=" flex gap-2 items-center">
            <Image width={24} height={24} src={Emails} alt="Emails" />{" "}
            {footer.email}{" "}
          </div>
          <div className=" flex gap-2 items-center">
            <Image width={24} height={24} src={Location} alt="Location" />{" "}
            {footer.postalCode}{" "}
          </div>
          <div className=" flex gap-2 items-center">
            <Image width={24} height={24} src={Comapny} alt="Comapny" />{" "}
            {footer.companyAddress}{" "}
          </div>
          <div className=" flex gap-2 items-center">
            <Image width={24} height={24} src={Factory} alt="Factory" />{" "}
            {footer.factoryAdress}{" "}
          </div>
        </div>

        <div className=" order-3 w-full lg:max-w-[400px] md:h-[255px] h-[315px] flex justify-center rounded-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6274.0967088945645!2d51.323504205044344!3d35.764072462477316!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfd001c09057d%3A0xb3519210b4576215!2z2LTYsdqp2Kog24zaqdiq2KfYs9uM2LPYqtmFINin24zZhdmGINin24zYsdin2YbbjNin2YY!5e0!3m2!1sen!2shr!4v1759242534980!5m2!1sen!2shr"
            // allowfullscreen=""
            loading="lazy"
            className="w-full rounded-full"
            //   width={350}
            //   height={315}
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, borderRadius: "32px" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="yekta system imen iranian"
          />
        </div>
      </div>

      <div className="px-4 py-3 mt-4 text-[#50555E] bg-white flex justify-center text-sm md:gap-1 items-start md:items-center text-center font-bold">
        <Image
          alt="Copyright"
          className="hidden md:block"
          width={24}
          height={24}
          src={Copyright}
        />
        <span>{footer.copyright}</span>
      </div>

    </footer>
  );
}
