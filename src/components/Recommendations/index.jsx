import useFetchData from '@/hooks/useFetchData'
import { getRecommendations } from '@/constants'
import Card from './Card'
import Loader from '@/components/Loader'

function Recommendation () {
  const { data, loading } = useFetchData(getRecommendations)

  const products = data?.result || []

  return (
    <section className='py-6'>
      <h2 className='text-xl font-bold text-left mb-4'>
        Recomendaciones para ti
      </h2>
      {loading
        ? (
          <Loader />
          )
        : (
          <div className='grid grid-cols-auto-fill gap-3'>
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
          </div>
          )}
    </section>
  )
}

export default Recommendation
