'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/explore?search=${encodeURIComponent(searchTerm.trim())}`)
    }
    setSearchTerm('') // Clear the search input after submission
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e)
    }
  }

  return (
    <form onSubmit={handleSearch} className='relative w-[330px] h-[40px]'>
      <input
        type='text'
        placeholder='Buscar no Blog'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        className='bg-[var(--foreground)] rounded-lg px-4 py-2 placeholder:text-[var(--primary)] font-semibold text-[var(--primary)] w-full focus:outline-none focus:ring-2 focus:ring-[#ff4882]'
      />

      <button
        type='submit'
        className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
      >
        <Image src='/Search.svg' alt='Ícone de busca' width={24} height={24} />
      </button>
    </form>
  )
}
