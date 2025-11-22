"use client"

import { useTranslation } from "@/lib/translations"
import { useLocale } from "@/lib/useLocale"
import { LanguageSelector } from "@/components/language-selector"
import Link from "next/link"

export default function Home() {
  const { locale, changeLocale } = useLocale()
  const t = useTranslation(locale)

  return (
    <div className="h-screen bg-white text-black font-mono flex flex-col overflow-hidden">
      {/* Header with language selector */}
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

            <LanguageSelector locale={locale} onLocaleChange={changeLocale} />
          </div>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 md:px-6 overflow-hidden">
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

      <footer className="border-t border-black bg-black text-white py-3 md:py-4 flex-shrink-0 w-full overflow-hidden relative">
        <div className="absolute inset-0 flex items-center">
          <div className="flex animate-marquee-slide">
            <div className="flex whitespace-nowrap">
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">ETH CALI</span>
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">ETH COLOMBIA</span>
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">UVD</span>
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">AFRICA</span>
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">OG</span>
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">CYPHER</span>
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">ALERT</span>
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">REKT</span>
            </div>
            <div className="flex whitespace-nowrap" aria-hidden="true">
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">ETH CALI</span>
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">ETH COLOMBIA</span>
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">UVD</span>
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">AFRICA</span>
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">OG</span>
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">CYPHER</span>
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">ALERT</span>
              <span className="inline-block px-6 md:px-10 lg:px-12 text-[10px] md:text-xs lg:text-sm font-bold tracking-wider">REKT</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
