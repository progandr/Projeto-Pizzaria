import { MapPin, Clock, Phone } from "lucide-react"

const horarios = [
  { dia: "Segunda-feira", horario: "18h às 23h" },
  { dia: "Terça a Quinta", horario: "18h às 23h" },
  { dia: "Sexta e Sábado", horario: "18h às 00h" },
  { dia: "Domingo", horario: "17h às 23h" },
]

export function LocalizacaoSection() {
  return (
    <section
      className="py-20 md:py-28 bg-secondary"
      aria-label="Localização e horários"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-[0.2em] font-sans">
            Onde Estamos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 text-balance">
            Venha nos visitar
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1!2d-46.6388!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzgnMTkuNyJX!5e0!3m2!1spt!2sbr!4v1234567890"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Bella Napoli Pizzaria no Google Maps"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-red" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base">Endereço</h3>
                  <address className="not-italic text-muted-foreground mt-1 leading-relaxed text-sm">
                    Rua Nápoles, 498 — Vila Italiana<br />
                    São Paulo — SP, 01310-100
                  </address>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-brand-red text-sm font-medium hover:text-brand-red-light transition-colors"
                    aria-label="Ver rota no Google Maps"
                  >
                    Ver rota no Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-red" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-base mb-3">Horário de Funcionamento</h3>
                  <div className="flex flex-col gap-2">
                    {horarios.map((h) => (
                      <div key={h.dia} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{h.dia}</span>
                        <span className="font-medium text-foreground">{h.horario}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-red" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base">Telefone e WhatsApp</h3>
                  <a
                    href="tel:+5511999999999"
                    className="block text-muted-foreground mt-1 hover:text-brand-red transition-colors text-sm"
                    aria-label="Ligar para (11) 99999-9999"
                  >
                    (11) 99999-9999
                  </a>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 bg-brand-green text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                    aria-label="Chamar no WhatsApp"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
