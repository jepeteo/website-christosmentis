import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "secondary";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
          {
            "bg-cm-divider text-cm-body": variant === "default",
            "bg-cm-primary/20 text-cm-primary border border-cm-primary/30":
              variant === "primary",
            "bg-cm-secondary/20 text-cm-secondary border border-cm-secondary/30":
              variant === "secondary",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
