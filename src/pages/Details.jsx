import Layout from '@/components/Layout'
import ProductDetails from '@/components/Details'
import useFetchData from '@/hooks/useFetchData'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '@/constants'
import Loader from '@/components/Loader'

function Index () {
  const { id } = useParams()
  const { data, loading } = useFetchData(`${getSingleProduct}/${id}`)

  return (
    <Layout>
      {loading ? <Loader /> : <ProductDetails product={data} />}
    </Layout>
  )
}

export default Index
