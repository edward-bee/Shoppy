import Layout from '@/components/Layout'
import useFetchData from '@/hooks/useFetchData'
import { getRecommendations } from '@/utils/constants'
import Card from '@/components/Product/Card'
import ProductLoader from '@/components/Loaders/ProductCard'
import Grid from '@/components/Product/Grid'

function Index () {
  const { data, loading } = useFetchData(getRecommendations)

  const products = data?.result || []

  return (
    <Layout>
      <section className='py-6'>
        <h2 className='text-xl font-bold text-left mb-4'>
          Recomendaciones para ti
        </h2>
        {loading
          ? (
            <Grid>
              <ProductLoader />
              <ProductLoader />
              <ProductLoader />
              <ProductLoader />
              <ProductLoader />
              <ProductLoader />
              <ProductLoader />
              <ProductLoader />
            </Grid>
            )
          : (
            <Grid>
              {products?.map((item) => {
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
            )}
      </section>
    </Layout>
  )
}

export default Index
