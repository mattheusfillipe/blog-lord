import { useState, useEffect } from 'react'

interface Product {
  title: string
  link: string
  image: string
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/produtos')
        const data = await res.json()
        setProducts(data)
        setLoading(false)
      } catch (err) {
        console.error('Erro ao buscar produtos:', err)
        setError(err as Error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}
