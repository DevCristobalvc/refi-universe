"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import type { Locale } from "@/lib/translations"

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

const LOCALE_STORAGE_KEY = "refi-locale"

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null
      if (savedLocale && ["en", "es", "pt"].includes(savedLocale)) {
        console.log('LocaleProvider - Cargando idioma guardado:', savedLocale)
        setLocaleState(savedLocale)
      }
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    console.log('LocaleProvider - Cambiando idioma de', locale, 'a', newLocale)
    setLocaleState(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
      console.log('LocaleProvider - Guardado en localStorage:', newLocale)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocaleContext() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocaleContext debe usarse dentro de LocaleProvider")
  }
  return context
}
