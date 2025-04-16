import Image from 'next/image'
import InstagramFeed from './InstagramFeed'

export default function Banner() {
  return (
    <section className='mx-0 my-12 p-8 w-[1280px] h-64 bg-[var(--primary)] rounded-xl'>
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center gap-2'>
          <svg
            className='w-5 h-5 text-[var(--foreground)]'
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
          <p className='font-semibold text-[var(--foreground)]'>
            Últimas do Instagram
          </p>
        </div>
        <a
          href='http://instagram.com/lordperfumaria'
          target='_blank'
          className='text-[var(--foreground)] flex items-center gap-2'
        >
          <p>Ver todas</p>
          <svg
            className='w-3 h-3 text-[var(--foreground)]'
            fill='none'
            viewBox='0 0 8 15'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.00005 1.5C1.00005 1.5 7 5.9189 7 7.5C7 9.0812 1 13.5 1 13.5'
              stroke='currentColor'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </a>
      </div>
      <InstagramFeed />
    </section>
  )
}
