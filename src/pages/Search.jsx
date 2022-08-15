import Layout from '@/components/Layout'
import Search from '@/components/Search'
import { useSearchParams } from 'react-router-dom'
import { getProducts } from '@/constants'
import useFetchData from '@/hooks/useFetchData'
import Loader from '@/components/Loader'

function Index () {
  const [searchParams] = useSearchParams()
  const url = `${getProducts}&${searchParams}`
  const { data, loading } = useFetchData(url)
  const { result, nextPage, previusPage } = data || []

  return (
    <Layout>
      {loading
        ? (
          <Loader />
          )
        : (
          <Search
            products={result}
            nextPage={nextPage}
            previusPage={previusPage}
          />
          )}
    </Layout>
  )
}

export default Index
