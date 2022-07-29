import Dropdown from './Dropdown'
import Logo from './Logo'
import ShoppingCart from './ShoppingCart'

function Menu () {
  return (
    <header className='border-b pb-2'>
      <nav className='flex justify-between items-center w-[90%] mx-auto mt-2 gap-8'>
        <Dropdown />
        <Logo />
        <ShoppingCart />
      </nav>
    </header>
  )
}

export default Menu
