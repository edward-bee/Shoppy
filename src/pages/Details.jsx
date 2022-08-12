import Layout from '@/components/Layout'
import ProductDetails from '@/components/Details'
import useFetchData from '@/hooks/useFetchData'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '@/constants'

function Index () {
  const { id } = useParams()
  const { data, loading } = useFetchData(`${getSingleProduct}/${id}`)

  return (
    <Layout>
      {loading ? <div>Loading...</div> : <ProductDetails product={data} />}
    </Layout>
  )
}

export default Index
