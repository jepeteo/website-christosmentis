import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cm-primary",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-cm-primary text-cm-bg hover:bg-cm-primary/90":
              variant === "primary",
            "bg-cm-surface text-cm-headline border border-cm-divider hover:bg-cm-surface/80":
              variant === "secondary",
            "text-cm-headline hover:bg-cm-surface/50": variant === "ghost",
            "border border-cm-primary text-cm-primary hover:bg-cm-primary/10":
              variant === "outline",
          },
          {
            "h-9 px-3 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        ref={ref as any}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
