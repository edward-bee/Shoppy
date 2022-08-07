import useFilters from '@/hooks/useFilters'

function PriceRange () {
  const { handlePrice, filters } = useFilters()
  const { price } = filters

  return (
    <div className='py-5 border-y'>
      <div className='flex justify-between items-center pb-3'>
        <label htmlFor='priceRange' className='text-base'>
          Price Range
        </label>
        <span className='font-bold'>{price}</span>
      </div>
      <input
        id='priceRange'
        type='range'
        min='0'
        max='1000'
        onChange={(e) => handlePrice(e)}
        className='w-full h-2 bg-slate-200 rounded-lg appearance-none'
      />
    </div>
  )
}

export default PriceRange
