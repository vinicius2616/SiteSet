import LandingPage from '@/templates/landing-page/landing-page'

import { allPosts } from 'contentlayer/generated'

export default function Home() {
  console.log(allPosts)

  return <LandingPage />
}
