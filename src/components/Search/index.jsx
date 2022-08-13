import Categories from './Categories'
import Products from './Products'
import Pagination from './Pagination'

function Search ({ products, nextPage, previusPage }) {
  return (
    <section className='grid gap-3 md:grid-cols-[auto,1fr] pt-2 pb-4'>
      <Categories />
      <div>
        <Products products={products} />
        <Pagination nextPage={nextPage} previusPage={previusPage} />
      </div>
    </section>
  )
}

export default Search
