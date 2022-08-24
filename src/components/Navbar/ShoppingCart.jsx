import { MdOutlineShoppingBag } from 'react-icons/md'
import Button from '@/common/Button'

function ShoppingCart () {
  return (
    <Button
      size='smaller'
      aria-label='shopping cart'
      kind='unstyled'
      icon={<MdOutlineShoppingBag size={24} />}
    />
  )
}

export default ShoppingCart
