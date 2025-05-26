import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const sourceSans = Source_Sans_3({
  variable: '--font-main',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Blog - Lord',
  description: 'Lord Perfumaria',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' className={sourceSans.variable}>
      <body className='antialiased flex flex-col items-center px-4 mt-10 w-full overflow-x-hidden'>
        <div className='w-full max-w-7xl'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
