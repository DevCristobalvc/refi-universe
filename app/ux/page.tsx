"use client"

import { useState, useEffect } from "react"
import { useTranslation, type Locale } from "@/lib/translations"
import Header from "@/components/header"
import MarqueeFooter from "@/components/marquee-footer"

export default function UXPage() {
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
              <div className="text-2xl">🜄</div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.whitepaper.modules.ux}</h1>
            </div>
          </div>

          {/* How It Works */}
          <section>
            <h2 className="text-sm font-bold tracking-wide uppercase mb-6">{t.howto.heading}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-black p-6 space-y-2">
                <div className="text-3xl font-bold">01</div>
                <div className="font-bold text-lg">{t.howto.step1.title}</div>
                <p className="text-sm leading-relaxed">{t.howto.step1.desc}</p>
              </div>

              <div className="border-2 border-black p-6 space-y-2">
                <div className="text-3xl font-bold">02</div>
                <div className="font-bold text-lg">{t.howto.step2.title}</div>
                <p className="text-sm leading-relaxed">{t.howto.step2.desc}</p>
              </div>

              <div className="border-2 border-black p-6 space-y-2">
                <div className="text-3xl font-bold">03</div>
                <div className="font-bold text-lg">{t.howto.step3.title}</div>
                <p className="text-sm leading-relaxed">{t.howto.step3.desc}</p>
              </div>

              <div className="border-2 border-black p-6 space-y-2">
                <div className="text-3xl font-bold">04</div>
                <div className="font-bold text-lg">{t.howto.step4.title}</div>
                <p className="text-sm leading-relaxed">{t.howto.step4.desc}</p>
              </div>
            </div>
          </section>

          {/* Core Features */}
          <section className="border-t border-black/20 pt-8">
            <h2 className="text-sm font-bold tracking-wide uppercase mb-6">Core Features</h2>
            <div className="space-y-4">
              <div className="border border-black/20 p-4 space-y-2">
                <div className="font-bold">{t.solution.anonymous.title}</div>
                <p className="text-sm opacity-60">{t.solution.anonymous.desc}</p>
              </div>

              <div className="border border-black/20 p-4 space-y-2">
                <div className="font-bold">{t.solution.ai.title}</div>
                <p className="text-sm opacity-60">{t.solution.ai.desc}</p>
              </div>

              <div className="border border-black/20 p-4 space-y-2">
                <div className="font-bold">{t.solution.gasless.title}</div>
                <p className="text-sm opacity-60">{t.solution.gasless.desc}</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="border-2 border-black bg-black text-white p-8 text-center space-y-4">
            <div className="text-xl md:text-2xl font-bold tracking-tight">{t.cta.button}</div>
            <p className="text-sm opacity-80">{t.cta.subtitle}</p>
          </section>
        </div>
      </main>

      <MarqueeFooter />
    </div>
  )
}
