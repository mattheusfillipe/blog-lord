import Image from 'next/image'

export function Lancamentos() {
  return (
    <section className='px-0 mt-4 w-[1280px]'>
      {/* Título */}
      <div className='w-full h-px bg-gray-300 mb-6' />
      <div className='flex items-center gap-2'>
        <Image src='/Flame.png' alt='Simbbolo jornal' width={15} height={20} />
        <p className='font-semibold text-[var(--secondary)]'>
          Últimos Lançamentos
        </p>
      </div>

      {/* Cards */}
      <div className='flex mt-6 justify-between'>
        {/* Conteúdo 1*/}
        <div className='w-[223px] h-[355px]'>
          <div className='relative w-[223px] h-[300px]'>
            <Image
              src='/image.png'
              alt='Simbbolo jornal'
              fill
              className='object-contain'
            />
          </div>
          <div className='flex items-center justify-between mt-2 px-2.5'>
            <div>
              <h2 className='text-[var(--secondary)] font-semibold'>Toy Boy</h2>
              <p className='text-xs text-[var(--secondary)]'>
                Moschino - Masculino
              </p>
            </div>

            <a href='#'>
              <div className='bg-[var(--primary)] rounded-md'>
                <Image src='Arrow.svg' alt='Seta' width={28} height={28} />
              </div>
            </a>
          </div>
        </div>

        {/* Conteúdo 2*/}
        <div className='w-[223px] h-[355px]'>
          <div className='relative w-[223px] h-[300px]'>
            <Image
              src='/image-1.png'
              alt='Simbbolo jornal'
              fill
              className='object-contain'
            />
          </div>
          <div className='flex items-center justify-between mt-2 px-2.5'>
            <div>
              <h2 className='text-[var(--secondary)] font-semibold'>Toy Boy</h2>
              <p className='text-xs text-[var(--secondary)]'>
                Moschino - Masculino
              </p>
            </div>

            <a href='#'>
              <div className='bg-[var(--primary)] rounded-md'>
                <Image src='Arrow.svg' alt='Seta' width={28} height={28} />
              </div>
            </a>
          </div>
        </div>

        {/* Conteúdo 3*/}
        <div className='w-[223px] h-[355px]'>
          <div className='relative w-[223px] h-[300px]'>
            <Image
              src='/image-2.png'
              alt='Simbbolo jornal'
              fill
              className='object-contain'
            />
          </div>
          <div className='flex items-center justify-between mt-2 px-2.5'>
            <div>
              <h2 className='text-[var(--secondary)] font-semibold'>Toy Boy</h2>
              <p className='text-xs text-[var(--secondary)]'>
                Moschino - Masculino
              </p>
            </div>

            <a href='#'>
              <div className='bg-[var(--primary)] rounded-md'>
                <Image src='Arrow.svg' alt='Seta' width={28} height={28} />
              </div>
            </a>
          </div>
        </div>

        {/* Conteúdo 4*/}
        <div className='w-[223px] h-[355px]'>
          <div className='relative w-[223px] h-[300px]'>
            <Image
              src='/image-3.png'
              alt='Simbbolo jornal'
              fill
              className='object-contain'
            />
          </div>
          <div className='flex items-center justify-between mt-2 px-2.5'>
            <div>
              <h2 className='text-[var(--secondary)] font-semibold'>Toy Boy</h2>
              <p className='text-xs text-[var(--secondary)]'>
                Moschino - Masculino
              </p>
            </div>

            <a href='#'>
              <div className='bg-[var(--primary)] rounded-md'>
                <Image src='Arrow.svg' alt='Seta' width={28} height={28} />
              </div>
            </a>
          </div>
        </div>

        {/* Conteúdo 5*/}
        <div className='w-[223px] h-[355px]'>
          <div className='relative w-[223px] h-[300px]'>
            <Image
              src='/image-4.png'
              alt='Simbbolo jornal'
              fill
              className='object-contain'
            />
          </div>
          <div className='flex items-center justify-between mt-2 px-2.5'>
            <div>
              <h2 className='text-[var(--secondary)] font-semibold'>Toy Boy</h2>
              <p className='text-xs text-[var(--secondary)]'>
                Moschino - Masculino
              </p>
            </div>
            <a href='#'>
              <div className='bg-[var(--primary)] rounded-md'>
                <Image src='Arrow.svg' alt='Seta' width={28} height={28} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
