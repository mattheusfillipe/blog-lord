import { Post } from '../interfaces/Post'
import Link from 'next/link'
import Image from 'next/image'

export function BannerPrimary({
  post,
  categoryMap,
}: {
  post: Post
  categoryMap: Record<number, string>
}) {
  return (
    <>
      {post && (
        <Link
          href={`/leitura-materia/${post.slug}`}
          className='block row-span-2'
        >
          <div className='relative w-full h-full min-h-[400px] rounded-xl overflow-hidden p-3 cursor-pointer'>
            {post.jetpack_featured_media_url && (
              <Image
                src={post.jetpack_featured_media_url}
                alt='Banner'
                fill
                className='object-cover absolute hover:scale-105 transition-transform duration-300'
              />
            )}

            {/* Autor, data e categorias */}

            <div className='flex gap-2 items-center'>
              <div className='absolute flex justify-between items-center bg-black/40 rounded-lg top-3 px-4 py-2 border-gray-300/80 border-[0.5px] backdrop-blur-md'>
                <div className='flex gap-3 items-center'>
                  <div className='flex items-center gap-2'>
                    {post && (
                      <Image
                        src='/authorDefault.png'
                        alt='Foto autor do post'
                        width={20}
                        height={20}
                        className='object-cover rounded-full overflow-hidden'
                      />
                    )}
                    <p className='font-medium'>Bella</p>
                  </div>

                  <div className='flex gap-1 items-center'>
                    <Image
                      src='/Calendar.svg'
                      alt='Calendário ícone'
                      width={16}
                      height={16}
                    />
                    <p className='text-sm font-medium text-[var-(--primary)]'>
                      {new Date(post.date).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {post?.categories.length > 0 && (
                <div className='absolute right-3 top-3 flex gap-2 items-center'>
                  {post.categories.map((id) => {
                    const name = categoryMap[id]
                    return (
                      name && (
                        <div
                          key={id}
                          className='border-gray-300/80 border-[0.5px] bg-black/40 rounded-md py-1 px-2 backdrop-blur-md'
                        >
                          <p className='text-[12px]'>{name}</p>
                        </div>
                      )
                    )
                  })}
                </div>
              )}
            </div>

            <div className='absolute backdrop-blur-md bg-black/40 rounded-xl h-[110px] inset-x-0 mx-3 px-8 py-3 bottom-3 border-gray-300/80 border-[0.5px]'>
              {/* Titulo e seta */}
              <div className='flex items-center justify-between'>
                <h2
                  className='text-4xl font-bold max-w-[630px] cursor-pointer line-clamp-2'
                  dangerouslySetInnerHTML={{
                    __html: post.title.rendered,
                  }}
                />
                <Image
                  src='/Arrow.svg'
                  alt=''
                  width={40}
                  height={40}
                  className='cursor-pointer group-hover:translate-x-1 transition-transform duration-300'
                />
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}
