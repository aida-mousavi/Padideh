import React from "react";
import Hero from "../components/hero-section/Hero";
import TechPanel from "../components/TechPanel";
import Certificate from "../components/Certificate";
import WhyUs_Desktop from "../components/WhyUs_Desktop";
import WhyUs_Mobile from "../components/WhyUs_Mobile";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import ChannelTypes from "../components/ChannelTypes";
import Projects from "../components/Projects";
import Exhibition from "../components/Exhibition";
import Contact from "@/components/contact-us/Contact";

function Page() {
  return (
    <section className="space-y-20 overflow-hidden max-w-[1920px] mx-auto">
      <Hero />
      <TechPanel />
      <Certificate />
      <Slider />
      <WhyUs_Desktop />
      <WhyUs_Mobile />
      <ChannelTypes />
      <Exhibition />
      <Contact />
      <Projects />
    </section>
  );
}

export default Page;
