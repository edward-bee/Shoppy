import useFilters from '@/hooks/useFilters'

function PriceRange () {
  const { handlePrice, filters } = useFilters()
  const { price } = filters
  const a = price.split('-')[0]
  const b = price.split('-')[1]

  return (
    <div className='py-4 border-y'>
      <h3 htmlFor='priceRange' className='text-lg pb-2'>
        Price Range
      </h3>

      <input
        id='priceRange'
        type='range'
        min='0'
        max='1000'
        onChange={(e) => handlePrice(e)}
        className='w-full h-2 bg-slate-200 rounded-lg appearance-none'
      />

      <div className='flex justify-between pt-4'>
        <span className='font-bold'>${a}</span>
        <span className='font-bold'>${b}</span>
      </div>
    </div>
  )
}

export default PriceRange
