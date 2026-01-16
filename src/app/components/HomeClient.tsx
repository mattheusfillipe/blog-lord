'use client'

import { Banner } from '@/app/components/Banner'
import { Instagram } from '@/app/components/Instagram'
import { Lancamentos } from '@/app/components/Lancamentos'
import { Newsletter } from '@/app/components/Newsletter'
import { Post } from '@/app/interfaces/Post'
import Link from 'next/link'
import { PostCard } from './PostCard'

interface HomeProps {
  posts: Post[]
}

export function Home({ posts }: HomeProps) {
  return (
    <>
      <Banner posts={posts} />

      <Instagram />
      <Lancamentos />
      <Newsletter />
    </>
  )
}
