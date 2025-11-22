import { useState, useEffect } from "react"
import type { Locale } from "@/lib/translations"

const LOCALE_STORAGE_KEY = "refi-locale"

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("es")
  const [isLoaded, setIsLoaded] = useState(false)

  // Load saved language preference on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null
      if (savedLocale && ["en", "es", "pt"].includes(savedLocale)) {
        setLocale(savedLocale)
      }
      setIsLoaded(true)
    }
  }, [])

  // Save language preference when it changes
  const changeLocale = (newLocale: Locale) => {
    console.log('useLocale - Cambiando de', locale, 'a', newLocale)
    if (typeof window !== "undefined") {
      setLocale(newLocale)
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
      console.log('useLocale - Guardado en localStorage:', newLocale)
    }
  }

  return { locale, changeLocale, isLoaded }
}
