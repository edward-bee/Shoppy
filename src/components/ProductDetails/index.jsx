import Slider from '@/components/Slider'
import Details from '@/components/Details'

function ProductDetails ({ product }) {
  const { name, description, price, images } = product

  return (
    <section className='pt-3'>
      <div className='border rounded-md grid md:grid-cols-2'>
        <Slider images={images} name={name} />
        <Details name={name} description={description} price={price} />
      </div>
    </section>
  )
}

export default ProductDetails
