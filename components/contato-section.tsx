"use client"

import { useState } from "react"
import { Phone, Mail, Send, CheckCircle } from "lucide-react"

interface FormData {
  nome: string
  email: string
  mensagem: string
}

interface FormErrors {
  nome?: string
  email?: string
  mensagem?: string
}

function sanitize(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim()
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function ContatoSection() {
  const [form, setForm] = useState<FormData>({ nome: "", email: "", mensagem: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.nome.trim() || form.nome.trim().length < 2) {
      newErrors.nome = "Por favor, insira seu nome completo."
    }
    if (!validateEmail(form.email)) {
      newErrors.email = "Insira um e-mail válido."
    }
    if (!form.mensagem.trim() || form.mensagem.trim().length < 10) {
      newErrors.mensagem = "A mensagem deve ter pelo menos 10 caracteres."
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    // Max length guard
    const maxLengths: Record<string, number> = { nome: 80, email: 120, mensagem: 500 }
    if (value.length > (maxLengths[name] ?? 500)) return
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-brand-dark"
      aria-label="Contato"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div>
            <span className="text-brand-gold text-sm font-semibold uppercase tracking-[0.2em] font-sans">
              Fale Conosco
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 text-balance">
              Estamos aqui
              <br />
              para você
            </h2>
            <p className="text-white/70 mt-5 leading-relaxed text-pretty">
              Tem alguma dúvida, sugestão ou quer fazer uma reserva especial? Mande uma mensagem ou
              nos contate diretamente pelo WhatsApp!
            </p>

            {/* Contact options */}
            <div className="mt-8 flex flex-col gap-4">
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20entrar%20em%20contato."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="Falar pelo WhatsApp"
              >
                <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0 group-hover:opacity-90 transition-opacity">
                  <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">WhatsApp</div>
                  <div className="text-white/60 text-sm">(11) 99999-9999</div>
                </div>
              </a>

              <a
                href="mailto:contato@bellanapoli.com.br"
                className="flex items-center gap-4 group"
                aria-label="Enviar e-mail"
              >
                <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center flex-shrink-0 group-hover:opacity-90 transition-opacity">
                  <Mail className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">E-mail</div>
                  <div className="text-white/60 text-sm">contato@bellanapoli.com.br</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle className="w-16 h-16 text-brand-green" aria-hidden="true" />
                <h3 className="font-serif text-2xl font-bold text-foreground">Mensagem enviada!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recebemos sua mensagem e entraremos em contato em breve. Obrigado!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ nome: "", email: "", mensagem: "" }) }}
                  className="mt-2 text-brand-red text-sm font-medium hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Formulário de contato">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">Envie uma mensagem</h3>

                {/* Nome */}
                <div className="mb-4">
                  <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-1.5">
                    Nome completo <span className="text-brand-red" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Seu nome"
                    aria-describedby={errors.nome ? "nome-error" : undefined}
                    aria-invalid={!!errors.nome}
                    className={`w-full px-4 py-3 rounded-xl bg-secondary border text-foreground placeholder-muted-foreground text-sm outline-none transition-all focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red ${
                      errors.nome ? "border-red-400" : "border-border"
                    }`}
                  />
                  {errors.nome && (
                    <p id="nome-error" role="alert" className="text-red-500 text-xs mt-1.5">
                      {errors.nome}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    E-mail <span className="text-brand-red" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="seu@email.com"
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                    className={`w-full px-4 py-3 rounded-xl bg-secondary border text-foreground placeholder-muted-foreground text-sm outline-none transition-all focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red ${
                      errors.email ? "border-red-400" : "border-border"
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-red-500 text-xs mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Mensagem */}
                <div className="mb-6">
                  <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-1.5">
                    Mensagem <span className="text-brand-red" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    value={form.mensagem}
                    onChange={handleChange}
                    required
                    placeholder="Como podemos ajudar?"
                    aria-describedby={errors.mensagem ? "mensagem-error" : undefined}
                    aria-invalid={!!errors.mensagem}
                    className={`w-full px-4 py-3 rounded-xl bg-secondary border text-foreground placeholder-muted-foreground text-sm outline-none transition-all focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red resize-none ${
                      errors.mensagem ? "border-red-400" : "border-border"
                    }`}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.mensagem ? (
                      <p id="mensagem-error" role="alert" className="text-red-500 text-xs">
                        {errors.mensagem}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="text-muted-foreground text-xs">{form.mensagem.length}/500</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-light disabled:opacity-60 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/30"
                  aria-busy={loading}
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="w-4 h-4" aria-hidden="true" />
                  )}
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
