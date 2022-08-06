import FILTER_OPTIONS from '@/constants/FILTER_OPTIONS'
import CheckBox from './CheckBox'
import { useState } from 'react'
import { getFilteredProducts } from '@/services/API'

function Drawer () {
  const [filter, setFilter] = useState(FILTER_OPTIONS)
  const [value, setValue] = useState('')
  const [price, setPrice] = useState('0-100')

  const handleChange = (e) => {
    setValue(e.target.value)
    resetCheckBox(e)
  }

  const resetCheckBox = (e) => {
    const newFilter = filter.map((item) => {
      item.value === e.target.value
        ? (item.checked = true)
        : (item.checked = false)

      return item
    })

    setFilter(newFilter)
  }

  const handlePrice = (e) => {
    const { value } = e.target

    setPrice(`0-${value}`)
  }

  const handleClick = () => {
    getFilteredProducts(price, value).then((res) => console.log(res))
  }

  return (
    <div className='pt-5 h-full grid grid-rows-[1fr,auto]'>
      <div>
        <div className='py-5 flex flex-col gap-3'>
          <h3 className='border-b text-lg pb-1'>Category</h3>
          {FILTER_OPTIONS.map(({ label, value, checked }) => (
            <CheckBox
              key={value}
              label={label}
              value={value}
              checked={checked}
              onChange={handleChange}
            />
          ))}
        </div>

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
      </div>

      <button
        className='w-full border px-10 py-2 font-bold text-black hover:text-white hover:bg-blue-500 hover:duration-100 rounded-md'
        onClick={handleClick}
      >
        Show Results
      </button>
    </div>
  )
}

export default Drawer
