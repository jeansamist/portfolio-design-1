import { FunctionComponent } from "react";
import { Section } from "./section";
import { SERVICES } from "@/data/services";
import { ServiceCard } from "./elements/service-card";
export type ServiceProps = {};

export const Service: FunctionComponent<ServiceProps> = () => {
  return (
    <Section title={"What I do"}>
      {SERVICES.map((service, key) => (
        <ServiceCard {...service} key={key} />
      ))}
    </Section>
  );
};
