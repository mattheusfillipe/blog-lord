import Image from 'next/image'

export function Footer() {
  return (
    <footer className='bg-[var(--primary)] w-full max-w-7xl flex flex-col gap-2.5 justify-center items-center mb-6 mt-12 py-6 rounded-[12px]'>
      <Image src='/Logo.svg' alt='Logo' width={111} height={44} />
      <p className='text-xs'>© 2025 Lord Perfumaria</p>
    </footer>
  )
}
