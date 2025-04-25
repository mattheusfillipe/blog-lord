'use client'

import Image from 'next/image'
import { PostCard } from '@/app/components/PostCard'
import { useBlogPosts } from '@/hooks/useBlogPosts'

export default function Explore() {
  const { posts, categoryMap } = useBlogPosts()

  return (
    <main className='w-[1280px] flex flex-col mt-12'>
      <div className='flex items-center gap-2'>
        <Image
          src='/Journal.svg'
          alt='Simbbolo jornal'
          width={20}
          height={18}
        />
        <p className='font-semibold text-[var(--secondary)]'>Blog Lord</p>
      </div>

      {/* Cards */}
      <div className='flex flex-wrap gap-5 mt-8'>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            banner={post.jetpack_featured_media_url || '/Banner.jpg'}
            date={new Date(post.date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
            categories={post.categories
              .map((id) => categoryMap[id])
              .filter(Boolean)}
            title={post.title.rendered}
            description={post.excerpt.rendered}
            link={post.link}
          />
        ))}
      </div>

      {/* Pagination */}
    </main>
  )
}
