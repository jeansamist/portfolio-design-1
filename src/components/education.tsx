import { FunctionComponent } from "react";
import { Section } from "./section";
import { EducationCard } from "./elements/education-card";
import { EDUCATIONS } from "@/data/educations";
export type EducationProps = {};

export const Education: FunctionComponent<EducationProps> = () => {
  return (
    <Section title={"Education & certificates"}>
      {EDUCATIONS.map((education, key) => (
        <EducationCard {...education} key={key} />
      ))}
    </Section>
  );
};
