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
    let next = currentIndex + 1

    while (result.length < count && next < allPosts.length) {
      result.push(allPosts[next])
      next++
    }

    let back = currentIndex - 1
    while (result.length < count && back >= 0) {
      result.unshift(allPosts[back])
      back--
    }

    return result
  }

  const relatedPosts = getNextPosts(posts, currentIndex, 3)

  return (
    <main className='mt-12 flex flex-col w-[1280px] gap-6 justify-center'>
      {/* Banner */}
      <div className='relative rounded-xl pb-[40%] overflow-hidden p-3'>
        <Image
          src={post.jetpack_featured_media_url || '/Banner.jpg'}
          alt='Banner'
          fill
          className='object-cover'
        />
        <div className='absolute backdrop-blur-md bg-black/40 rounded-xl h-[110px] inset-x-0 mx-3 px-8 py-3 bottom-3 border-gray-300/80 border-[0.5px]'>
          <div className='flex items-center h-full justify-between'>
            <h2
              className='text-4xl font-bold max-w-[900px] line-clamp-2'
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div className='flex flex-col items-end gap-4'>
              <div className='flex gap-6 items-center'>
                <div className='flex items-center gap-2'>
                  <Image
                    src='/authorDefault.png'
                    alt='Autor'
                    width={28}
                    height={28}
                    className='object-cover rounded-full w-7 h-7'
                  />
                  <p className='font-medium'>Bella</p>
                </div>

                <div className='flex gap-2 items-center'>
                  <Image
                    src='/Calendar.svg'
                    alt='Calendário ícone'
                    width={24}
                    height={24}
                  />
                  <p className='font-medium'>
                    {new Date(post.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>

              {post.categories.length > 0 && (
                <div className='flex gap-2 items-center'>
                  {post.categories.map(
                    (id) =>
                      categoryMap[id] && (
                        <div
                          key={id}
                          className='border-[0.5px] bg-black/20 border-[var(--background)] rounded-md py-1 px-2'
                        >
                          <p className='text-[12px]'>{categoryMap[id]}</p>
                        </div>
                      )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div
        className='text-[var(--secondary)] font-normal leading-8 text-justify prose prose-lg'
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

      {/* Leia Mais */}
      <div className='w-full h-px bg-gray-300 mt-8' />
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

      <div className='flex justify-between gap-5 mt-6'>
        {relatedPosts.map((related) => (
          <div
            key={related.id}
            className='relative w-full h-56 rounded-xl overflow-hidden'
          >
            <Image
              src={related.jetpack_featured_media_url || '/fallback.jpg'}
              alt={related.title.rendered}
              fill
              className='object-cover'
            />
            <div className='absolute flex justify-between backdrop-blur-md bg-black/40 rounded-xl inset-x-0 py-2 px-4 bottom-3 mx-3 border-gray-300/80 border-[0.5px]'>
              <h2
                className='font-bold max-w-[400px] truncate'
                dangerouslySetInnerHTML={{ __html: related.title.rendered }}
              />
              <Link href={`/leitura-materia/${related.slug}`}>
                <Image src='/Arrow.svg' alt='' width={24} height={24} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
