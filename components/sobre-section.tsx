import Image from "next/image"
import { Flame, Leaf, Award, Clock } from "lucide-react"

const diferenciais = [
  {
    icon: Flame,
    title: "Forno a Lenha",
    description: "Nosso forno artesanal atinge 450°C, garantindo a massa perfeita — crocante por fora e macia por dentro.",
  },
  {
    icon: Leaf,
    title: "Ingredientes Frescos",
    description: "Tomates San Marzano importados, mozzarella de búfala e ervas cultivadas no próprio jardim.",
  },
  {
    icon: Award,
    title: "Tradição Italiana",
    description: "Receitas originais trazidas diretamente de Nápoles, preservadas há mais de 25 anos.",
  },
  {
    icon: Clock,
    title: "Massa de Longa Fermentação",
    description: "Nossa massa fermenta por 48 horas, resultando em uma digestão mais leve e um sabor inigualável.",
  },
]

export function SobreSection() {
  return (
    <section
      id="sobre"
      className="py-20 md:py-28 bg-secondary"
      aria-label="Sobre a Bella Napoli"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/forno-lenha.jpg"
                alt="Forno a lenha da Bella Napoli Pizzaria"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-red text-white p-5 rounded-2xl shadow-xl max-w-[180px]">
              <div className="font-serif text-3xl font-bold">+25</div>
              <div className="text-white/90 text-sm mt-1 leading-relaxed">anos de tradição italiana</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-brand-red text-sm font-semibold uppercase tracking-[0.2em] font-sans">
              Nossa História
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 leading-tight text-balance">
              Paixão pela pizza
              <br />
              desde 1998
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed text-pretty">
              A Bella Napoli nasceu do sonho de Carlo Esposito, um pizzaiolo napolitano que
              chegou ao Brasil com uma mala cheia de receitas da família e uma missão:
              apresentar ao mundo a verdadeira pizza italiana.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed text-pretty">
              Hoje, 25 anos depois, seguimos fiel às origens. Cada pizza é uma obra de
              arte preparada com amor, paciência e os melhores ingredientes. Nosso forno
              a lenha, importado diretamente de Nápoles, é o coração da nossa cozinha.
            </p>

            {/* Diferenciais */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {diferenciais.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-red" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
