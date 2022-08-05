import Product from '../Product'

function ProductGrid ({ products }) {
  return (
    <section className='mt-3 grid grid-cols-auto-fill gap-2'>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          image={product.images[0]}
          name={product.name}
          category={product.category}
        />
      ))}
    </section>
  )
}

export default ProductGrid
