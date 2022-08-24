import Grid from '@/components/Product/Grid'
import Card from '@/components/Product/Card'
import Categories from './Categories'
import Pagination from './Pagination'

function Search ({ products, nextPage, previusPage }) {
  return (
    <section className='grid gap-3 md:grid-cols-[auto,1fr] pt-2 pb-4'>
      <Categories />
      <div>
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
        <Pagination nextPage={nextPage} previusPage={previusPage} />
      </div>
    </section>
  )
}

export default Search
