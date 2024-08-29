import { FunctionComponent } from "react";
import { Section } from "./section";
import { ExperienceCard } from "./elements/experience-card";
import { EXPERIENCES } from "@/data/experiences";
export type ExperienceProps = {};

export const Experience: FunctionComponent<ExperienceProps> = () => {
  return (
    <Section title={"Working experience"}>
      {EXPERIENCES.map((experience, key) => (
        <ExperienceCard {...experience} key={key} />
      ))}
    </Section>
  );
};
