'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleClick = (href: string) => {
    router.push(href)
    setOpen(false)
  }

  return (
    <div className='md:hidden relative z-50'>
      {/* Botão hamburguer */}
      <button
        onClick={() => setOpen(!open)}
        className='relative w-8 h-6 flex items-center justify-center'
        aria-label='Abrir menu'
      >
        {/* Traço 1 */}
        <span
          className={`absolute block h-1 w-8 bg-white rounded transition-all duration-300 origin-left ${
            open ? 'rotate-45 top-0' : 'top-0 left-0'
          }`}
        />
        {/* Traço 2 */}
        <span
          className={`absolute block h-1 w-8 bg-white rounded transition-all duration-300 origin-left ${
            open ? 'opacity-0' : 'top-1/2 left-0 -translate-y-1/2'
          }`}
        />
        {/* Traço 3 */}
        <span
          className={`absolute block h-1 w-8 bg-white rounded transition-all duration-300 origin-left ${
            open ? '-rotate-45 -bottom-0.5' : 'bottom-0 left-0'
          }`}
        />
      </button>

      {/* Menu dropdown */}
      <nav
        className={`absolute top-12 right-0 w-56 bg-black/40 border border-gray-300/80 backdrop-blur-md rounded-xl shadow-lg transition-all duration-300 px-6 py-4 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className='flex flex-col gap-2 font-semibold text-xl'>
          {[
            { label: 'Home', href: '/' },
            { label: 'Explore', href: '/explore' },
            {
              label: 'Compre Online',
              href: 'https://lordperfumaria.com.br/',
              external: true,
            },
            { label: 'Quem Somos', href: '/quem-somos' },
          ].map(({ label, href, external }) => (
            <li key={label}>
              {external ? (
                <a
                  href={href}
                  target='_blank'
                  className='relative inline-block text-left w-full border-b pb-2 border-gray-300/80 '
                >
                  {label}
                </a>
              ) : (
                <button
                  onClick={() => handleClick(href)}
                  className='relative inline-block text-left w-full border-b pb-2 border-gray-300/80 '
                >
                  {label}
                </button>
              )}
            </li>
          ))}
          <li>
            <div className='flex gap-5 mt-2 justify-between'>
              <a
                href='https://www.instagram.com/lordperfumaria/'
                target='_blank'
              >
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
          </li>
        </ul>
      </nav>
    </div>
  )
}
