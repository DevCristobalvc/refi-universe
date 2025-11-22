"use client"

import { useState, useEffect } from "react"
import { useTranslation, type Locale } from "@/lib/translations"
import Header from "@/components/header"
import MarqueeFooter from "@/components/marquee-footer"

export default function HistoryPage() {
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
            <div className="flex items-center gap-3">
              <div className="text-2xl">🜃</div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.whitepaper.modules.history}</h1>
            </div>
          </div>

          {/* Use Cases */}
          <section>
            <h2 className="text-sm font-bold tracking-wide uppercase mb-6">{t.cases.heading}</h2>
            <div className="space-y-6">
              <div className="border-2 border-black p-6 space-y-3">
                <div className="text-xs opacity-60 font-bold tracking-widest">{t.cases.a.label}</div>
                <div className="text-xl font-bold">{t.cases.a.title}</div>
                <p className="text-sm leading-relaxed">{t.cases.a.desc}</p>
                <div className="text-xs font-bold pt-2 border-t border-black/20">{t.cases.a.footer}</div>
              </div>

              <div className="border-2 border-black p-6 space-y-3">
                <div className="text-xs opacity-60 font-bold tracking-widest">{t.cases.b.label}</div>
                <div className="text-xl font-bold">{t.cases.b.title}</div>
                <p className="text-sm leading-relaxed">{t.cases.b.desc}</p>
                <div className="text-xs font-bold pt-2 border-t border-black/20">{t.cases.b.footer}</div>
              </div>

              <div className="border-2 border-black p-6 space-y-3">
                <div className="text-xs opacity-60 font-bold tracking-widest">{t.cases.c.label}</div>
                <div className="text-xl font-bold">{t.cases.c.title}</div>
                <p className="text-sm leading-relaxed">{t.cases.c.desc}</p>
                <div className="text-xs font-bold pt-2 border-t border-black/20">{t.cases.c.footer}</div>
              </div>
            </div>
          </section>

          {/* Inspiration References */}
          <section className="border-t border-black/20 pt-8">
            <h2 className="text-sm font-bold tracking-wide uppercase mb-4">Inspiration References</h2>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <a
                href="https://ultravioletadao.xyz/"
                target="_blank"
                rel="noreferrer noopener"
                className="border border-black/20 p-3 hover:bg-black/5 transition-colors"
              >
                ultravioleta DAO
              </a>
              <a
                href="https://rekt.news"
                target="_blank"
                rel="noreferrer noopener"
                className="border border-black/20 p-3 hover:bg-black/5 transition-colors"
              >
                rekt.news
              </a>
            </div>
          </section>
        </div>
      </main>

      <MarqueeFooter />
    </div>
  )
}
