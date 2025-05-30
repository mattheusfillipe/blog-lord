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
        <div className='relative w-full pb-[56.25%] row-span-2 rounded-xl overflow-hidden p-3'>
          {post.jetpack_featured_media_url && (
            <Image
              src={post.jetpack_featured_media_url}
              alt='Banner'
              fill
              className='object-cover absolute'
            />
          )}

          <div className='absolute backdrop-blur-md bg-black/40 rounded-xl h-[110px] inset-x-0 mx-3 px-8 py-3 bottom-3 border-gray-300/80 border-[0.5px]'>
            {/* Titulo e seta */}
            <div className='flex items-center justify-between'>
              <h2
                className='text-4xl font-bold max-w-[652px] truncate'
                dangerouslySetInnerHTML={{
                  __html: post.title.rendered,
                }}
              />
              <Link href={`/leitura-materia/${post.slug}`}>
                <Image
                  src='/Arrow.svg'
                  alt=''
                  width={40}
                  height={40}
                  className='cursor-pointer'
                />
              </Link>
            </div>
            {/* Autor, data e categorias */}
            <div className='flex justify-between items-center mt-4'>
              <div className='flex gap-6 items-center'>
                <div className='flex items-center gap-2'>
                  {post && (
                    <Image
                      src='/authorDefault.png'
                      alt='Foto autor do post'
                      width={28}
                      height={28}
                      className='object-cover rounded-full overflow-hidden w-7 h-7'
                    />
                  )}
                  <p className='font-medium'>Bella</p>
                </div>

                <div className='flex gap-2 items-center'>
                  <Image
                    src='/Calendar.svg'
                    alt='Calendário ícone'
                    width={24}
                    height={24}
                  />
                  <p className='font-medium'>
                    {new Date(post.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
              {post?.categories.length > 0 && (
                <div className='flex gap-2 items-center'>
                  {post.categories.map((id) => {
                    const name = categoryMap[id]
                    return (
                      name && (
                        <div
                          key={id}
                          className='border-[0.5px] bg-black/20 border-[var(--background)] rounded-md py-1 px-2'
                        >
                          <p className='text-[12px]'>{name}</p>
                        </div>
                      )
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
