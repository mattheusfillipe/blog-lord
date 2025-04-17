import Image from 'next/image'

interface PostCardProps {
  banner: string
  authorPhoto: string
  authorName: string
  date: string
  categories: string[]
  title: string
  description: string
}

export function PostCard({
  banner,
  authorPhoto,
  authorName,
  date,
  categories,
  title,
  description,
}: PostCardProps) {
  return (
    <div>
      <div className='relative w-full h-56 rounded-xl overflow-hidden'>
        <Image src={banner} alt='Banner' fill className='object-cover' />

        {/* Overlay com informações do post */}
        <div className='absolute flex justify-between items-center bg-black/30 rounded-lg top-3 mx-3 px-4 py-2 border-gray-300/80 border-[0.5px] backdrop-blur-md'>
          <div className='flex gap-3 items-center'>
            <div className='flex items-center gap-1'>
              <Image
                src={authorPhoto}
                alt='Foto autor do post'
                width={16}
                height={16}
                className='object-cover rounded-full overflow-hidden w-4 h-4'
              />
              <p className='text-sm text-[var(--background)]'>{authorName}</p>
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
              className='border-[0.5px] bg-black/30 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'
            >
              <p className='text-[12px]'>{cat}</p>
            </div>
          ))}
        </div>

        {/* Botão de leitura */}
        <button className='absolute cursor-pointer backdrop-blur-md bg-black/30 rounded-xl py-2 px-4 bottom-3 right-3 border-gray-300/80 border-[0.5px]'>
          <Image src='/Arrow.svg' alt='Ícone de seta' width={20} height={20} />
        </button>
      </div>

      <h2 className='line-clamp-1 text-[var(--secondary)] mt-2.5 font-bold'>
        {title}
      </h2>
      <p className='line-clamp-4 text-[var(--secondary)]'>{description}</p>
    </div>
  )
}
