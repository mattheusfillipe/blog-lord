export interface Post {
  id: number
  title: { rendered: string }
  excerpt: { rendered: string }
  link: string
  date: string
  jetpack_featured_media_url?: string
  author: number
  categories: number[]
}
