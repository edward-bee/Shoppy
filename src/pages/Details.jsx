import ProductDetails from '@/components/Details'
import useProducts from '@/hooks/useProducts'

function Product () {
  const { products, loading } = useProducts()

  return (
    <>
      {
        loading ? <h1>Loading...</h1> : <ProductDetails products={products} />
      }
    </>
  )
}

export default Product
