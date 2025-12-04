import Card from "@/components/Card";
import Title from "@/components/Title";
import { productIndex } from "@/http/api/product/productIndex";
import { text } from "@/public/utill/staticText";

export default async function page() {
  const { data: productIndexData } = await productIndex();

  console.log(productIndexData)
  return (
    <section className="w-full  ">
      <Title title={text.product} />
      <div
        className="container-base md:container-xl w-full grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-none lg:flex flex-wrap 
  lg:gap-8 gap-2 md:gap-3 justify-center">
        {productIndexData.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
