import BlogList from '@/templates/blog/blog-list'
import { allPosts } from 'contentlayer/generated'

export default function BlogListPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return <BlogList posts={sortedPosts} />
}
