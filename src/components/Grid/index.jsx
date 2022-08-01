import Product from '../Product'

function Grid () {
  return (
    <section className='mt-10'>
      <div className='grid justify-items-center gap-4 grid-cols-auto-fill '>
        <Product
          price='100'
          name='Producto'
          img='https://m.media-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg'
        />
        <Product
          price='100'
          name='Producto'
          img='https://m.media-amazon.com/images/I/51IIMW6-TbL._AC_SY580_.jpg'
        />
        <Product
          price='100'
          name='Producto'
          img='https://images-na.ssl-images-amazon.com/images/I/71rdsaOMvVL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL254_SR254,254_.jpg'
        />
      </div>
    </section>
  )
}

export default Grid
