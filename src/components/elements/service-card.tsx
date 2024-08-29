import { FunctionComponent, ReactNode } from "react";
import { Card } from "../ui/card";
import Image from "@rasenganjs/image";
export type ServiceType = {
  title: ReactNode;
  description: ReactNode;
  img: string;
};
type ServiceCardProps = ServiceType;

export const ServiceCard: FunctionComponent<ServiceCardProps> = ({
  title,
  description,
  img,
}) => {
  return (
    <Card className="flex flex-col sm:flex-row justify-between sm:items-center">
      <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center p-3 overflow-hidden">
        <Image
          src={img}
          alt="image"
          className="!w-full !h-full mix-blend-multiply"
        />
      </div>
      <div className="flex flex-col gap-1 sm:w-[calc(100%-46px-16px)]">
        <div className="text-primary text-base leading-tight font-semibold">
          {title}
        </div>
        <div className="text-primary/75 leading-normal">{description}</div>
      </div>
    </Card>
  );
};
