"use client"

import { useState } from "react"
import Link from "next/link"
import { Languages, ChevronDown, Check } from "lucide-react"
import type { Locale } from "@/lib/translations"

interface HeaderProps {
  locale: Locale
  onLanguageChange: (locale: Locale) => void
}

export default function Header({ locale, onLanguageChange }: HeaderProps) {
  const [showLangMenu, setShowLangMenu] = useState(false)

  const changeLanguage = (newLocale: Locale) => {
    onLanguageChange(newLocale)
    setShowLangMenu(false)
  }

  return (
    <header className="border-b border-black/10 bg-white flex-shrink-0">
      <nav className="container mx-auto px-3 py-2 md:px-6 md:py-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[8px] md:text-[10px] opacity-40 font-light tracking-wider uppercase">
              WHITE PAPER — COMMON GOODS — OPEN SOURCE POWERED
            </span>
            <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <div className="w-5 h-5 md:w-8 md:h-8 border-2 border-black flex items-center justify-center font-bold text-[9px] md:text-xs">
                🌎
              </div>
              <span className="font-bold text-[11px] md:text-sm tracking-tight">ReFiUP</span>
            </Link>
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="hover:bg-black/5 transition-colors flex items-center gap-1 border border-black/20 px-2 py-1 text-[9px] md:text-xs"
              type="button"
            >
              <Languages className="w-3 h-3 md:w-4 md:h-4" />
              <span className="uppercase hidden sm:inline">{locale}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {showLangMenu && (
              <div className="absolute right-0 mt-1 bg-white border border-black shadow-sm overflow-hidden min-w-[120px] z-50">
                <button
                  onClick={() => changeLanguage("en")}
                  className="w-full px-3 py-2 text-left hover:bg-black/5 flex items-center justify-between text-xs"
                  type="button"
                >
                  <span>English</span>
                  {locale === "en" && <Check className="w-3 h-3" />}
                </button>
                <button
                  onClick={() => changeLanguage("es")}
                  className="w-full px-3 py-2 text-left hover:bg-black/5 flex items-center justify-between text-xs"
                  type="button"
                >
                  <span>Español</span>
                  {locale === "es" && <Check className="w-3 h-3" />}
                </button>
                <button
                  onClick={() => changeLanguage("pt")}
                  className="w-full px-3 py-2 text-left hover:bg-black/5 flex items-center justify-between text-xs"
                  type="button"
                >
                  <span>Português</span>
                  {locale === "pt" && <Check className="w-3 h-3" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
