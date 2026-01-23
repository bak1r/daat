import { cn } from "@/lib/utils"

interface DAATLogoProps {
  className?: string
  showTagline?: boolean
  size?: "sm" | "md" | "lg"
}

export function DAATLogo({ 
  className, 
  showTagline = false,
  size = "md" 
}: DAATLogoProps) {
  const sizeClasses = {
    sm: "h-16 md:h-20",
    md: "h-20 md:h-28",
    lg: "h-24 md:h-32",
  }

  return (
    <div className={cn("flex items-center overflow-hidden", className)}>
      <img
        src="/images/DAAT.png"
        alt="DAAT Logo"
        className={cn(
          "object-contain object-center",
          "w-auto max-w-full",
          sizeClasses[size]
        )}
        style={{
          imageRendering: "high-quality",
        }}
      />
    </div>
  )
}
