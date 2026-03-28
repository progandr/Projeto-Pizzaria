"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = [headlineRef.current, subRef.current, ctaRef.current]
    elements.forEach((el, i) => {
      if (!el) return
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      setTimeout(() => {
        if (!el) return
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }, 200 + i * 200)
    })
  }, [])

  const scrollToMenu = () => {
    const el = document.querySelector("#cardapio")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Seção inicial"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-pizza.jpg"
          alt="Pizza artesanal Bella Napoli com ingredientes frescos"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-brand-dark/60" />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-transparent to-brand-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-4">
          <span className="inline-block text-brand-gold font-sans text-xs md:text-sm uppercase tracking-[0.3em] font-semibold">
            Dal 1998 • Napoli, Italia
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-shadow text-balance"
        >
          A verdadeira pizza
          <br />
          <span className="text-brand-gold">italiana</span> na sua mesa
        </h1>

        <p
          ref={subRef}
          className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed font-sans text-shadow-sm text-pretty"
        >
          Ingredientes importados, massa artesanal de fermentação lenta e forno
          a lenha. Cada fatia conta uma história de tradição e paixão.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red hover:bg-brand-red-light text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-brand-red/40 hover:-translate-y-1 min-w-[200px]"
            aria-label="Fazer pedido via WhatsApp"
          >
            Pedir Agora
          </a>
          <button
            onClick={scrollToMenu}
            className="border-2 border-white/60 hover:border-brand-gold text-white hover:text-brand-gold font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 min-w-[200px]"
            aria-label="Ver o cardápio"
          >
            Ver Cardápio
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "+25", label: "Anos de tradição" },
            { value: "+40", label: "Sabores únicos" },
            { value: "4.9★", label: "Avaliação média" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-2xl md:text-3xl font-bold text-brand-gold">
                {stat.value}
              </div>
              <div className="text-white/70 text-xs md:text-sm mt-1 font-sans leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-brand-gold transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
