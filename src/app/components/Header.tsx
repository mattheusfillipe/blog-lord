// components/Header.tsx
import Image from 'next/image'
import SearchInput from './SearchInput'

export default function Header() {
  return (
    <header className='bg-[var(--primary)] w-[1280px] flex justify-between items-center px-10 py-5 rounded-[12px]'>
      <Image src='/Logo.svg' alt='Logo' width={111} height={44} />

      <SearchInput />

      <nav className='flex gap-6 font-semibold'>
        <a href='#'>Home</a>
        <a href='#'>Explore</a>
        <a href='https://lordperfumaria.com.br/' target='_blank'>
          Compre Online
        </a>
        <a href='#'>Quem Somos</a>
      </nav>

      <div className='flex gap-4'>
        <a href='https://www.instagram.com/lordperfumaria/' target='_blank'>
          <Image src='/Instagram.svg' alt='Logo' width={24} height={24} />
        </a>
        <a href='https://www.tiktok.com/@lordperfumaria' target='_blank'>
          <Image src='/TikTok.svg' alt='Logo' width={24} height={24} />
        </a>
        <a href='https://www.youtube.com/lordperfumaria' target='_blank'>
          <Image src='/YouTube.svg' alt='Logo' width={24} height={24} />
        </a>
        <a
          href='https://api.whatsapp.com/send/?phone=556133284888&text&type=phone_number&app_absent=0'
          target='_blank'
        >
          <Image src='/WhatsApp.svg' alt='Logo' width={24} height={24} />
        </a>
      </div>
    </header>
  )
}
