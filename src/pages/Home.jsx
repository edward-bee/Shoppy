import Search from '@/components/Search'
import ProductGrid from '@/components/ProductGrid'
import Menu from '@/components/Menu'
import useProducts from '@/hooks/useProducts'
import Loader from '@/components/Loader'
import Container from '@/common/Container'

function Home () {
  const { products, loading } = useProducts()

  return (
    <Container>
      <Menu />
      <Search />
      {loading
        ? (
          <Loader />
          )
        : (
          <>
            <ProductGrid products={products} />
          </>
          )}
    </Container>
  )
}

export default Home
