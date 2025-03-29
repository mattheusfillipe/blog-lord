// components/Header.tsx
import Image from 'next/image'

export default function Header() {
  return (
    <header className='bg-[var(--primary)] w-[1280px] flex justify-between items-center px-10 py-5 rounded-[12px]'>
      <Image src='/Logo.svg' alt='Logo' width={111} height={44} />

      <input
        type='text'
        placeholder='Buscar no Blog'
        className='bg-[var(--foreground)] rounded-lg px-4 py-2 placeholder:text-[var(--primary)] font-semibold text-[var(--primary)] w-[330px] h-[40px]'
      />

      <nav className='flex gap-6 font-semibold'>
        <a href='#'>Home</a>
        <a href='#'>Explore</a>
        <a href='#'>Compre Online</a>
        <a href='#'>Quem Somos</a>
      </nav>

      <div className='flex gap-4'>
        <a href='#'>
          <Image src='/Instagram.svg' alt='Logo' width={24} height={24} />
        </a>
        <a href='#'>
          <Image src='/TikTok.svg' alt='Logo' width={24} height={24} />
        </a>
        <a href='#'>
          <Image src='/YouTube.svg' alt='Logo' width={24} height={24} />
        </a>
        <a href='#'>
          <Image src='/WhatsApp.svg' alt='Logo' width={24} height={24} />
        </a>
      </div>
    </header>
  )
}
