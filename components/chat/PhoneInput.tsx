"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Loader2 } from "lucide-react"

interface PhoneInputProps {
  onSubmit: (phone: string) => void
  locale: string
  isLoading?: boolean
}

export function PhoneInput({ onSubmit, locale, isLoading = false }: PhoneInputProps) {
  const [phone, setPhone] = useState("")
  const [error, setError] = useState("")

  const validatePhone = (phone: string): boolean => {
    // Albanian phone format: +355 XX XXX XXXX or 06X XXX XXXX
    const albanianPattern = /^(\+355|0)?[67]\d{8}$/
    const cleanPhone = phone.replace(/\s/g, '')
    return albanianPattern.test(cleanPhone)
  }

  const handleSubmit = () => {
    if (!validatePhone(phone)) {
      const errors = {
        tr: "Geçerli bir telefon numarası girin (örn: +355 69 378 8480)",
        al: "Vendosni një numër telefoni të vlefshëm (p.sh.: +355 69 378 8480)",
        en: "Enter a valid phone number (e.g.: +355 69 378 8480)",
      }
      setError(errors[locale as keyof typeof errors] || errors.en)
      return
    }
    
    onSubmit(phone)
  }

  const labels = {
    tr: { 
      placeholder: "Telefon numaranız", 
      button: "Gönder",
      privacy: "Numaranız sadece iletişim için kullanılır (KVKK uyumlu)"
    },
    al: { 
      placeholder: "Numri juaj i telefonit", 
      button: "Dërgo",
      privacy: "Numri juaj përdoret vetëm për kontakt (GDPR konforme)"
    },
    en: { 
      placeholder: "Your phone number", 
      button: "Submit",
      privacy: "Your number is only used for contact (GDPR compliant)"
    },
  }
  
  const label = labels[locale as keyof typeof labels] || labels.en

  return (
    <div className="space-y-3 p-4 rounded-2xl bg-daat-gold/5 border border-daat-gold/20">
      <input
        type="tel"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value)
          setError("")
        }}
        placeholder={label.placeholder}
        className="w-full px-4 py-2 rounded-xl border border-daat-gold/20 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-daat-gold text-sm"
        disabled={isLoading}
      />
      {error && <p className="text-xs text-destructive animate-fade-in">{error}</p>}
      <p className="text-xs text-foreground/50 leading-relaxed">{label.privacy}</p>
      <Button
        variant="premium"
        onClick={handleSubmit}
        disabled={isLoading || !phone.trim()}
        className="w-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {label.button}
          </>
        ) : (
          <>
            <Check className="mr-2 h-4 w-4" />
            {label.button}
          </>
        )}
      </Button>
    </div>
  )
}
