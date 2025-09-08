'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'
import { BannerPrimary } from './BannerPrimary'
import { useBlogPosts } from '@/hooks/useBlogPosts'
import { BannerSecondary } from './BannerSecondary'
import { BannerTertiary } from './BannerTertiary'

export function Banner() {
  const { posts, categoryMap } = useBlogPosts()

  return (
    <section className='mt-8 w-full max-w-7xl flex'>
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
        <div className='hidden lg:grid grid-cols-[1.6fr_1fr] gap-6 grid-rows-2 min-h-[400px] mb-12'>
          {/* Banner Primário */}
          <BannerPrimary post={posts[0]} categoryMap={categoryMap} />
          {/* Banner secundário 1 */}
          <BannerSecondary post={posts[1]} categoryMap={categoryMap} />
          {/* Banner secundário 2 */}
          <BannerSecondary post={posts[2]} categoryMap={categoryMap} />
        </div>

        {/* Swiper para telas médias (768px - 1023px) */}
        <div className='hidden md:flex lg:hidden w-full min-h-[400px]'>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={16}
            slidesPerView={1}
            className='w-full h-full'
          >
            {[posts[0], posts[1], posts[2]].map((post, index) => (
              <SwiperSlide key={index} className='h-full'>
                <BannerPrimary post={post} categoryMap={categoryMap} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Swiper para telas menores (< 768px) */}
        <div className='block md:hidden w-full min-h-[420px]'>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={16}
            slidesPerView={1}
            className='w-full h-full'
          >
            {posts
              .filter((post) => Array.isArray(post.categories))
              .slice(0, 3)
              .map((post, index) => (
                <SwiperSlide key={index} className='h-full'>
                  <BannerTertiary
                    post={{
                      ...post,
                      categories: post.categories.slice(0, 1),
                    }}
                    categoryMap={categoryMap}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
