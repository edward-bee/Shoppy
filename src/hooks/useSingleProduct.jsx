import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '@/services/API'
import { Context as SingleProductContext } from '@/context/SingleProductContext'

function useSingleProduct () {
  const { setProduct, product } = useContext(SingleProductContext)
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
