"use client"

import { useState, useEffect, useRef } from "react"
import { Languages, ChevronDown, Check } from "lucide-react"
import type { Locale } from "@/lib/translations"

interface LanguageSelectorProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function LanguageSelector({ locale, onLocaleChange }: LanguageSelectorProps) {
  const [showLangMenu, setShowLangMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  console.log('LanguageSelector - locale recibido:', locale)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false)
      }
    }

    if (showLangMenu) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showLangMenu])

  const handleLocaleChange = (newLocale: Locale) => {
    console.log('LanguageSelector - handleLocaleChange llamado con:', newLocale)
    console.log('LanguageSelector - locale actual antes del cambio:', locale)
    onLocaleChange(newLocale)
    setShowLangMenu(false)
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setShowLangMenu(!showLangMenu)
        }}
        className="hover:bg-black/5 transition-colors flex items-center gap-1 border border-black/20 px-2 py-1 text-[9px] md:text-xs"
        type="button"
      >
        <Languages className="w-3 h-3 md:w-4 md:h-4" />
        <span className="uppercase hidden sm:inline">{locale}</span>
        <ChevronDown className="w-3 h-3" />
      </button>
      {showLangMenu && (
        <div className="absolute right-0 mt-1 bg-white border border-black shadow-sm overflow-hidden min-w-[100px] z-50">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleLocaleChange("en")
            }}
            className="w-full px-3 py-2 text-left hover:bg-black/5 flex items-center justify-between text-xs"
            type="button"
          >
            <span>English</span>
            {locale === "en" && <Check className="w-3 h-3" />}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleLocaleChange("es")
            }}
            className="w-full px-3 py-2 text-left hover:bg-black/5 flex items-center justify-between text-xs"
            type="button"
          >
            <span>Español</span>
            {locale === "es" && <Check className="w-3 h-3" />}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleLocaleChange("pt")
            }}
            className="w-full px-3 py-2 text-left hover:bg-black/5 flex items-center justify-between text-xs"
            type="button"
          >
            <span>Português</span>
            {locale === "pt" && <Check className="w-3 h-3" />}
          </button>
        </div>
      )}
    </div>
  )
}
