"use client"

import { useState, useRef, useEffect } from "react"
import { X, Minimize2, Send, Loader2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface ChatPanelProps {
  locale: string
  onClose: () => void
  onMinimize: () => void
}

export function ChatPanel({ locale, onClose, onMinimize }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Welcome message
  useEffect(() => {
    const welcomeMessages = {
      tr: "Merhaba! Ben DAAT Albania'nın AI asistanıyım. Hizmetlerimiz, çalışma sürecimiz, fiyatlandırma yaklaşımımız veya ekibimiz hakkında sorularını yanıtlayabilirim.",
      al: "Përshëndetje! Jam asistenti AI i DAAT Albania. Mund t'ju ndihmoj me shërbimet, procesin e punës, qasjen e çmimeve ose ekipin tonë.",
      en: "Hello! I'm DAAT Albania’s AI assistant. I can help with our services, delivery process, pricing approach, or our team.",
    }
    
    setMessages([{
      role: "assistant",
      content: welcomeMessages[locale as keyof typeof welcomeMessages] || welcomeMessages.en,
      timestamp: new Date(),
    }])
    
    // Focus input after mount
    setTimeout(() => inputRef.current?.focus(), 100)
  }, [locale])

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return
    
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          locale,
          conversationHistory: messages.map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })
      
      const data = await response.json()
      
      if (data.success && data.message) {
        setMessages(prev => [...prev, {
          role: "assistant",
          content: data.message,
          timestamp: new Date(),
        }])
      } else if (data.error) {
        setMessages(prev => [...prev, {
          role: "assistant",
          content: data.error,
          timestamp: new Date(),
        }])
      }
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessages = {
        tr: "Bir hata oluştu. Lütfen tekrar deneyin.",
        al: "Ndodhi një gabim. Ju lutemi provoni përsëri.",
        en: "An error occurred. Please try again.",
      }
      setMessages(prev => [...prev, {
        role: "assistant",
        content: errorMessages[locale as keyof typeof errorMessages] || errorMessages.en,
        timestamp: new Date(),
      }])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const labels = {
    tr: { title: "Canlı AI Asistan", placeholder: "Mesaj yaz...", send: "Gönder", online: "Online" },
    al: { title: "Asistent AI Live", placeholder: "Shkruaj mesazh...", send: "Dërgo", online: "Online" },
    en: { title: "Live AI Assistant", placeholder: "Type a message...", send: "Send", online: "Online" },
  }
  
  const label = labels[locale as keyof typeof labels] || labels.en

  return (
    <Card
      variant="glass"
      className={cn(
        "fixed z-50 flex flex-col animate-fade-in",
        "shadow-[0_20px_60px_rgba(0,0,0,0.3)] border-2 border-daat-gold/20",
        // Desktop: bottom-right positioned
        "bottom-4 right-4 sm:bottom-6 sm:right-6 w-[380px] h-[600px] rounded-3xl",
        // Mobile: fullscreen on very small screens
        "max-sm:inset-0 max-sm:w-full max-sm:h-full max-sm:rounded-none"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-daat-gold/20 bg-gradient-to-r from-daat-dark/5 to-daat-gold/5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-daat-gold via-daat-goldLight to-daat-gold flex items-center justify-center shadow-[0_4px_16px_rgba(212,175,55,0.4)] p-2.5">
              <Image
                src="/images/chat-icon.png"
                alt="DAAT AI"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Online indicator */}
            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white shadow-[0_2px_8px_rgba(34,197,94,0.6)] animate-pulse" />
          </div>
          <div>
            <h3 className="font-bold text-sm">{label.title}</h3>
            <p className="text-xs text-green-500 font-medium">{label.online}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMinimize}
            className="h-8 w-8 hover:bg-daat-gold/10"
            aria-label="Minimize chat"
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 hover:bg-daat-gold/10"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              "flex animate-fade-in",
              msg.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                msg.role === "user"
                  ? "bg-gradient-to-br from-daat-gold to-daat-goldLight text-daat-dark shadow-lg"
                  : "bg-muted/50 backdrop-blur-sm text-foreground border border-daat-gold/10"
              )}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-muted/50 backdrop-blur-sm rounded-2xl px-4 py-3 border border-daat-gold/10">
              <Loader2 className="h-4 w-4 animate-spin text-daat-gold" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-daat-gold/20 bg-gradient-to-r from-daat-dark/5 to-daat-gold/5">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={label.placeholder}
            className="flex-1 px-4 py-2 rounded-xl border border-daat-gold/20 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-daat-gold transition-all text-sm"
            disabled={isLoading}
            aria-label={label.placeholder}
          />
          <Button
            variant="premium"
            size="icon"
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className="h-10 w-10"
            aria-label={label.send}
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </Card>
  )
}
