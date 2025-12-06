import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary"
  size?: "sm" | "lg" | "icon"
}

const variantClasses = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-border bg-transparent text-foreground hover:bg-accent",
  ghost: "bg-transparent hover:bg-accent",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
}

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  lg: "px-6 py-3 text-lg",
  icon: "p-2 w-10 h-10 flex items-center justify-center",
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        size ? sizeClasses[size] : "px-4 py-2",
        className
      )}
      {...props}
    />
  )
)

Button.displayName = "Button"
