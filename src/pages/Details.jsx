import Layout from '@/components/Layout'
import useFetchData from '@/hooks/useFetchData'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '@/utils/constants'
import ProductDetailLoader from '@/components/Loaders/ProductDetail'
import Slider from '@/components/Details/Slider'
import Characteristics from '@/components/Details/Characteristics'
import CartButton from '@/components/Details/CartButton'
import BuyButton from '@/components/Details/BuyButton'

function Index () {
  const { id } = useParams()
  const { data, loading } = useFetchData(`${getSingleProduct}/${id}`)

  return (
    <Layout>
      {loading
        ? (
          <ProductDetailLoader />
          )
        : (
          <section className='pb-4'>
            <div className='border rounded-md p-3 grid gap-6 lg:grid-cols-2'>
              <Slider images={data.images} name={data.name} />
              <div>
                <h1 className='text-xl font-bold mb-4'>{data.name}</h1>

                <div className='mb-4'>
                  <span className='text-3xl mr-1'>$</span>
                  <span className='text-3xl'>{data.price}</span>
                </div>

                <Characteristics characteristics={data.characteristics} />

                <div className='grid gap-3 mt-4'>
                  <BuyButton />
                  <CartButton />
                </div>
              </div>
            </div>
          </section>
          )}
    </Layout>
  )
}

export default Index
