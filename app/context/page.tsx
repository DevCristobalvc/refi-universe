"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { useTranslation, type Locale } from "@/lib/translations"
import { useLocale } from "@/lib/useLocale"
import { LanguageSelector } from "@/components/language-selector"
import Link from "next/link"

export default function ContextPage() {
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

          {/* Inspiration Video */}
          <section className="border border-black/20 p-4 space-y-3">
            <h2 className="text-sm font-bold tracking-wide uppercase">{t.whitepaper.inspiration.heading}</h2>
            <p className="text-xs opacity-60">{t.whitepaper.inspiration.video}</p>
            <div className="aspect-video bg-black/5 flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/3bEpfzz_m94?start=757"
                title="Hombre en África"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
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
