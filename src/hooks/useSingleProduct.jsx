import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '@/services/API'

function useSingleProduct () {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    getProductById(id).then((product) => {
      setProduct(product)
      setLoading(false)
    })
  }, [id])

  return { product, loading }
}

export default useSingleProduct
