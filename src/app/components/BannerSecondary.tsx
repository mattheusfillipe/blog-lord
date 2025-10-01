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
        <Link href={`/leitura-materia/${post.slug}`} className='block'>
          <div className='relative rounded-xl pb-[56.25%] overflow-hidden cursor-pointer'>
            {post.jetpack_featured_media_url && (
              <Image
                src={post.jetpack_featured_media_url}
                alt='Banner'
                fill
                className='object-cover absolute hover:scale-105 transition-transform duration-300'
              />
            )}

            {/* Overlay com informações do post */}

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
                className='font-bold max-w-[400px] truncate cursor-pointer'
                dangerouslySetInnerHTML={{
                  __html: post.title.rendered,
                }}
              ></h2>
              <Image
                src='/Arrow.svg'
                alt=''
                width={24}
                height={24}
                className='cursor-pointer group-hover:translate-x-1 transition-transform duration-300'
              />
            </div>
          </div>
        </Link>
      )}
    </>
  )
}
