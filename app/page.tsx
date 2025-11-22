"use client"

import { useState, useEffect } from "react"
import { useTranslation, type Locale } from "@/lib/translations"
import Header from "@/components/header"
import MarqueeFooter from "@/components/marquee-footer"
import Link from "next/link"

export default function Home() {
  const [locale, setLocale] = useState<Locale>("es")
  const [mounted, setMounted] = useState(false)
  const t = useTranslation(locale)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("refi-locale") as Locale | null
    if (saved && ["en", "es", "pt"].includes(saved)) {
      setLocale(saved)
    }
  }, [])

  const changeLanguage = (newLocale: Locale) => {
    console.log('Cambiando idioma a:', newLocale)
    setLocale(newLocale)
    localStorage.setItem("refi-locale", newLocale)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white text-black font-mono flex flex-col">
      <Header locale={locale} onLanguageChange={changeLanguage} />

      <main className="flex-1 flex items-center justify-center px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-5xl w-full space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
          {/* Title Block */}
          <div className="space-y-2 md:space-y-3 text-center">
            <h1 className="text-base sm:text-xl md:text-2xl lg:text-4xl font-bold tracking-tight leading-tight">
              {t.home.title}
            </h1>
            <p className="text-[9px] sm:text-[10px] md:text-xs leading-relaxed max-w-3xl mx-auto opacity-70">
              {t.home.tagline}
            </p>
          </div>

          <div className="border-2 border-black p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3 md:space-y-4">
            {/* Problem */}
            <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
              <h2 className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wide">
                {t.home.problem.title}
              </h2>
              <p className="text-[9px] sm:text-[10px] md:text-xs leading-relaxed opacity-80">{t.home.problem.desc}</p>
            </div>

            <div className="border-t border-black/20" />

            {/* Solution */}
            <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
              <h2 className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wide">
                {t.home.solution.title}
              </h2>
              <p className="text-[9px] sm:text-[10px] md:text-xs leading-relaxed opacity-80">{t.home.solution.desc}</p>
              <p className="text-[9px] sm:text-[10px] md:text-xs italic opacity-60 pt-1 border-l-2 border-black pl-2">
                "Like Pokémon Go — but instead of catching Pokémon, you collect trash. Save the world. Have fun."
              </p>
            </div>

            <div className="border-t border-black/20" />

            {/* Model */}
            <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
              <h2 className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wide">
                {t.home.model.title}
              </h2>
              <p className="text-[9px] sm:text-[10px] md:text-xs leading-relaxed opacity-80">{t.home.model.desc}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] md:text-xs">
            <Link
              href="/tech"
              className="border-2 border-black p-2 sm:p-2.5 md:p-3 hover:bg-black hover:text-white transition-all text-center font-bold"
            >
              {t.whitepaper.modules.tech}
            </Link>

            <Link
              href="/context"
              className="border-2 border-black p-2 sm:p-2.5 md:p-3 hover:bg-black hover:text-white transition-all text-center font-bold"
            >
              {t.whitepaper.modules.context}
            </Link>

            <Link
              href="/history"
              className="border-2 border-black p-2 sm:p-2.5 md:p-3 hover:bg-black hover:text-white transition-all text-center font-bold"
            >
              {t.whitepaper.modules.history}
            </Link>

            <Link
              href="/ux"
              className="border-2 border-black p-2 sm:p-2.5 md:p-3 hover:bg-black hover:text-white transition-all text-center font-bold"
            >
              {t.whitepaper.modules.ux}
            </Link>

            <Link
              href="/roadmap"
              className="border-2 border-black p-2 sm:p-2.5 md:p-3 hover:bg-black hover:text-white transition-all text-center font-bold"
            >
              {t.nav.roadmap}
            </Link>

            <Link
              href="/faq"
              className="border-2 border-black p-2 sm:p-2.5 md:p-3 hover:bg-black hover:text-white transition-all text-center font-bold"
            >
              {t.nav.faq}
            </Link>
          </div>
        </div>
      </main>

      <MarqueeFooter />
    </div>
  )
}
