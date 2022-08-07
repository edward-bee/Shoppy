import Button from './Button'
import CheckboxGroup from './CheckboxGroup'
import ClearAll from './Header'
import PriceRange from './PriceRange'

function Drawer () {
  return (
    <div className='h-full grid grid-rows-[auto,1fr,auto]'>
      <ClearAll />

      <div>
        <CheckboxGroup />
        <PriceRange />
      </div>

      <Button />
    </div>
  )
}

export default Drawer
