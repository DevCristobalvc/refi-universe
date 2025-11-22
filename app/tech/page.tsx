"use client"

import { useState, useEffect } from "react"
import { ExternalLink } from "lucide-react"
import { useTranslation, type Locale } from "@/lib/translations"
import Header from "@/components/header"
import MarqueeFooter from "@/components/marquee-footer"

export default function TechPage() {
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
              <div className="text-2xl">🜁</div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.whitepaper.modules.tech}</h1>
            </div>
            <div className="border-t border-black/20 pt-4">
              <p className="text-sm opacity-60">{t.whitepaper.powered.heading}</p>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <section>
            <h2 className="text-sm font-bold tracking-wide uppercase mb-4">{t.tech.heading}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-black p-6 space-y-2">
                <div className="font-bold text-lg">{t.tech.items.zk.title}</div>
                <div className="text-sm opacity-60">{t.tech.items.zk.desc}</div>
                <p className="text-xs leading-relaxed pt-2">
                  Zero-Knowledge STARKs provide cryptographic privacy. Prove you cleaned without revealing your
                  identity. Mathematical certainty without surveillance.
                </p>
              </div>

              <div className="border-2 border-black p-6 space-y-2">
                <div className="font-bold text-lg">{t.tech.items.x402.title}</div>
                <div className="text-sm opacity-60">{t.tech.items.x402.desc}</div>
                <p className="text-xs leading-relaxed pt-2">
                  x402 is the standard for AI agent work validation. Autonomous agents verify physical impact against
                  decentralized data sources.
                </p>
              </div>

              <div className="border-2 border-black p-6 space-y-2">
                <div className="font-bold text-lg">{t.tech.items.erc.title}</div>
                <div className="text-sm opacity-60">{t.tech.items.erc.desc}</div>
                <p className="text-xs leading-relaxed pt-2">
                  ERC-8002 enables hybrid on-chain/off-chain AI logic. Smart contracts that think. Validators that never
                  sleep.
                </p>
              </div>

              <div className="border-2 border-black p-6 space-y-2">
                <div className="font-bold text-lg">{t.tech.items.circular.title}</div>
                <div className="text-sm opacity-60">{t.tech.items.circular.desc}</div>
                <p className="text-xs leading-relaxed pt-2">
                  Real-world impact generates on-chain value. Corporations buy verified certificates. You get rewards.
                  Everyone wins.
                </p>
              </div>
            </div>
          </section>

          {/* External Links */}
          <section>
            <h2 className="text-sm font-bold tracking-wide uppercase mb-4">Technical References</h2>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <a
                href="https://superintelligence.io"
                target="_blank"
                rel="noreferrer noopener"
                className="border border-black/20 p-3 hover:bg-black/5 transition-colors flex items-center justify-between"
              >
                <span>superintelligence.io</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://x402.org"
                target="_blank"
                rel="noreferrer noopener"
                className="border border-black/20 p-3 hover:bg-black/5 transition-colors flex items-center justify-between"
              >
                <span>x402.org</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <div className="border border-black/20 p-3">
                <span>EIP-8004</span>
              </div>
              <div className="border border-black/20 p-3">
                <span>zkpJWT-core</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <MarqueeFooter />
    </div>
  )
}
