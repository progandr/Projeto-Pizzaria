"use client"

import type React from "react"
import { Instagram, Facebook, Youtube } from "lucide-react"

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
]

const socials = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/bellanapoli" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/bellanapoli" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/bellanapoli" },
]

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-brand-dark border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-white">Bella Napoli</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-gold font-sans mt-0.5">
                Pizzaria
              </span>
            </div>
            <p className="text-white/60 text-sm mt-4 max-w-xs leading-relaxed">
              Desde 1998, trazendo a autêntica tradição napolitana ao seu paladar. Ingredientes
              frescos, forno a lenha e muito amor em cada pizza.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-brand-red rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label={`Seguir no ${s.name}`}
                  >
                    <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Links rápidos">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Links Rápidos
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/60 hover:text-brand-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Contato
            </h3>
            <address className="not-italic flex flex-col gap-2.5 text-white/60 text-sm">
              <span>Rua Nápoles, 498 — Vila Italiana</span>
              <span>São Paulo — SP</span>
              <a
                href="tel:+5511999999999"
                className="hover:text-brand-gold transition-colors"
                aria-label="Ligar: (11) 99999-9999"
              >
                (11) 99999-9999
              </a>
              <a
                href="mailto:contato@bellanapoli.com.br"
                className="hover:text-brand-gold transition-colors"
                aria-label="Enviar e-mail"
              >
                contato@bellanapoli.com.br
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Bella Napoli Pizzaria. Todos os direitos reservados.
          </p>
          <p>
            Feito com paixão e farinha italiana.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-brand-green hover:opacity-90 rounded-full flex items-center justify-center shadow-xl shadow-black/30 transition-all duration-200 hover:-translate-y-1 z-40"
        aria-label="Fazer pedido pelo WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white"
          aria-hidden="true"
          role="img"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </footer>
  )
}
