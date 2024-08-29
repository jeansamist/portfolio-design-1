import { Button } from "@/components/ui/button";
import { PageComponent } from "rasengan";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Service } from "@/components/service";
import { Work } from "@/components/work";
const Home: PageComponent = () => {
  // console.log(typeof animationData === "object");
  return (
    <section className="space-y-12 pt-4">
      <h1 className="text-2xl md:text-4xl font-bold leading-normal">
        Passionate creating great user experiences for Digital Product
      </h1>
      <div className="flex gap-4 flex-col sm:flex-row">
        <div>
          <Button size={"lg"}>Talk with me</Button>
        </div>
        <div>
          <Button size={"lg"} variant={"outline"}>
            See my work
          </Button>
        </div>
      </div>
      <section>
        <Experience />
      </section>
      <section>
        <Education />
      </section>
      <section>
        <Service />
      </section>
      <section>
        <Work />
      </section>
    </section>
  );
};

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;
