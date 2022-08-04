import { useContext, useEffect, useState } from 'react'
import { Context as ProductContext } from '@/context/ProductContext'
import { getProducts } from '@/services/API'

function useProducts () {
  const { products, setProducts } = useContext(ProductContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProducts().then((res) => {
      setProducts(res)
      setLoading(false)
    })
  }, [])

  return { products, loading }
}

export default useProducts
