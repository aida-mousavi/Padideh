import TechCard from "./TechCard";
import Sheet from "./Sheet";

function TechPanel(){
    return(
        <section className="container-base md:container-xl ">
        <Sheet />
        <TechCard />
      </section>
    )
}

export default TechPanel