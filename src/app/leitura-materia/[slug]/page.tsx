'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useBlogPosts } from '@/hooks/useBlogPosts'
import { notFound } from 'next/navigation'

export default function PostClient() {
  const { slug } = useParams() as { slug: string }
  const { posts, loading, error, categoryMap } = useBlogPosts()

  if (loading)
    return <div className='bg-gray-300 w-screen h-screen animate-pulse' />
  if (error || !posts.length) return notFound()

  const post = posts.find((p) => p.slug === slug)
  if (!post) return notFound()

  const currentIndex = posts.findIndex((p) => p.slug === slug)

  const getNextPosts = (
    allPosts: typeof posts,
    currentIndex: number,
    count = 3
  ) => {
    const result: typeof posts = []

    let i = currentIndex + 1
    while (result.length < count && i < allPosts.length) {
      result.push(allPosts[i])
      i++
    }

    // Se não deu 3, preenche com os mais antigos (do começo da lista)
    i = 0
    while (result.length < count && i < currentIndex) {
      result.push(allPosts[i])
      i++
    }

    return result
  }
  const relatedPosts = getNextPosts(posts, currentIndex, 3)

  return (
    <main className='mt-10 flex flex-col max-w-7xl gap-6'>
      {/* Título e descrição */}
      <div className='flex flex-col sm:flex sm:flex-row w-full gap-10 min-h-96'>
        <div className='flex flex-col justify-between items-baseline md:w-1/2'>
          <h2
            className='text-4xl font-bold text-[var(--primary)]'
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <p
            className='text-[var(--secondary)] text-xl text-justify mt-4'
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <div>
            <p className='flex items-center gap-2 text-[var(--secondary)] font-medium mt-4'>
              Por
              <span className='text-[var(--primary)] font-bold -m-1'>
                Bella
              </span>
            </p>
            <p className='font-light text-[var(--secondary)] text-sm'>
              {new Date(post.date).toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>

        {/* Banner */}
        <div className='relative rounded-xl min-h-60 md:w-1/2 overflow-hidden'>
          <Image
            src={post.jetpack_featured_media_url || '/Banner.jpg'}
            alt='Banner'
            fill
            className='absolute object-cover'
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div
        className='text-[var(--secondary)] font-normal leading-8 text-justify prose prose-lg'
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

      {/* Leia Mais */}
      <div className='w-full h-px bg-gray-300 mt-8' />
      {/* Título e ver todas  */}
      <div className='flex items-center justify-between mt-6'>
        <div className='flex items-center gap-2'>
          <Image
            src='/Journal.svg'
            alt='Símbolo jornal'
            width={20}
            height={18}
          />
          <p className='font-semibold text-[var(--secondary)]'>Leia Mais</p>
        </div>
        <Link
          href='/explore'
          className='flex items-center gap-2 text-[var(--secondary)] font-semibold'
        >
          <p>Ver todas</p>
          <Image src='/Chevron.svg' alt='' width={6} height={12} />
        </Link>
      </div>

      <div className='flex flex-col md:flex-row justify-between gap-5'>
        {relatedPosts.map((related) => (
          <div
            key={related.id}
            className='relative w-full h-56 rounded-xl overflow-hidden'
          >
            <Link href={`/leitura-materia/${related.slug}`}>
              <Image
                src={related.jetpack_featured_media_url || '/Banner.jpg'}
                alt={related.title.rendered}
                fill
                className='object-cover'
              />
              <div className='absolute flex justify-between backdrop-blur-md bg-black/40 rounded-xl inset-x-0 py-2 px-4 bottom-3 mx-3 border-gray-300/80 border-[0.5px]'>
                <h2
                  className='font-bold truncate'
                  dangerouslySetInnerHTML={{ __html: related.title.rendered }}
                />

                <Image src='/Arrow.svg' alt='' width={24} height={24} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
