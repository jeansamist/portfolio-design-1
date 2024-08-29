import { FunctionComponent } from "react";
import { Section } from "./section";
import { WORKS } from "@/data/works";
import { WorkCard } from "./elements/work-card";
export type WorkProps = {};

export const Work: FunctionComponent<WorkProps> = () => {
  return (
    <Section title={"Selected work"}>
      {WORKS.map((work, key) => (
        <WorkCard {...work} key={key} />
      ))}
    </Section>
  );
};
