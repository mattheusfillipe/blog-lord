'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Post {
  id: number
  title: { rendered: string }
  excerpt: { rendered: string }
  link: string
  date: string
  jetpack_featured_media_url?: string
  author: number
  categories: number[]
}

const authorMap: Record<number, { name: string; image: string }> = {
  260441948: { name: 'Laís Barbosa', image: '/lais.jpg' },
  123456789: { name: 'Matheus Fillipe', image: '/matheus.jpg' },
}

const categoryMap: Record<number, string> = {
  112200: 'Beleza',
  143304: 'Perfumes',
}

export function Banner() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          'https://public-api.wordpress.com/wp/v2/sites/lordperfumariablog.wordpress.com/posts?_embed&per_page=3'
        )
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        console.error('Erro ao buscar posts:', err)
      }
    }

    fetchPosts()
  }, [])

  return (
    <section className='px-0 mt-8 w-[1280px]'>
      <div className='container'>
        {/* Título e link "Ver todas" */}
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-2'>
            <Image
              src='/Journal.svg'
              alt='Simbbolo jornal'
              width={20}
              height={18}
            />
            <p className='font-semibold text-[var(--secondary)]'>
              Últimas do Blog Lord
            </p>
          </div>
          <Link
            href={'/explore'}
            className='flex items-center gap-2 text-[var(--secondary)] font-semibold'
          >
            <p>Ver todas</p>
            <Image src='/Chevron.svg' alt='' width={6} height={12} />
          </Link>
        </div>

        {/* Banner */}
        <div className='grid grid-cols-[800px_460px] gap-5 h-[493px]'>
          {/* Banner Primário */}
          {posts[0] && (
            <div className='relative row-span-2 rounded-xl overflow-hidden p-3'>
              <Image
                src={posts[0].jetpack_featured_media_url || '/Banner.jpg'}
                alt='Banner'
                fill
                className='object-cover'
              />

              <div className='absolute backdrop-blur-md bg-black/30 rounded-xl h-[110px] inset-x-0 mx-3 px-8 py-3 bottom-3 border-gray-300/80 border-[0.5px]'>
                {/* Titulo e seta */}
                <div className='flex items-center justify-between'>
                  <h2
                    className='text-4xl font-bold max-w-[652px] truncate'
                    dangerouslySetInnerHTML={{
                      __html: posts[0].title.rendered,
                    }}
                  />
                  <Link href={posts[0].link} target='_blank'>
                    <Image
                      src='/Arrow.svg'
                      alt=''
                      width={40}
                      height={40}
                      className='cursor-pointer'
                    />
                  </Link>
                </div>
                {/* Autor, data e categorias */}
                <div className='flex justify-between items-center mt-4'>
                  <div className='flex gap-6 items-center'>
                    <div className='flex items-center gap-2'>
                      {posts[0] && (
                        <Image
                          src='/authorDefault.png'
                          alt='Foto autor do post'
                          width={28}
                          height={28}
                          className='object-cover rounded-full overflow-hidden w-7 h-7'
                        />
                      )}
                      <p className='font-medium'>
                        {authorMap[posts[0].author]?.name || 'Lord Perfumaria'}
                      </p>
                    </div>

                    <div className='flex gap-2 items-center'>
                      <Image
                        src='/Calendar.svg'
                        alt='Calendário ícone'
                        width={24}
                        height={24}
                      />
                      <p className='font-medium'>
                        {new Date(posts[0].date).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  {posts[0]?.categories.length > 0 && (
                    <div className='flex gap-2 items-center'>
                      {posts[0].categories.map((id) => {
                        const name = categoryMap[id]
                        return (
                          name && (
                            <div
                              key={id}
                              className='border-[0.5px] bg-black/20 border-[var(--background)] rounded-md py-1 px-2'
                            >
                              <p className='text-[12px]'>{name}</p>
                            </div>
                          )
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Banner secundário 1 */}
          <div className='relative rounded-xl overflow-hidden'>
            <Image
              src='/Banner.jpg'
              alt='Banner'
              fill
              className='object-cover'
            />

            {/* Overlay com informações do post */}
            <div className='absolute flex justify-between items-center bg-black/30 rounded-lg top-3 mx-3 px-4 py-2 border-gray-300/80 border-[0.5px] backdrop-blur-md'>
              <div className='flex gap-3 items-center'>
                <div className='flex items-center gap-1'>
                  <Image
                    src='/Banner.jpg'
                    alt='Foto autor do post'
                    width={16}
                    height={16}
                    className='object-cover rounded-full overflow-hidden w-4 h-4'
                  />
                  <p className='text-sm font-medium text-[var-(--primary)]'>
                    Jane Doe
                  </p>
                </div>

                <div className='flex gap-1 items-center'>
                  <Image
                    src='/Calendar.svg'
                    alt='Calendário ícone'
                    width={16}
                    height={16}
                  />
                  <p className='text-sm font-medium text-[var-(--primary)]'>
                    12 Out, 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Overlay com categorias */}
            <div className='absolute top-3 right-3 flex gap-2 items-center '>
              <div className='border-[0.5px] bg-black/30 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'>
                <p className='text-[12px]'>Beleza</p>
              </div>

              <div className='border-[0.5px] bg-black/30 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'>
                <p className='text-[12px]'>Perfume</p>
              </div>
            </div>

            {/* Overlay com título e botão de leitura */}
            <div className='absolute flex justify-between backdrop-blur-md bg-black/30 rounded-xl inset-x-0 py-2 px-4 bottom-3 mx-3 border-gray-300/80 border-[0.5px]'>
              <h2 className='font-bold max-w-[400px] truncate'>
                Lorem ipsum dolor sit amet, consectetur ad...
              </h2>
              <Image
                src='/Arrow.svg'
                alt=''
                width={24}
                height={24}
                className='cursor-pointer'
              />
            </div>
          </div>

          {/* Banner secundário 2 */}
          <div className='relative rounded-xl overflow-hidden'>
            <Image
              src='/Banner.jpg'
              alt='Banner'
              fill
              className='object-cover'
            />

            {/* Overlay com informações do post */}
            <div className='absolute flex justify-between items-center bg-black/30 rounded-lg top-3 mx-3 px-4 py-2 border-gray-300/80 border-[0.5px] backdrop-blur-md'>
              <div className='flex gap-3 items-center'>
                <div className='flex items-center gap-1'>
                  <Image
                    src='/Banner.jpg'
                    alt='Foto autor do post'
                    width={16}
                    height={16}
                    className='object-cover rounded-full overflow-hidden w-4 h-4'
                  />
                  <p className='text-sm font-medium text-[var-(--primary)]'>
                    Jane Doe
                  </p>
                </div>

                <div className='flex gap-1 items-center'>
                  <Image
                    src='/Calendar.svg'
                    alt='Calendário ícone'
                    width={16}
                    height={16}
                  />
                  <p className='text-sm font-medium text-[var-(--primary)]'>
                    12 Out, 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Overlay com categorias */}
            <div className='absolute top-3 right-3 flex gap-2 items-center '>
              <div className='border-[0.5px] bg-black/30 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'>
                <p className='text-[12px]'>Beleza</p>
              </div>

              <div className='border-[0.5px] bg-black/30 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'>
                <p className='text-[12px]'>Perfume</p>
              </div>
            </div>

            {/* Overlay com título e botão de leitura */}
            <div className='absolute flex justify-between backdrop-blur-md bg-black/30 rounded-xl inset-x-0 py-2 px-4 bottom-3 mx-3 border-gray-300/80 border-[0.5px]'>
              <h2 className='font-bold max-w-[400px] truncate'>
                Lorem ipsum dolor sit amet, consectetur ad...
              </h2>
              <Image
                src='/Arrow.svg'
                alt=''
                width={24}
                height={24}
                className='cursor-pointer'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
