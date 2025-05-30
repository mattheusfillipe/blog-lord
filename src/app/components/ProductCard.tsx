import Image from 'next/image'

interface ProductCardProps {
  image: string
  title: string
  link: string
}

export function ProductCard({ image, title, link }: ProductCardProps) {
  return (
    <div className='max-w-[223px] min-h-[355px]'>
      <div className='relative max-w-[223px] min-h-[250px] bg-white rounded-xl outline-[1px] outline-[var(--primary)] flex items-center justify-center'>
        <img src={image} alt={title} className='object-fill' />
      </div>
      <div className='flex items-center justify-between mt-2 px-2.5'>
        <div>
          <h2 className='text-[var(--secondary)] font-semibold line-clamp-2 w-36'>
            {title}
          </h2>
        </div>
        <a href={link} target='_blank'>
          <div className='bg-[var(--primary)] rounded-md'>
            <Image src='/Arrow.svg' alt='Seta' width={28} height={28} />
          </div>
        </a>
      </div>
    </div>
  )
}
