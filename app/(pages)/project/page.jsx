
import { projectIndex } from "@/http/api/project/projectIndex";

import SingleProject from "./_component/SingleProject";
import ProjectSlider from "./_component/ProjectSlider";
import Title from "@/components/Title";
import { project } from "@/public/utill/staticText";

export default async function Page() {
  const { data } = await projectIndex();

  return (
    <section className="w-full space-y-8 lg:space-y-16">
      
      <Title title={project.honor} />

      <ProjectSlider data={data} />

      <div className="w-full mt-12 space-y-16">
        <SingleProject />
        {/* <SingleProject />
        <SingleProject />
        <SingleProject /> */}
      </div>
    </section>
  );
}
