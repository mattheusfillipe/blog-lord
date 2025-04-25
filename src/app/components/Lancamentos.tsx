import Image from 'next/image'
import { ProductCard } from '@/app/components/ProductCard'
import { useProducts } from '@/hooks/useProducts'

export function Lancamentos() {
  const { products, loading, error } = useProducts()

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
    </section>
  )
}
