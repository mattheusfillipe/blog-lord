import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
  banner: string
  date: string
  categories: string[]
  title: string
  description: string
  link: string
}

export function PostCard({
  banner,
  date,
  categories,
  title,
  description,
  link,
}: PostCardProps) {
  return (
    <div className='w-[413px] h-auto'>
      <div className='relative w-[413px] h-56 rounded-xl overflow-hidden'>
        <Image src={banner} alt='Banner' fill className='object-cover' />

        {/* Overlay com informações do post */}
        <div className='absolute flex justify-between items-center bg-black/40 rounded-lg top-3 mx-3 px-4 py-2 border-gray-300/80 border-[0.5px] backdrop-blur-md'>
          <div className='flex gap-3 items-center'>
            <div className='flex items-center gap-1'>
              <Image
                src='/authorDefault.png'
                alt='Foto autor do post'
                width={16}
                height={16}
                className='object-cover rounded-full overflow-hidden w-4 h-4'
              />
              <p className='text-sm text-[var(--background)]'>Bella</p>
            </div>

            <div className='flex gap-1 items-center'>
              <Image
                src='/Calendar.svg'
                alt='Calendário ícone'
                width={16}
                height={16}
              />
              <p className='text-sm text-[var(--background)]'>{date}</p>
            </div>
          </div>
        </div>

        {/* Categorias */}
        <div className='absolute top-3 right-3 flex gap-2 items-center'>
          {categories.map((cat, index) => (
            <div
              key={index}
              className='border-[0.5px] bg-black/40 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'
            >
              <p className='text-[12px]'>{cat}</p>
            </div>
          ))}
        </div>

        {/* Botão de leitura */}
        <Link href={link} target='_blank'>
          <button className='absolute cursor-pointer backdrop-blur-md bg-black/40 rounded-xl py-2 px-4 bottom-3 right-3 border-gray-300/80 border-[0.5px]'>
            <Image
              src='/Arrow.svg'
              alt='Ícone de seta'
              width={20}
              height={20}
            />
          </button>
        </Link>
      </div>

      <h2
        className='line-clamp-1 text-[var(--secondary)] mt-2.5 font-bold'
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <p
        className='line-clamp-4 text-[var(--secondary)] text-justify mt-1'
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}
