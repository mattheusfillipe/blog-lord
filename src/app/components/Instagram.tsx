import Image from 'next/image'
import InstagramFeed from './InstagramFeed'

export default function Banner() {
  return (
    <section className='px-0 m-0 py-8 w-[1280px]'>
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center gap-2'>
          <svg
            className='w-5 h-5 text-[var(--primary)]'
            fill='none'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinejoin='round'
            />
            <path
              d='M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z'
              stroke='currentColor'
              strokeWidth='1.5'
            />
            <path
              d='M17.5078 6.5H17.4988'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <p className='font-semibold text-[var(--secondary)]'>
            Últimas do Instagram
          </p>
        </div>
        <a
          href='http://instagram.com/lordperfumaria'
          target='_blank'
          className='text-[var(--secondary)] flex items-center gap-2 hover:text-[var(--primary)]'
        >
          <p>Ver todas</p>
          <Image src='/Chevron.svg' alt='' width={6} height={12} />
        </a>
      </div>
      <div className='bg-[var(--primary)] h-64 rounded-lg p-4'>
        <InstagramFeed />
      </div>
    </section>
  )
}
