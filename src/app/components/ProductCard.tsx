import Image from 'next/image'

interface ProductCardProps {
  image: string
  title: string
  subtitle: string
  link: string
}

export function ProductCard({
  image,
  title,
  subtitle,
  link,
}: ProductCardProps) {
  return (
    <div className='w-[223px] h-[355px]'>
      <div className='relative w-[223px] h-[300px]'>
        <Image src={image} alt={title} fill className='object-contain' />
      </div>
      <div className='flex items-center justify-between mt-2 px-2.5'>
        <div>
          <h2 className='text-[var(--secondary)] font-semibold'>{title}</h2>
          <p className='text-xs text-[var(--secondary)]'>{subtitle}</p>
        </div>
        <a href={link}>
          <div className='bg-[var(--primary)] rounded-md'>
            <Image src='/Arrow.svg' alt='Seta' width={28} height={28} />
          </div>
        </a>
      </div>
    </div>
  )
}
