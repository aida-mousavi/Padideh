import Title from "./Title";
import WhyUsCard from "./WhyUsCard";
import { whyOurPanelData,whyOurPanelTitle } from "@/public/utill/staticText";


export default function WhyUs_Mobile() {

  return (
    <section className="container-base  space-y-8 md:hidden">
   
      <Title title={whyOurPanelTitle.title} description={whyOurPanelTitle.description}/>
      {whyOurPanelData?.map((items, index) => (
       <WhyUsCard key={items?.id} id={items?.id} items={items} flag={index % 2 === 0 }/>
      ))}
    </section>
  );
}

