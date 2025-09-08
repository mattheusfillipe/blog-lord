'use client'

import Image from 'next/image'
import { PostCard } from '@/app/components/PostCard'
import { useBlogPosts } from '@/hooks/useBlogPosts'
import { useSearchParams } from 'next/navigation'
import { useMemo, Suspense } from 'react'

function ExploreContent() {
  const { posts, categoryMap } = useBlogPosts()
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search')

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return posts
    
    const query = searchQuery.toLowerCase()
    return posts.filter(post => {
      // Search in title
      const titleMatch = post.title.rendered.toLowerCase().includes(query)
      
      // Search in excerpt/description
      const excerptMatch = post.excerpt.rendered.toLowerCase().includes(query)
      
      // Search in categories
      const categoryMatch = post.categories.some(categoryId => {
        const categoryName = categoryMap[categoryId]
        return categoryName && categoryName.toLowerCase().includes(query)
      })
      
      return titleMatch || excerptMatch || categoryMatch
    })
  }, [posts, searchQuery, categoryMap])

  return (
    <main className='max-w-7xl w-full flex flex-col mt-12'>
      <div className='flex items-center gap-2'>
        <Image
          src='/Journal.svg'
          alt='Simbbolo jornal'
          width={20}
          height={18}
        />
        <p className='font-semibold text-[var(--secondary)]'>
          {searchQuery ? `Resultados para "${searchQuery}"` : 'Blog Lord'}
        </p>
      </div>

      {searchQuery && (
        <p className='text-[var(--primary)] mt-2'>
          {filteredPosts.length} resultado{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
        </p>
      )}

      {/* Cards */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
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
              link={`/leitura-materia/${post.slug}`}
            />
          ))
        ) : searchQuery ? (
          <div className='col-span-full text-center py-12'>
            <p className='text-[var(--primary)] text-lg'>
              Nenhum resultado encontrado para "<strong>{searchQuery}</strong>"
            </p>
            <p className='text-[var(--primary)] mt-2'>
              Tente pesquisar com outros termos.
            </p>
          </div>
        ) : null}
      </div>

      {/* Pagination */}
    </main>
  )
}

export default function Explore() {
  return (
    <Suspense fallback={<div className='bg-gray-300 w-screen h-screen animate-pulse' />}>
      <ExploreContent />
    </Suspense>
  )
}
