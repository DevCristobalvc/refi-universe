"use client"

import { useState, useEffect } from "react"
import { useTranslation, type Locale } from "@/lib/translations"
import Header from "@/components/header"
import MarqueeFooter from "@/components/marquee-footer"

export default function RoadmapPage() {
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
    setLocale(newLocale)
    localStorage.setItem("refi-locale", newLocale)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <Header locale={locale} onLanguageChange={changeLanguage} />

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-12">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.roadmap.heading}</h1>
          </div>

          {/* Roadmap Phases */}
          <div className="space-y-8">
            {/* Phase 1 */}
            <section className="border-2 border-black p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-black bg-black text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h2 className="text-lg font-bold">{t.roadmap.phase1.title}</h2>
              </div>
              <ul className="space-y-2 text-sm pl-11">
                {t.roadmap.phase1.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="opacity-40">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Phase 2 */}
            <section className="border-2 border-black p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h2 className="text-lg font-bold">{t.roadmap.phase2.title}</h2>
              </div>
              <ul className="space-y-2 text-sm pl-11">
                {t.roadmap.phase2.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="opacity-40">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Phase 3 */}
            <section className="border-2 border-black p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h2 className="text-lg font-bold">{t.roadmap.phase3.title}</h2>
              </div>
              <ul className="space-y-2 text-sm pl-11">
                {t.roadmap.phase3.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="opacity-40">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <MarqueeFooter />
    </div>
  )
}
