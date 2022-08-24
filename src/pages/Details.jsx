import Layout from '@/components/Layout'
import ProductDetails from '@/components/Details'
import useFetchData from '@/hooks/useFetchData'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '@/utils/constants'
import ProductDetailLoader from '@/components/Loaders/ProductDetail'

function Index () {
  const { id } = useParams()
  const { data, loading } = useFetchData(`${getSingleProduct}/${id}`)

  return (
    <Layout>
      {loading
        ? <ProductDetailLoader />
        : <ProductDetails product={data} />}
    </Layout>
  )
}

export default Index
