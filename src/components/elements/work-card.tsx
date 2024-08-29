import { FunctionComponent, ReactNode } from "react";
import { Card } from "../ui/card";
import Image from "@rasenganjs/image";
import { Link } from "rasengan";
import arrow from "@/assets/images/ArrowUpRight.svg";
export type WorkType = {
  title: ReactNode;
  description: ReactNode;
  img: string;
};
type WorkCardProps = WorkType;

export const WorkCard: FunctionComponent<WorkCardProps> = ({
  title,
  description,
  img,
}) => {
  return (
    <Card className="flex flex-col gap-6 p-6">
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent to-primary/50 z-10 opacity-0 hover:opacity-100 transition-opacity flex justify-end p-6">
          <Link
            to="#"
            className="flex items-center justify-center h-12 min-w-12 transition-all hover:pr-2 rounded-full overflow-hidden bg-white group duration-500 ease-linear"
          >
            <span className="text-base font semibold w-0 transition-all group-hover:w-20 text-nowrap group-hover:pl-6 opacity-0 group-hover:opacity-100 duration-500 ease-linear">
              Open
            </span>
            <Image src={arrow} alt="arrow" className="!w-8 !h-8 z-0" />
          </Link>
        </div>
        <Image src={img} alt="image" className="!w-full !h-auto z-0" />
      </div>
      <div className="flex flex-col gap-1 sm:w-[calc(100%-46px-16px)]">
        <div className="text-primary text-xl leading-tight font-semibold">
          {title}
        </div>
        <div className="text-primary/75 leading-normal">{description}</div>
      </div>
    </Card>
  );
};
