"use client"

import { useState, useEffect } from "react"
import { useTranslation, type Locale } from "@/lib/translations"
import Header from "@/components/header"
import MarqueeFooter from "@/components/marquee-footer"

export default function ContextPage() {
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
              <div className="text-2xl">🜂</div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.whitepaper.modules.context}</h1>
            </div>
          </div>

          {/* The Event */}
          <section className="space-y-4">
            <div className="border-2 border-black bg-black text-white px-4 py-3">
              <div className="text-xs tracking-widest mb-1">DEVCONNECT BUENOS AIRES // NOV 15, 2025</div>
              <div className="text-lg font-bold">{t.hero.title3}</div>
            </div>
            <p className="text-sm leading-relaxed">{t.hero.subtitle}</p>
          </section>

          {/* The Crisis */}
          <section className="space-y-4">
            <h2 className="text-sm font-bold tracking-wide uppercase border-b border-black/20 pb-2">The Crisis</h2>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>{t.critical.title}</p>
              <p>{t.critical.description}</p>
              <p className="font-bold border-l-4 border-black pl-4">{t.critical.highlight}</p>
            </div>
          </section>

          {/* Alert Banners */}
          <section className="space-y-3">
            <div className="border-2 border-black bg-black text-white px-4 py-3 text-center">
              <div className="text-sm md:text-base font-bold">{t.whitepaper.alerts.defi}</div>
            </div>
            <div className="border-2 border-black px-4 py-3 text-center">
              <div className="text-sm md:text-base font-bold">{t.whitepaper.alerts.refi}</div>
            </div>
          </section>

          {/* Manifesto */}
          <section className="space-y-4 border-t border-black/20 pt-8">
            <h2 className="text-sm font-bold tracking-wide uppercase">Manifesto</h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>{t.whitepaper.manifesto.p1}</p>
              <p>{t.whitepaper.manifesto.p2}</p>
              <p className="font-bold">{t.whitepaper.manifesto.p3}</p>
            </div>
          </section>

          {/* Carbon Footprint Reality */}
          <section className="border border-black/20 p-4 space-y-3">
            <h2 className="text-sm font-bold tracking-wide uppercase">Carbon Footprint</h2>
            <p className="text-xs opacity-60">
              The reality of waste pollution destroying our planet. This is what we're fighting against.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-video bg-black/5 border border-black/10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&q=80"
                  alt="Waste pollution and environmental damage"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-video bg-black/5 border border-black/10 overflow-hidden">
                <img
                  src="https://www.greenpeace.org/static/planet4-colombia-stateless/2023/05/b0084200-gp1sxbaq_medium_res_with_credit_line.jpg"
                  alt="Environmental impact - Greenpeace Colombia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <MarqueeFooter />
    </div>
  )
}
