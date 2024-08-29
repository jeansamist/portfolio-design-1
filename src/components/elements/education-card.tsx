import { FunctionComponent, ReactNode } from "react";
import { Card } from "../ui/card";
import Image from "@rasenganjs/image";
export type EducationType = {
  title: ReactNode;
  description: ReactNode;
  img: string;
  period: string;
};
type EducationCardProps = EducationType;

export const EducationCard: FunctionComponent<EducationCardProps> = ({
  title,
  description,
  img,
  period,
}) => {
  return (
    <Card className="flex flex-col sm:flex-row justify-between sm:items-center  rounded-3xl sm:rounded-full">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center p-2 overflow-hidden">
          <Image
            src={img}
            alt="logo"
            className="!w-full !h-full mix-blend-multiply"
          />
        </div>
        <div>
          <div className="text-primary/75 leading-tight">{description}</div>
          <div className="text-primary text-base leading-tight font-semibold">
            {title}
          </div>
        </div>
      </div>
      <span className="text-primary/75 pr-4">{period}</span>
    </Card>
  );
};
