import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Bella Napoli Pizzaria | A Verdadeira Pizza Italiana',
  description:
    'Descubra sabores autênticos da Itália na Bella Napoli Pizzaria. Pizzas artesanais feitas com ingredientes frescos, massa leve e forno a lenha. Peça agora ou faça uma reserva!',
  keywords: 'pizzaria, pizza italiana, pizza artesanal, forno a lenha, Bella Napoli, delivery de pizza',
  openGraph: {
    title: 'Bella Napoli Pizzaria | A Verdadeira Pizza Italiana',
    description: 'Pizzas artesanais feitas com ingredientes frescos e forno a lenha. Autêntico sabor italiano.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
