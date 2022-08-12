import { MdOutlineShoppingBag } from 'react-icons/md'

function ShoppingCart () {
  return (
    <li className='flex items-center justify-center'>
      <button>
        <MdOutlineShoppingBag size={24} />
      </button>
    </li>
  )
}

export default ShoppingCart
