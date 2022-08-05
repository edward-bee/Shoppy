import ProductDetails from '@/components/ProductDetails'
import Menu from '@/components/Menu'
import Container from '@/common/Container'
import useSingleProduct from '@/hooks/useSingleProduct'
import Loader from '@/components/Loader'

function Product () {
  const { product, loading } = useSingleProduct()

  console.log(product)

  return (
    <Container>
      <Menu />
      {loading ? <Loader /> : <ProductDetails product={product} />}
    </Container>
  )
}

export default Product
