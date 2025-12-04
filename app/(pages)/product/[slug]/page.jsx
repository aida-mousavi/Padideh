import { productShow } from "@/http/api/product/productShow";
import ProductIntroduce from "./_components/ProductIntroduce";
import ProductInfo from "./_components/ProductInfo";
import Title from "@/components/Title";
import { singleProduct } from "@/public/utill/staticText";
import ProductSlider from "./_components/ProductSlider";

export default async function Page({params}) {
  const {slug}=await params

  const id = slug?.split("-").pop();

  const {data:productData} = await productShow(id);




  return (
    <section className="w-full">
      <div className="container-base md:container-xl w-full space-y-10 lg:space-y-16 ">
        <ProductInfo data={productData}/>
        <ProductIntroduce data={productData} />
        <div className="w-full">
          <Title title={singleProduct.Other}/>
        </div>
      </div>
          <ProductSlider />
    </section>
  );
}
