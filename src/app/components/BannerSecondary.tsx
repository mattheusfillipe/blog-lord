import Image from 'next/image'
import Link from 'next/link'
import { Post } from '../interfaces/Post'

export function BannerSecondary({
  post,
  categoryMap,
}: {
  post: Post
  categoryMap: Record<number, string>
}) {
  return (
    <>
      {post && (
        <div className='relative rounded-xl overflow-hidden'>
          {post.jetpack_featured_media_url && (
            <Image
              src={post.jetpack_featured_media_url}
              alt='Banner'
              fill
              className='object-cover'
            />
          )}

          {/* Overlay com informações do post */}
          <div className='absolute flex justify-between items-center bg-black/40 rounded-lg top-3 mx-3 px-4 py-2 border-gray-300/80 border-[0.5px] backdrop-blur-md'>
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

          {/* Overlay com categorias */}
          {post?.categories.length > 0 && (
            <div className='absolute top-3 right-3 flex gap-2 items-center '>
              {post.categories.map((id) => {
                const name = categoryMap[id]
                return (
                  name && (
                    <div
                      key={id}
                      className='border-[0.5px] bg-black/40 border-[var(--background)] rounded-md py-1 px-2'
                    >
                      <p className='text-[12px]'>{name}</p>
                    </div>
                  )
                )
              })}
            </div>
          )}

          {/* Overlay com título e botão de leitura */}
          <div className='absolute flex justify-between backdrop-blur-md bg-black/40 rounded-xl inset-x-0 py-2 px-4 bottom-3 mx-3 border-gray-300/80 border-[0.5px]'>
            <h2
              className='font-bold max-w-[400px] truncate'
              dangerouslySetInnerHTML={{
                __html: post.title.rendered,
              }}
            ></h2>
            <Link href={post.link} target='_blank'>
              <Image
                src='/Arrow.svg'
                alt=''
                width={24}
                height={24}
                className='cursor-pointer'
              />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
