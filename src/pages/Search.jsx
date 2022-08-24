import Layout from '@/components/Layout'
import { useSearchParams } from 'react-router-dom'
import { getProducts } from '@/utils/constants'
import useFetchData from '@/hooks/useFetchData'
import Categories from '@/components/Categories'
import Grid from '@/components/Product/Grid'
import Card from '@/components/Product/Card'
import Pagination from '@/components/Search/Pagination'

function Index () {
  const [searchParams] = useSearchParams()
  const url = `${getProducts}&${searchParams}`
  const { data, loading } = useFetchData(url)
  const { result, nextPage, previusPage } = data || []

  return (
    <Layout>
      <section className='grid gap-3 pt-2 pb-4'>
        <Categories />
        {loading
          ? (
            <div>Loading...</div>
            )
          : (
            <>
              <Grid>
                {result?.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      id={item.id}
                      image={item.images[0]}
                      name={item.name}
                      category={item.category}
                    />
                  )
                })}
              </Grid>
              <Pagination nextPage={nextPage} previusPage={previusPage} />
            </>
            )}
      </section>
    </Layout>
  )
}

export default Index
