
import { productIndex } from "@/http/api/product/productIndex";
import ProductSwiper from "./ProductSwiper";
// import Arrow from "@/public/icon/Arrowdown.svg";

export default async function ProductSlider() {

  const {data:productIndexData} = await productIndex();
  console.log(productIndexData)

  return (
    <div className="w-full ps-4 md:!mt-12">
      <ProductSwiper productIndexData ={productIndexData}/>
    </div>
  );
}
