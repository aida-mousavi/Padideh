import { Suspense } from "react";
import { projectIndex } from "@/http/api/project/projectIndex";
import Title from "@/components/Title";
import ProjectSlider from "./_component/ProjectSlider";
import SingleProjectSection from "./_component/SingleProject";
import { project } from "@/public/utill/staticText";

export default async function Page() {
  const { data } = await projectIndex();

  return (
    <section className="w-full space-y-8 lg:space-y-16">
      <Title title={project.honor} />

      <Suspense fallback={<div className="h-40 bg-gray-100 rounded-2xl animate-pulse" />}>
        <ProjectSlider data={data} />
      </Suspense>

      <div className="w-full mt-12 space-y-16">
        {data?.map((item) => (
          <Suspense
            key={item.id}
            fallback={<div className="h-60 bg-gray-100 rounded-3xl animate-pulse" />}
          >
            <SingleProjectSection data={item} />
          </Suspense>
        ))}
      </div>
    </section>
  );
}
