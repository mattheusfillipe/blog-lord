'use client'

import { Banner } from '@/app/components/Banner'
import { Instagram } from '@/app/components/Instagram'
import { Lancamentos } from '@/app/components/Lancamentos'
import { Newsletter } from '@/app/components/Newsletter'
import { useBlogPosts } from '@/hooks/useBlogPosts'

export function Home() {
  const { loading, error } = useBlogPosts()

  if (loading)
    return <div className='bg-gray-300 w-screen h-screen animate-pulse' />
  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <Banner />
      <Instagram />
      <Lancamentos />
      <Newsletter />
      {/* Outras seções */}
    </>
  )
}
