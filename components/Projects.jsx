import { projectIndex } from "@/http/api/project/projectIndex";
import { project } from "@/public/utill/staticText";
import Title from "./Title";
import ProjectSlider from "@/app/(pages)/project/_component/ProjectSlider";


export default async function Projects() {

  const { data } = await projectIndex();

  return (
    <section className="w-full ">

<Title title={project.honor} /> 
   
   <ProjectSlider data={data} />


    </section>
  )
}

