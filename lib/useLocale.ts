import { useState, useEffect } from "react"
import type { Locale } from "@/lib/translations"

const LOCALE_STORAGE_KEY = "refi-locale"

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("en")

  // Load saved language preference on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null
    if (savedLocale && ["en", "es", "pt"].includes(savedLocale)) {
      setLocale(savedLocale)
    }
  }, [])

  // Save language preference when it changes
  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
  }

  return { locale, changeLocale }
}
