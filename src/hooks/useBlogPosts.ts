import { useState, useEffect } from 'react'
import { Post } from '@/app/interfaces/Post'

export const categoryMap: Record<number, string> = {
  112200: 'Beleza',
  143304: 'Perfumes',
}

export const useBlogPosts = () => {
  /**
   * @deprecated logic moved to Server Component in page.tsx
   */
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          'https://public-api.wordpress.com/wp/v2/sites/lordperfumariablog.wordpress.com/posts?per_page=100'
        )
        const data = await res.json()
        setPosts(data)
        setLoading(false)
      } catch (err) {
        console.error('Erro ao buscar posts:', err)
        setError(err as Error)
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return {
    posts,
    loading,
    error,
    categoryMap,
  }
}
