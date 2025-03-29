import Image from 'next/image'

export default function SearchInput() {
  return (
    <div className='relative w-[330px] h-[40px]'>
      <input
        type='text'
        placeholder='Buscar no Blog'
        className='bg-[var(--foreground)] rounded-lg px-4 py-2 placeholder:text-[var(--primary)] font-semibold text-[var(--primary)] w-full'
      />

      <Image
        src='/Search.svg'
        alt='Ícone de busca'
        width={24}
        height={24}
        className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
      />
    </div>
  )
}
