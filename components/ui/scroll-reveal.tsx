"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 20,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getTransform = () => {
    if (isVisible) return "translate(0, 0)"
    
    switch (direction) {
      case "up":
        return `translate(0, ${distance}px)`
      case "down":
        return `translate(0, -${distance}px)`
      case "left":
        return `translate(${distance}px, 0)`
      case "right":
        return `translate(-${distance}px, 0)`
      default:
        return `translate(0, ${distance}px)`
    }
  }

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700 ease-out", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        filter: isVisible ? "blur(0px)" : "blur(4px)",
      }}
    >
      {children}
    </div>
  )
}
