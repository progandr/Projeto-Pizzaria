"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="#inicio"
            onClick={(e) => handleNavClick(e, "#inicio")}
            className="flex items-center gap-2 group"
            aria-label="Bella Napoli Pizzaria - Início"
          >
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl md:text-2xl font-bold text-white tracking-wide">
                Bella Napoli
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-brand-gold font-sans font-medium">
                Pizzaria
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-white/80 hover:text-brand-gold transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/30 hover:-translate-y-0.5"
              aria-label="Pedir agora via WhatsApp"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Pedir Agora
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-dark/98 backdrop-blur-sm border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/90 hover:text-brand-gold py-3 px-4 rounded-lg hover:bg-white/5 transition-colors text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 bg-brand-red text-white font-semibold py-3 px-6 rounded-full"
              aria-label="Pedir agora via WhatsApp"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Pedir Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
