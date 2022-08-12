import UserAvatar from './UserAvatar'
import Dropdown from './Dropdown'
import ShoppingCart from './ShoppingCart'

function Index () {
  return (
    <nav className='flex-1'>
      <ul className='flex items-center justify-end'>
        <ShoppingCart />
        <UserAvatar />
        <Dropdown />
      </ul>
    </nav>
  )
}

export default Index
