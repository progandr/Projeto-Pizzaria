"use client"

import { Clock, Tag, Truck } from "lucide-react"

const promos = [
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "Em pedidos acima de R$ 60 no raio de 5km",
    badge: "Sempre",
    color: "bg-brand-green",
  },
  {
    icon: Tag,
    title: "Combo Segunda",
    description: "2 pizzas grandes + 1 refrigerante por R$ 99,90",
    badge: "Hoje",
    color: "bg-brand-red",
  },
  {
    icon: Clock,
    title: "Happy Hour",
    description: "Das 18h às 20h: 20% OFF em todas as pizzas tradicionais",
    badge: "Diário",
    color: "bg-brand-gold",
  },
]

export function PromocoesSection() {
  return (
    <section
      className="bg-brand-dark py-4"
      aria-label="Promoções do dia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 overflow-x-auto py-2">
          {promos.map((promo) => {
            const Icon = promo.icon
            return (
              <div
                key={promo.title}
                className="flex items-center gap-3 flex-shrink-0 group"
              >
                <div className={`${promo.color} p-2 rounded-full`}>
                  <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white text-sm">
                      {promo.title}
                    </span>
                    <span className={`${promo.color} text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide`}>
                      {promo.badge}
                    </span>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">{promo.description}</p>
                </div>
                {/* Divider */}
                <div className="hidden sm:block w-px h-8 bg-white/10 ml-3" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
