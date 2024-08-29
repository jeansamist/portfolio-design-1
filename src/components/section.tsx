import { FunctionComponent, HTMLAttributes, ReactNode } from "react";

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode;
};

export const Section: FunctionComponent<SectionProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <div className="pt-4 border-t border-primary/10 space-y-4" {...props}>
      {title && (
        <h2 className="text-xl font-semibold leading-tight">{title}</h2>
      )}
      {children}
    </div>
  );
};
