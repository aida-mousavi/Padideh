import Title from "@/components/Title";
import {blogIndexApi} from "@/http/api/blog/blogIndexApi";
import {blogList} from "@/public/utill/staticText";
import BlogCard from "./_component/BlogCard";
import Solution from "../about-us/_components/Solution";
import IconWrapper from "@/components/IconWrapper";
import {console} from "next/dist/compiled/@edge-runtime/primitives";
import Link from "next/link";

export default async function page() {
    const data = await blogIndexApi();

    console.log(data)

    return (<section className="w-full ">
            <Title title={blogList.knowledge}/>

            <div className="w-full container-base md:container-xl space-y-16 mt-10">

                <div className="w-full flex flex-wrap justify-center gap-3">
                    {data?.slice(0, 3).map((item, i) => (<BlogCard key={i} data={item} order={i % 2 === 0}/>))}
                    {/*<BlogCard order={1} />*/}
                    {/*<BlogCard order={2} />*/}
                    {/*<BlogCard order={1} />*/}
                </div>

                <Solution/>

                <div className="grid
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-3  xl:flex 
    justify-center gap-3  flex-wrap  items-end">




                    {data?.slice(3).map((item, i) => (
                        <div key={i}
                            className={` h-[234px] ${i=== 1 && "h-[261px]"} mx-auto space-x-3 md:mx-0 w-full lg:max-w-[370px] bg-gray-main-50 rounded-4xl p-8 flex`}>
                            <div>
                                <IconWrapper item={"news"}/>
                            </div>
                            <div className="space-y-3">
                                <div className="font-semibold">
                                    {item?.title}
                                </div>

                                <div className="text-gray-mute text-sm line-clamp-4" dangerouslySetInnerHTML={{ __html: item?.desc }}/>
                                
                                <Link target="_blank" href={"/blog/"+ item?.id} className="text-gray-mute text-sm font-bold">{blogList.knowMore}</Link>
                            </div>
                        </div>

                    ))}


                </div>
            </div>


        </section>);
}
