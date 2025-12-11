import Title from "@/components/Title";
import { blogShow } from "@/http/api/blog/hooks cop/blog-show";
import Image from "next/image";

export default async function page({params}) {

  const {slug} = await params



  const {data}=await blogShow(slug)

  console.log(data)


  return (
    <section className="w-full">
      <Title title={data?.title} />
      <div className="w-full container-base md:container-xl ">
        <div className="w-full">
          <div className="w-full h-80 lg:h-[244px] rounded-4xl ">
            <Image width={400} height={244} src={data?.image} alt="blog" className="w-full h-full rounded-4xl object-cover" />
          </div>
          <div className="w-full rounded-4xl bg-blue-prime-100 p-8 mt-3 ">
            <div className="text-2xl text-gray-mute">فروردین 1404</div>
            <div className="text-lg mt-3" dangerouslySetInnerHTML={{ __html: data?.desc }}/>
          </div>


          <div className="p-3" dangerouslySetInnerHTML={{ __html: data?.content }}/>
        </div>
      </div>
    </section>
  );
}
