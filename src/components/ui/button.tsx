import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "font-medium text-sm rounded-full border border-primary transition-colors outline-none flex items-center gap-4",
  {
    variants: {
      variant: {
        outline:
          "border-primary/10 bg-transparent text-primary hover:bg-primary/5",
        primary: "bg-primary text-white hover:bg-primary/90",
      },
      size: {
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 py-4 text-base",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
