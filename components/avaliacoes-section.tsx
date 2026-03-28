import { Star, Quote } from "lucide-react"

interface Review {
  name: string
  initials: string
  rating: number
  date: string
  text: string
  avatar: string
}

const reviews: Review[] = [
  {
    name: "Ana Carolina S.",
    initials: "AC",
    rating: 5,
    date: "há 2 dias",
    text: "A melhor pizza que já comi na vida! A massa é leve, crocante e o sabor dos ingredientes é incrível. A Margherita é simplesmente perfeita. Voltarei sempre!",
    avatar: "bg-rose-400",
  },
  {
    name: "Rafael Mendes",
    initials: "RM",
    rating: 5,
    date: "há 1 semana",
    text: "Pedi o Quattro Formaggi e me surpreendi com a qualidade. O forno a lenha faz toda a diferença no sabor. Atendimento rápido e cordial. Recomendo demais!",
    avatar: "bg-blue-400",
  },
  {
    name: "Júlia Ferreira",
    initials: "JF",
    rating: 5,
    date: "há 2 semanas",
    text: "Finalmente encontrei uma pizzaria que respeita a receita italiana original. Os ingredientes são frescos, a massa é perfeita e o entregador chegou bem antes do prazo.",
    avatar: "bg-amber-400",
  },
  {
    name: "Marcos Oliveira",
    initials: "MO",
    rating: 5,
    date: "há 3 semanas",
    text: "Ambiente aconchegante, atendimento impecável e pizza de nível internacional. Já trouxe toda a família e todos aprovaram. A calabresa é uma das melhores da cidade!",
    avatar: "bg-emerald-400",
  },
  {
    name: "Priya Almeida",
    initials: "PA",
    rating: 5,
    date: "há 1 mês",
    text: "Fiz uma reserva para jantar com amigos e a experiência foi incrível! A equipe é atenciosa, a pizza chegou quentinha e a pizza doce de Nutella é a sobremesa perfeita.",
    avatar: "bg-purple-400",
  },
  {
    name: "Eduardo Costa",
    initials: "EC",
    rating: 5,
    date: "há 1 mês",
    text: "Pedi delivery e a embalagem manteve a pizza quentinha. A Portuguesa da Casa é rica em ingredientes e generosa no tamanho. Frete rápido e preço justo.",
    avatar: "bg-teal-400",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-brand-gold text-brand-gold" : "text-muted-foreground"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function AvaliacoesSection() {
  return (
    <section
      id="avaliacoes"
      className="py-20 md:py-28 bg-background overflow-hidden"
      aria-label="Avaliações dos clientes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-[0.2em] font-sans">
            Avaliações
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 text-balance">
            O que nossos clientes dizem
          </h2>

          {/* Summary stats */}
          <div className="mt-6 inline-flex items-center gap-4 bg-secondary px-6 py-4 rounded-2xl">
            <div>
              <div className="font-serif text-4xl font-bold text-foreground">4.9</div>
              <div className="text-muted-foreground text-xs mt-0.5">de 5 estrelas</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" aria-hidden="true" />
                ))}
              </div>
              <div className="text-muted-foreground text-xs mt-1">+1.200 avaliações no Google</div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote
                className="absolute top-4 right-4 w-8 h-8 text-brand-red/10"
                aria-hidden="true"
              />
              {/* Reviewer info */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full ${review.avatar} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  aria-hidden="true"
                >
                  {review.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-foreground text-sm truncate">{review.name}</div>
                  <div className="text-muted-foreground text-xs">{review.date}</div>
                </div>
              </div>

              <StarRating rating={review.rating} />

              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
            </article>
          ))}
        </div>

        {/* Google reviews CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red-light font-semibold text-sm transition-colors"
            aria-label="Ver todas as avaliações no Google"
          >
            Ver todas as avaliações no Google
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
