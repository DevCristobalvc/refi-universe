"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { useTranslation, type Locale } from "@/lib/translations"
import { useLocale } from "@/lib/useLocale"
import { LanguageSelector } from "@/components/language-selector"
import Link from "next/link"

export default function UXPage() {
  const { locale, changeLocale } = useLocale()
  const t = useTranslation(locale)

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <header className="border-b border-black/20 bg-white sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-4 h-4" />
              <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold text-xs">RP</div>
              <span className="font-bold text-sm tracking-tight">ReFi_Universe_Protocol</span>
            </Link>

            <LanguageSelector locale={locale} onLocaleChange={changeLocale} />
          </div>
        </nav>
      </header>

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

      {/* Footer */}
      <footer className="border-t border-black bg-black text-white py-3 px-4 mt-12">
        <p className="text-[10px] opacity-60 text-center">{t.whitepaper.footer.message}</p>
      </footer>
    </div>
  )
}
