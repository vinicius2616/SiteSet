import { Layout } from '@/components/layout'
import '@/styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Dicas e estratégias para impulsionar o negócio',
  robots: 'index, follow',
  openGraph: {
    title: 'Site.Set',
    description: 'Dicas e estratégias para impulsionar o negócio',
    url: 'https://site-set-iota.vercel.app/og-image.jpg',
    siteName: 'Site.Set',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://site-set-iota.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.Set',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
