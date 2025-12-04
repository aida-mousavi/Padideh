import { text } from "@/public/utill/staticText";
import Title from "../../Title";

import ContactCard from "./ContactCard";
import Social from "../../global/Social";

import kazemMehdizade from "@/public/image/kazemMehdizade.png";
import mohsenMehdizade from "@/public/image/mohsenMehdizade.png";

export default function ContactUs() {
  return (
    <section className=" container-base md:container-xl">
      <div className="flex flex-wrap md:flex-nowrap justify-center  space-y-3 md:space-y-0 md:space-x-5    ">
        <ContactCard
          name={"کاظم مهدی زاده /"}
          position={"مالک و مدیر عامل"}
          order={1}
          pic={kazemMehdizade}
          phoneNumber={"+989121205824"}
          email={
            "mailto:info@padidehillyapars.com?subject=درخواست%20نماینگی%20"
          }
        />
        <ContactCard
          name={"محسن مهدی زاده /"}
          position={"مدیر بازرگانی"}
          order={2}
          pic={mohsenMehdizade}
          phoneNumber={"+989121583134"}
          email="mailto:sales.yektasystem@gmail.com?subject=درخواست%20نمایندگی%20"
        />
      </div>
    </section>
  );
}
