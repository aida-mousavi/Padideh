import Title from "@/components/Title";
import { about, services } from "@/public/utill/staticText";
import Accordion from "./_components/Accordion";
import IconWrapper from "@/components/IconWrapper";
import ContactUs from "@/components/contact-us/component/ContactUs";
import AboutPadideh from "./_components/AboutPadideh";
import Solution from "./_components/Solution";
import Services from "./_components/Services";
import Contact from "../../../components/contact-us/Contact";

export default function page() {
  return (
    <section className="w-full space-y-16 ">
      <Title title={about.aboutPadideh} />
      <AboutPadideh />
      <Solution />
      <Services />
      <Accordion />
      <Contact />
    </section>
  );
}
