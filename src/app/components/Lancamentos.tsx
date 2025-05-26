import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { ProductCard } from '@/app/components/ProductCard'
import { useProducts } from '@/hooks/useProducts'

export function Lancamentos() {
  const { products, loading, error } = useProducts()

  return (
    <section className='mt-4 w-full max-w-7xl'>
      {/* Título */}
      <div className='w-full h-px bg-gray-300 mb-6' />
      <div className='flex items-center gap-2'>
        <Image src='/Flame.png' alt='Simbbolo jornal' width={15} height={20} />
        <p className='font-semibold text-[var(--secondary)]'>
          Últimos Lançamentos
        </p>
      </div>

      {/* Cards Desktop */}
      <div className='hidden xl:flex mt-6 justify-between'>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {!loading &&
          !error &&
          products.map((product) => (
            <ProductCard
              key={product.link}
              image={product.image}
              title={product.title}
              link={product.link}
            />
          ))}
      </div>

      {/* Swiper para telas menores */}
      <div className='xl:hidden flex mt-6 w-full'>
        <Swiper
          spaceBetween={0}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1.4, // celulares menores
            },
            550: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {!loading &&
            !error &&
            products.map((product) => (
              <SwiperSlide key={product.link}>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  link={product.link}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  )
}
