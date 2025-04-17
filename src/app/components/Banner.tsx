import Image from 'next/image'
import Link from 'next/link'

export function Banner() {
  return (
    <section className='px-0 mt-8 w-[1280px]'>
      <div className='container'>
        {/* Título e link "Ver todas" */}
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-2'>
            <Image
              src='/Journal.svg'
              alt='Simbbolo jornal'
              width={20}
              height={18}
            />
            <p className='font-semibold text-[var(--secondary)]'>
              Últimas do Blog Lord
            </p>
          </div>
          <Link
            href={'/explore'}
            className='flex items-center gap-2 text-[var(--secondary)] font-semibold'
          >
            <p>Ver todas</p>
            <Image src='/Chevron.svg' alt='' width={6} height={12} />
          </Link>
        </div>

        {/* Banner */}
        <div className='grid grid-cols-[800px_460px] gap-5 h-[493px]'>
          {/* Banner Primário */}
          <div className='relative row-span-2 rounded-xl overflow-hidden p-3'>
            <Image
              src='/Banner.jpg'
              alt='Banner'
              fill
              className='object-cover'
            />
            <div className='absolute backdrop-blur-md bg-black/30 rounded-xl h-[110px] inset-x-0 mx-3 px-8 py-3 bottom-3 border-gray-300/80 border-[0.5px]'>
              <div className='flex items-center justify-between'>
                <h2 className='text-4xl font-bold max-w-[652px] truncate'>
                  Lorem ipsum dolor sit amet, consectetur ad...
                </h2>
                <Image
                  src='/Arrow.svg'
                  alt=''
                  width={40}
                  height={40}
                  className='cursor-pointer'
                />
              </div>

              <div className='flex justify-between items-center mt-4'>
                <div className='flex gap-6 items-center'>
                  <div className='flex items-center gap-2'>
                    <Image
                      src='/Banner.jpg'
                      alt='Foto autor do post'
                      width={28}
                      height={28}
                      className='object-cover rounded-full overflow-hidden w-7 h-7'
                    />
                    <p className='font-medium text-[var-(--primary)]'>
                      Jane Doe
                    </p>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <Image
                      src='/Calendar.svg'
                      alt='Calendário ícone'
                      width={24}
                      height={24}
                    />
                    <p className='font-medium text-[var-(--primary)]'>
                      12 Out, 2025
                    </p>
                  </div>
                </div>

                <div className='flex gap-2 items-center'>
                  <div className='border-[0.5px] bg-black/20 border-[var(--background)] rounded-md py-1 px-2'>
                    <p className='text-[12px]'>Beleza</p>
                  </div>

                  <div className='border-[0.5px] bg-black/20 border-[var(--background)] rounded-md py-1 px-2'>
                    <p className='text-[12px]'>Perfume</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Banner secundário 1 */}
          <div className='relative rounded-xl overflow-hidden'>
            <Image
              src='/Banner.jpg'
              alt='Banner'
              fill
              className='object-cover'
            />

            {/* Overlay com informações do post */}
            <div className='absolute flex justify-between items-center bg-black/30 rounded-lg top-3 mx-3 px-4 py-2 border-gray-300/80 border-[0.5px] backdrop-blur-md'>
              <div className='flex gap-3 items-center'>
                <div className='flex items-center gap-1'>
                  <Image
                    src='/Banner.jpg'
                    alt='Foto autor do post'
                    width={16}
                    height={16}
                    className='object-cover rounded-full overflow-hidden w-4 h-4'
                  />
                  <p className='text-sm font-medium text-[var-(--primary)]'>
                    Jane Doe
                  </p>
                </div>

                <div className='flex gap-1 items-center'>
                  <Image
                    src='/Calendar.svg'
                    alt='Calendário ícone'
                    width={16}
                    height={16}
                  />
                  <p className='text-sm font-medium text-[var-(--primary)]'>
                    12 Out, 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Overlay com categorias */}
            <div className='absolute top-3 right-3 flex gap-2 items-center '>
              <div className='border-[0.5px] bg-black/30 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'>
                <p className='text-[12px]'>Beleza</p>
              </div>

              <div className='border-[0.5px] bg-black/30 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'>
                <p className='text-[12px]'>Perfume</p>
              </div>
            </div>

            {/* Overlay com título e botão de leitura */}
            <div className='absolute flex justify-between backdrop-blur-md bg-black/30 rounded-xl inset-x-0 py-2 px-4 bottom-3 mx-3 border-gray-300/80 border-[0.5px]'>
              <h2 className='font-bold max-w-[400px] truncate'>
                Lorem ipsum dolor sit amet, consectetur ad...
              </h2>
              <Image
                src='/Arrow.svg'
                alt=''
                width={24}
                height={24}
                className='cursor-pointer'
              />
            </div>
          </div>

          {/* Banner secundário 2 */}
          <div className='relative rounded-xl overflow-hidden'>
            <Image
              src='/Banner.jpg'
              alt='Banner'
              fill
              className='object-cover'
            />

            {/* Overlay com informações do post */}
            <div className='absolute flex justify-between items-center bg-black/30 rounded-lg top-3 mx-3 px-4 py-2 border-gray-300/80 border-[0.5px] backdrop-blur-md'>
              <div className='flex gap-3 items-center'>
                <div className='flex items-center gap-1'>
                  <Image
                    src='/Banner.jpg'
                    alt='Foto autor do post'
                    width={16}
                    height={16}
                    className='object-cover rounded-full overflow-hidden w-4 h-4'
                  />
                  <p className='text-sm font-medium text-[var-(--primary)]'>
                    Jane Doe
                  </p>
                </div>

                <div className='flex gap-1 items-center'>
                  <Image
                    src='/Calendar.svg'
                    alt='Calendário ícone'
                    width={16}
                    height={16}
                  />
                  <p className='text-sm font-medium text-[var-(--primary)]'>
                    12 Out, 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Overlay com categorias */}
            <div className='absolute top-3 right-3 flex gap-2 items-center '>
              <div className='border-[0.5px] bg-black/30 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'>
                <p className='text-[12px]'>Beleza</p>
              </div>

              <div className='border-[0.5px] bg-black/30 border-[var(--background)] rounded-md py-1 px-2 backdrop-blur-md'>
                <p className='text-[12px]'>Perfume</p>
              </div>
            </div>

            {/* Overlay com título e botão de leitura */}
            <div className='absolute flex justify-between backdrop-blur-md bg-black/30 rounded-xl inset-x-0 py-2 px-4 bottom-3 mx-3 border-gray-300/80 border-[0.5px]'>
              <h2 className='font-bold max-w-[400px] truncate'>
                Lorem ipsum dolor sit amet, consectetur ad...
              </h2>
              <Image
                src='/Arrow.svg'
                alt=''
                width={24}
                height={24}
                className='cursor-pointer'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
