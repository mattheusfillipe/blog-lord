import { Home } from '@/app/components/HomeClient'
import { Post } from '@/app/interfaces/Post'

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(
      'https://public-api.wordpress.com/wp/v2/sites/lordperfumariablog.wordpress.com/posts?per_page=3',
      { next: { revalidate: 3600 } } // Revalidate every hour
    )
    if (!res.ok) {
      throw new Error('Failed to fetch posts')
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function Page() {
  const posts = await getPosts()
  return <Home posts={posts} />
}
