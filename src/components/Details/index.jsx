import Slider from './Slider'
import Characteristics from './Characteristics'
import CartButton from './CartButton'
import BuyButton from './BuyButton'

function Index ({ product }) {
  return (
    <section className='pb-4'>
      <div className='border rounded-md p-3 grid gap-6 lg:grid-cols-2'>
        <Slider images={product.images} name={product.name} />
        <div>
          <h1 className='text-xl font-bold mb-4'>{product.name}</h1>

          <div className='mb-4'>
            <span className='text-3xl mr-1'>$</span>
            <span className='text-3xl'>{product.price}</span>
          </div>

          <Characteristics characteristics={product.characteristics} />

          <div className='grid gap-3 mt-4'>
            <BuyButton />
            <CartButton />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
