import Button from './Button'
import CheckboxGroup from './CheckboxGroup'
import PriceRange from './PriceRange'

function Drawer () {
  return (
    <div className='pt-5 h-full grid grid-rows-[1fr,auto]'>
      <div>
        <CheckboxGroup />
        <PriceRange />
      </div>

      <Button />
    </div>
  )
}

export default Drawer
