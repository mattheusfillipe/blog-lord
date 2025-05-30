// components/Header.tsx
import Image from 'next/image'
import SearchInput from './SearchInput'
import Link from 'next/link'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <div className='w-full max-w-7xl'>
      <header className='bg-[var(--primary)] flex justify-between items-center px-10 py-5 rounded-[12px]'>
        {/* Logo desktop */}
        <div className='hidden lg:flex items-center'>
          <Link href='/'>
            <Image src='/Logo.svg' alt='Logo' width={111} height={44} />
          </Link>
        </div>

        {/* Logo mobile */}
        <div className='flex lg:hidden items-center'>
          <Link href='/'>
            <Image src='/Logo-Mobile.svg' alt='Logo' width={80} height={44} />
          </Link>
        </div>

        <div className='hidden xl:flex items-center gap-4'>
          <SearchInput />
        </div>

        {/* Menu Desktop  */}
        <nav className='gap-6 font-semibold hidden md:flex'>
          <Link
            href='/'
            className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            href='/explore'
            className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Explore
          </Link>
          <a
            href='https://lordperfumaria.com.br/'
            className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            target='_blank'
          >
            Compre Online
          </a>
          <Link
            href='/quem-somos'
            className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Quem Somos
          </Link>
        </nav>

        {/* Menu mobile  */}
        <MobileMenu />

        {/* Redes sociais */}
        <div className='hidden md:flex gap-4'>
          <a
            href='https://www.instagram.com/lordperfumaria/'
            target='_blank'
            className='hover:scale-105 transition-all duration-300'
          >
            <Image src='/Instagram.svg' alt='Logo' width={24} height={24} />
          </a>
          <a
            href='https://www.tiktok.com/@lordperfumaria'
            target='_blank'
            className='hover:scale-105 transition-all duration-300'
          >
            <Image src='/TikTok.svg' alt='Logo' width={24} height={24} />
          </a>
          <a
            href='https://www.youtube.com/lordperfumaria'
            target='_blank'
            className='hover:scale-105 transition-all duration-300'
          >
            <Image src='/YouTube.svg' alt='Logo' width={24} height={24} />
          </a>
          <a
            href='https://api.whatsapp.com/send/?phone=556133284888&text&type=phone_number&app_absent=0'
            target='_blank'
            className='hover:scale-105 transition-all duration-300'
          >
            <Image src='/WhatsApp.svg' alt='Logo' width={24} height={24} />
          </a>
        </div>
      </header>
    </div>
  )
}
