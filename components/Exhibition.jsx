
import Title from "./Title";
import { exhibition } from "@/public/utill/staticText";
import LazyVideo from "./Video";

export default function Exhibition() {
  return (
    <section className="">
        <Title title={exhibition.exhibition} />
      <div className=" relative container-base md:container-xl">
        <LazyVideo />
      </div>
    </section>
  );
}
