import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

type Post = {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  date: string
  categories: number[]
  jetpack_featured_media_url: string
}

type Category = {
  id: number
  name: string
}

type Params = {
  slug: string
}

export default async function LeituraMateria(props: { params: Params }) {
  const { slug } = props.params

  // 1. Pega o post atual
  const res = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/lordperfumariablog.wordpress.com/posts?slug=${slug}`
  )
  const posts: Post[] = await res.json()
  if (!posts.length) return notFound()
  const post = posts[0]

  // 2. Pega todas as categorias
  const categoriesRes = await fetch(
    'https://public-api.wordpress.com/wp/v2/sites/lordperfumariablog.wordpress.com/categories'
  )
  const allCategories: Category[] = await categoriesRes.json()
  const categoryMap: Record<number, string> = {}
  allCategories.forEach((cat) => {
    categoryMap[cat.id] = cat.name
  })

  // 3. Busca todos os posts para "leia mais"
  const allPostsRes = await fetch(
    'https://public-api.wordpress.com/wp/v2/sites/lordperfumariablog.wordpress.com/posts?per_page=100'
  )
  const allPosts: Post[] = await allPostsRes.json()

  function getNextPosts(
    allPosts: Post[],
    currentIndex: number,
    count = 3
  ): Post[] {
    const result: Post[] = []
    let i = (currentIndex + 1) % allPosts.length

    while (result.length < count && allPosts.length > 1) {
      if (i === currentIndex) break
      result.push(allPosts[i])
      i = (i + 1) % allPosts.length
    }

    return result
  }

  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const relatedPosts = getNextPosts(allPosts, currentIndex, 3)

  return (
    <main className='mt-12 flex flex-col w-[1280px] gap-6 justify-center'>
      {/* Banner */}
      <div className='relative rounded-xl pb-[40%] overflow-hidden p-3'>
        <Image
          src={post.jetpack_featured_media_url || '/Banner.jpg'}
          alt='Banner'
          fill
          className='object-cover'
        />
        <div className='absolute backdrop-blur-md bg-black/40 rounded-xl h-[110px] inset-x-0 mx-3 px-8 py-3 bottom-3 border-gray-300/80 border-[0.5px]'>
          <div className='flex items-center h-full justify-between'>
            <h2
              className='text-4xl font-bold max-w-[900px] line-clamp-2'
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div className='flex flex-col items-end gap-4'>
              <div className='flex gap-6 items-center'>
                <div className='flex items-center gap-2'>
                  <Image
                    src='/authorDefault.png'
                    alt='Autor'
                    width={28}
                    height={28}
                    className='object-cover rounded-full w-7 h-7'
                  />
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

              {/* Categorias */}
              {post.categories.length > 0 && (
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
      </div>

      {/* Conteúdo */}
      <div
        className='text-[var(--secondary)] font-normal leading-8 text-justify prose prose-lg'
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

      {/* Leia Mais */}
      <div className='w-full h-px bg-gray-300 mt-8' />
      <div className='flex items-center justify-between mt-6'>
        <div className='flex items-center gap-2'>
          <Image
            src='/Journal.svg'
            alt='Símbolo jornal'
            width={20}
            height={18}
          />
          <p className='font-semibold text-[var(--secondary)]'>Leia Mais</p>
        </div>
        <Link
          href='/explore'
          className='flex items-center gap-2 text-[var(--secondary)] font-semibold'
        >
          <p>Ver todas</p>
          <Image src='/Chevron.svg' alt='' width={6} height={12} />
        </Link>
      </div>

      <div className='flex justify-between gap-5 mt-6'>
        {relatedPosts.map((related) => (
          <div
            key={related.id}
            className='relative w-full h-56 rounded-xl overflow-hidden'
          >
            <Image
              src={related.jetpack_featured_media_url || '/fallback.jpg'}
              alt={related.title.rendered}
              fill
              className='object-cover'
            />
            <div className='absolute flex justify-between backdrop-blur-md bg-black/40 rounded-xl inset-x-0 py-2 px-4 bottom-3 mx-3 border-gray-300/80 border-[0.5px]'>
              <h2
                className='font-bold max-w-[400px] truncate'
                dangerouslySetInnerHTML={{ __html: related.title.rendered }}
              />
              <Link href={`/leitura-materia/${related.slug}`}>
                <Image src='/Arrow.svg' alt='' width={24} height={24} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
