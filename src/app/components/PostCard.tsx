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
    <div className='h-auto'>
      <div className='relative w-full pb-[56.25%] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 ease-in-out'>
        {/* Banner do post */}
        <Link href={link}>
          <Image src={banner} alt='Banner' fill className='object-cover' />
        </Link>

        {/* Overlay com informações do post */}
        <div className='absolute flex justify-between items-center bg-black/40 rounded-lg bottom-3 mx-3 px-4 py-2 border-gray-300/80 border-[0.5px] backdrop-blur-md'>
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
        <div className='absolute top-3 left-3 flex gap-2 items-center'>
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
        <Link href={link}>
          <button className='absolute cursor-pointer backdrop-blur-md bg-black/40 rounded-xl py-2 px-4 top-3 md:bottom-3 right-3 max-h-10 border-gray-300/80 border-[0.5px]'>
            <Image
              src='/Arrow.svg'
              alt='Ícone de seta'
              width={20}
              height={20}
            />
          </button>
        </Link>
      </div>

      {/* Título e descrição */}
      <Link href={link}>
        <h2
          className='text-[var(--secondary)] mt-4 font-bold text-2xl hover:underline transition-all duration-300 ease-in-out'
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Link>

      <p
        className='line-clamp-4 text-[var(--secondary)] text-justify mt-1'
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}
