import BlogList from '@/templates/blog/blog-list'
import { allPosts } from 'contentlayer/generated'
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

export default function BlogListPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return <BlogList posts={sortedPosts} />
}
