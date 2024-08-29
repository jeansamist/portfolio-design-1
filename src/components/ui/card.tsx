import { cn } from "@/lib/utils";
import { FunctionComponent, HTMLAttributes } from "react";
import { motion, Variants } from "framer-motion";
export type CardProps = HTMLAttributes<HTMLDivElement> & {
  roundedFull?: true;
};

export const Card: FunctionComponent<CardProps> = ({
  roundedFull,
  children,
  className,
  ...props
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: -16 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, type: "just" }}
      variants={variants}
      viewport={{ once: true, margin: "300px 0px 0px 0px" }}
    >
      <div
        className={cn(
          "p-4 bg-white border border-primary/10 gap-4",
          roundedFull ? "rounded-full" : "rounded-3xl",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </motion.div>
  );
};
