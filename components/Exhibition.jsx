
import Title from "./Title";
import { exhibition } from "@/public/utill/staticText";
import LazyVideo from "./Video";

export default function Exhibition() {
  return (
    <section className="">
      <div className="container-base md:container-xl">
        <Title title={exhibition.exhibition} />
      </div>
      <div className=" relative">
        <LazyVideo />
        
      </div>
    </section>
  );
}
