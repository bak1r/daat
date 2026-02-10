import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gold text-foreground hover:bg-gold-light shadow-soft hover:shadow-soft-lg",
        premium: "relative overflow-hidden bg-gradient-to-r from-daat-gold to-daat-goldLight text-daat-dark font-semibold shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5",
        glass: "bg-background/10 backdrop-blur-md border border-daat-gold/30 hover:border-daat-gold hover:shadow-glow-gold text-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft",
        outline: "border-2 border-daat-steel/30 bg-background hover:border-daat-gold hover:text-daat-gold hover:shadow-soft",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-8 py-2",
        sm: "h-9 rounded-xl px-4 text-xs",
        lg: "h-12 rounded-2xl px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    const isPremium = variant === "premium"
    
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {isPremium && (
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-sheen" />
          </span>
        )}
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
