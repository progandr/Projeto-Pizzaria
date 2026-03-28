"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Star, Flame } from "lucide-react"

type Category = "Tradicionais" | "Especiais" | "Doces" | "Bebidas"

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: Category
  bestseller?: boolean
  spicy?: boolean
}

const menuItems: MenuItem[] = [
  // Tradicionais
  {
    id: 1,
    name: "Margherita Classica",
    description: "Molho de tomate San Marzano, mozzarella de búfala, manjericão fresco e azeite extra virgem",
    price: "R$ 59,90",
    image: "/images/pizza-margherita.jpg",
    category: "Tradicionais",
    bestseller: true,
  },
  {
    id: 2,
    name: "Calabresa Artesanal",
    description: "Calabresa fatiada na hora, cebola roxa caramelizada, mozzarella premium e orégano fresco",
    price: "R$ 64,90",
    image: "/images/pizza-calabresa.jpg",
    category: "Tradicionais",
    bestseller: true,
  },
  {
    id: 3,
    name: "Portuguesa da Casa",
    description: "Presunto cozido, ovos, azeitonas verdes, cebola, pimentão e mozzarella derretida",
    price: "R$ 67,90",
    image: "/images/pizza-portuguesa.jpg",
    category: "Tradicionais",
  },
  // Especiais
  {
    id: 4,
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola, parmesão reggiano, provolone e manjericão fresco",
    price: "R$ 79,90",
    image: "/images/pizza-quatro-queijos.jpg",
    category: "Especiais",
    bestseller: true,
  },
  {
    id: 5,
    name: "Frango ao Catupiry",
    description: "Frango grelhado desfiado, catupiry cremoso, cebola caramelizada e mozzarella",
    price: "R$ 74,90",
    image: "/images/pizza-frango.jpg",
    category: "Especiais",
  },
  {
    id: 6,
    name: "Diavola Piccante",
    description: "Salame picante importado, pimentas jalapeño, molho arrabiata e mozzarella",
    price: "R$ 77,90",
    image: "/images/pizza-calabresa.jpg",
    category: "Especiais",
    spicy: true,
  },
  // Doces
  {
    id: 7,
    name: "Nutella com Morango",
    description: "Nutella cremosa, morangos frescos fatiados, açúcar de confeiteiro e massa crocante",
    price: "R$ 62,90",
    image: "/images/pizza-nutella.jpg",
    category: "Doces",
    bestseller: true,
  },
  {
    id: 8,
    name: "Banana com Canela",
    description: "Banana nanica, doce de leite, canela, leite condensado e coco ralado",
    price: "R$ 58,90",
    image: "/images/pizza-nutella.jpg",
    category: "Doces",
  },
  // Bebidas
  {
    id: 9,
    name: "Refrigerante 2L",
    description: "Coca-Cola, Guaraná Antarctica, Sprite ou água com/sem gás",
    price: "R$ 14,90",
    image: "/images/pizza-margherita.jpg",
    category: "Bebidas",
  },
  {
    id: 10,
    name: "Suco Natural 500ml",
    description: "Laranja, limão, maracujá ou abacaxi com hortelã. Feito na hora.",
    price: "R$ 12,90",
    image: "/images/pizza-margherita.jpg",
    category: "Bebidas",
  },
]

const categories: Category[] = ["Tradicionais", "Especiais", "Doces", "Bebidas"]

function PizzaCard({ item }: { item: MenuItem }) {
  const orderMessage = encodeURIComponent(`Olá! Gostaria de pedir: ${item.name} - ${item.price}`)

  return (
    <article className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-border">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.bestseller && (
            <span className="bg-brand-red text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
              <Star className="w-3 h-3" aria-hidden="true" />
              Mais Vendida
            </span>
          )}
          {item.spicy && (
            <span className="bg-orange-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
              <Flame className="w-3 h-3" aria-hidden="true" />
              Picante
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-lg font-bold text-foreground">{item.name}</h3>
        <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-serif text-xl font-bold text-brand-red">{item.price}</span>
          <a
            href={`https://wa.me/5511999999999?text=${orderMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:shadow-md hover:shadow-brand-red/30"
            aria-label={`Pedir ${item.name}`}
          >
            <ShoppingCart className="w-4 h-4" aria-hidden="true" />
            Pedir
          </a>
        </div>
      </div>
    </article>
  )
}

export function CardapioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tradicionais")

  const filtered = menuItems.filter((item) => item.category === activeCategory)

  return (
    <section
      id="cardapio"
      className="py-20 md:py-28 bg-background"
      aria-label="Cardápio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-[0.2em] font-sans">
            Nosso Cardápio
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 text-balance">
            Escolha o seu favorito
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed text-pretty">
            Todos os nossos sabores são preparados com ingredientes frescos e
            selecionados, assados no forno a lenha para um sabor único.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Categorias do cardápio"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-brand-red text-white shadow-md shadow-brand-red/30"
                  : "bg-secondary text-secondary-foreground hover:bg-brand-warm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="tabpanel"
          aria-label={`Pizzas ${activeCategory}`}
        >
          {filtered.map((item) => (
            <PizzaCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-muted-foreground mb-4 text-pretty">
            Quer ver o cardápio completo ou montar uma pizza personalizada?
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20ver%20o%20cardápio%20completo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-dark text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-red transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Falar com atendente via WhatsApp"
          >
            Falar com Atendente
          </a>
        </div>
      </div>
    </section>
  )
}
