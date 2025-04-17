import Image from 'next/image'
import { ProductCard } from './ProductCard'

export function Lancamentos() {
  return (
    <section className='px-0 mt-4 w-[1280px]'>
      {/* Título */}
      <div className='w-full h-px bg-gray-300 mb-6' />
      <div className='flex items-center gap-2'>
        <Image src='/Flame.png' alt='Simbbolo jornal' width={15} height={20} />
        <p className='font-semibold text-[var(--secondary)]'>
          Últimos Lançamentos
        </p>
      </div>

      {/* Cards */}
      <div className='flex mt-6 justify-between'>
        {/* Conteúdo 1*/}
        <ProductCard
          image='/image.png'
          title='Toy Boy'
          subtitle='Moschino - Masculino'
          link='#'
        />

        {/* Conteúdo 2*/}
        <ProductCard
          image='/image-1.png'
          title='Extreme Woods'
          subtitle='Galaxy - Masculino'
          link='#'
        />

        {/* Conteúdo 3*/}
        <ProductCard
          image='/image-2.png'
          title='Eqaab'
          subtitle='Al Wataniah - Masculino'
          link='#'
        />

        {/* Conteúdo 4*/}
        <ProductCard
          image='/image-3.png'
          title='1 Million Royal'
          subtitle='Rabane - Masculino'
          link='#'
        />

        {/* Conteúdo 5*/}
        <ProductCard
          image='/image-4.png'
          title='Eros Energy'
          subtitle='Versace - Masculino'
          link='#'
        />
      </div>
    </section>
  )
}
