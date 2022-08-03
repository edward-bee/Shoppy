import Product from '../Product'

function ProductGrid () {
  return (
    <section className='mt-3 grid grid-cols-auto-fill gap-2'>
      <Product
        image='https://www.apple.com/v/mac/home/bq/images/overview/compare/compare_mbam2__bdesjk99hf4i_small_2x.png'
        name='MacBook Air 13 (2019)'
        category='Laptop'
      />
      <Product
        image='https://www.apple.com/v/mac/home/bq/images/overview/compare/compare_imac24__bdgus6d1xqb6_large_2x.png'
        name='MacBook Air 13 (2019)'
        category='Laptop'
      />
      <Product
        image='https://www.apple.com/v/mac/home/bq/images/overview/compare/compare_mbam2__bdesjk99hf4i_small_2x.png'
        name='MacBook Air 13 (2019)'
        category='Laptop'
      />
      <Product
        image='https://www.apple.com/v/mac/home/bq/images/overview/compare/compare_imac24__bdgus6d1xqb6_large_2x.png'
        name='MacBook Air 13 (2019)'
        category='Laptop'
      />
    </section>
  )
}

export default ProductGrid
