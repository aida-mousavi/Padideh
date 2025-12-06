
import { text } from "@/public/utill/staticText";
import Title from "./Title";
import ProductSlider from "@/app/(pages)/product/[slug]/_components/ProductSlider";

export default function Slider() {




  return (
    <section className="w-full ">
          <Title title={text.product} description={text.firstAndOnly}/>
          <ProductSlider/>
    </section>
  );
}
