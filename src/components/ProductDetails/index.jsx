import Slider from '@/components/Slider'
import Details from '@/components/Details'

function ProductDetails ({ product }) {
  const { name, description, price, images, stock } = product

  return (
    <section className='pt-4'>
      <div className='bg-white rounded-[4px] shadow-sm p-3 grid gap-3 md:grid-cols-2'>
        <Slider images={images} name={name} />
        <Details
          name={name}
          description={description}
          price={price}
          stock={stock}
        />
      </div>
    </section>
  )
}

export default ProductDetails
