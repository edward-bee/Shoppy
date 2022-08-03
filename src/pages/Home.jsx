import Search from '@/components/Search'
import ProductGrid from '@/components/ProductGrid'

function Home () {
  return (
    <div className='px-2 mx-auto max-w-7xl'>
      <Search />
      <ProductGrid />
    </div>
  )
}

export default Home
