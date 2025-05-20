import * as React from "react";
import { type VariantProps } from "class-variance-authority"; // Import VariantProps directly
import { cn } from "@/lib/utils";
import { badgeVariants } from "./badge-variants"; // Import from the new file

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {} // This will correctly infer types from the imported badgeVariants

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
Badge.displayName = "Badge"; // Optional: for better debugging in React DevTools

// Now this file only exports the Badge component, satisfying the ESLint rule.
export { Badge };