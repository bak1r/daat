"use client"

import { useState } from "react"
import { FloatingChatBubble } from "./FloatingChatBubble"
import { ChatPanel } from "./ChatPanel"

interface ChatWidgetProps {
  locale: string
}

export function ChatWidget({ locale }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {!isOpen && (
        <FloatingChatBubble
          locale={locale}
          onToggle={() => setIsOpen(true)}
          isOpen={isOpen}
        />
      )}
      
      {isOpen && (
        <ChatPanel
          locale={locale}
          onClose={() => setIsOpen(false)}
          onMinimize={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
