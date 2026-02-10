"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface FloatingChatBubbleProps {
  locale: string
  onToggle: () => void
  isOpen: boolean
}

export function FloatingChatBubble({ locale, onToggle, isOpen }: FloatingChatBubbleProps) {
  const [showLabel, setShowLabel] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [nudgeShown, setNudgeShown] = useState(false)
  const [introMotion, setIntroMotion] = useState(false)

  // Initial nudge (10s label + 5s tooltip)
  useEffect(() => {
    const hasSeenNudge = sessionStorage.getItem('chat-nudge-shown')
    
    if (!hasSeenNudge && !isOpen) {
      // Show label after 10s
      const labelTimer = setTimeout(() => {
        setShowLabel(true)
        setNudgeShown(true)
        
        // Hide label after 10s
        setTimeout(() => setShowLabel(false), 10000)
      }, 10000)
      
      // Show tooltip at 11s for 5s
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true)
        setTimeout(() => setShowTooltip(false), 5000)
      }, 11000)
      
      sessionStorage.setItem('chat-nudge-shown', 'true')
      
      return () => {
        clearTimeout(labelTimer)
        clearTimeout(tooltipTimer)
      }
    }
  }, [isOpen])

  // Intro motion: only for the first 10 seconds (once per session)
  useEffect(() => {
    if (isOpen) return

    const key = "chat-intro-motion-done"
    const done = sessionStorage.getItem(key)
    if (done) return

    setIntroMotion(true)
    const t = setTimeout(() => {
      setIntroMotion(false)
      sessionStorage.setItem(key, "true")
    }, 10000)

    return () => clearTimeout(t)
  }, [isOpen])

  const labels = {
    tr: { bubble: "Canlı AI Asistan", tooltip: "Öğrenmek istediğin her şeyi sorabilirsin." },
    al: { bubble: "Asistent AI Live", tooltip: "Mund të pyesësh gjithçka që dëshiron të mësosh." },
    en: { bubble: "Live AI Assistant", tooltip: "Ask anything you want to learn." },
  }

  const label = labels[locale as keyof typeof labels] || labels.en

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 mb-[env(safe-area-inset-bottom)] mr-[env(safe-area-inset-right)]">
      {/* Label (nudge or hover) */}
      {(showLabel || (isHovered && !isOpen)) && (
        <div className="animate-fade-in bg-daat-dark dark:bg-daat-gold text-white dark:text-daat-dark px-4 py-2 rounded-full shadow-premium text-sm font-medium whitespace-nowrap">
          {label.bubble}
        </div>
      )}
      
      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <div className="absolute bottom-full right-0 mb-4 animate-fade-in">
          <div className="bg-daat-dark dark:bg-daat-gold text-white dark:text-daat-dark px-4 py-3 rounded-2xl shadow-premium-lg max-w-xs text-sm">
            {label.tooltip}
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-daat-dark dark:bg-daat-gold transform rotate-45" />
        </div>
      )}
      
      {/* Bubble */}
      <Button
        size="icon"
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "h-24 w-24 sm:h-28 sm:w-28 rounded-full transition-all duration-300",
          "bg-gradient-to-br from-daat-gold via-daat-goldLight to-daat-gold",
          "shadow-[0_10px_40px_rgba(212,175,55,0.45)] hover:shadow-[0_16px_60px_rgba(212,175,55,0.65)]",
          "hover:scale-[1.08] relative overflow-visible group",
          introMotion && "animate-float motion-reduce:animate-none",
          isHovered && "rotate-6"
        )}
        aria-label={label.bubble}
      >
        {/* Aurora orbit ring */}
        <div className="absolute -inset-3 rounded-full blur-2xl opacity-90 motion-reduce:hidden">
          <div
            className={cn(
              "absolute inset-0 rounded-full",
              (introMotion || isHovered) && "animate-orbit"
            )}
            style={{
              background:
                "conic-gradient(from 180deg, rgba(242,184,75,0.55), rgba(44,74,110,0.35), rgba(200,154,61,0.55), rgba(242,184,75,0.55))",
            }}
          />
        </div>

        {/* Soft glow base */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-daat-gold/45 to-daat-goldLight/35 blur-2xl opacity-80" />

        {/* Inner highlight */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 via-white/5 to-transparent" />

        {/* Subtle glass rim */}
        <div className="absolute inset-[2px] rounded-full ring-1 ring-white/25 ring-inset" />
        
        {/* Logo icon - Larger and better quality */}
        <div className="relative z-10 flex items-center justify-center w-full h-full p-1.5">
          <Image
            src="/images/chat-icon.png"
            alt="DAAT AI"
            width={96}
            height={96}
            className="w-full h-full object-contain scale-125 group-hover:scale-[1.35] transition-transform duration-300 drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]"
            priority
          />
        </div>
        
        {/* Online indicator with better shadow */}
        <div className="absolute top-1 right-1 z-20">
          <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-[0_2px_10px_rgba(34,197,94,0.7)] animate-pulse" />
        </div>
      </Button>
    </div>
  )
}
