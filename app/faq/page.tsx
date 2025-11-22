"use client"

import { useState, useEffect } from "react"
import { Plus, Minus } from "lucide-react"
import { useTranslation, type Locale } from "@/lib/translations"
import Header from "@/components/header"
import MarqueeFooter from "@/components/marquee-footer"

export default function FAQPage() {
  const [locale, setLocale] = useState<Locale>("es")
  const [mounted, setMounted] = useState(false)
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)
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

  const faqs = [
    { q: t.faq.q1.q, a: t.faq.q1.a },
    { q: t.faq.q2.q, a: t.faq.q2.a },
    { q: t.faq.q3.q, a: t.faq.q3.a },
    { q: t.faq.q4.q, a: t.faq.q4.a },
  ]

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <Header locale={locale} onLanguageChange={changeLanguage} />

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-12">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.faq.heading}</h1>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border-2 border-black">
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full p-4 flex items-center justify-between hover:bg-black/5 transition-colors text-left"
                >
                  <span className="font-bold text-sm md:text-base">{faq.q}</span>
                  {openQuestion === index ? (
                    <Minus className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 flex-shrink-0" />
                  )}
                </button>
                {openQuestion === index && (
                  <div className="px-4 pb-4 text-sm leading-relaxed border-t border-black/20 pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <MarqueeFooter />
    </div>
  )
}
