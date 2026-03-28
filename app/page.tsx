import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PromocoesSection } from "@/components/promocoes-section"
import { CardapioSection } from "@/components/cardapio-section"
import { SobreSection } from "@/components/sobre-section"
import { AvaliacoesSection } from "@/components/avaliacoes-section"
import { LocalizacaoSection } from "@/components/localizacao-section"
import { ContatoSection } from "@/components/contato-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PromocoesSection />
      <CardapioSection />
      <SobreSection />
      <AvaliacoesSection />
      <LocalizacaoSection />
      <ContatoSection />
      <Footer />
    </main>
  )
}
