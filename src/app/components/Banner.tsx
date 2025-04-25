'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BannerPrimary } from './BannerPrimary'
import { useBlogPosts } from '@/hooks/useBlogPosts'
import { BannerSecondary } from './BannerSecondary'

export function Banner() {
  const { posts, categoryMap } = useBlogPosts()

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
          <BannerPrimary post={posts[0]} categoryMap={categoryMap} />

          {/* Banner secundário 1 */}
          <BannerSecondary post={posts[1]} categoryMap={categoryMap} />
          {/* Banner secundário 2 */}
          <BannerSecondary post={posts[2]} categoryMap={categoryMap} />
        </div>
      </div>
    </section>
  )
}
