import ShoppingCart from '../ShoppingCart'
import Logo from './Logo'
import MenuLinks from './MenuLinks'

function Menu () {
  return (
    <header>
      <nav className='pt-1 grid grid-cols-[auto,1fr,auto] gap-5 items-center'>
        <Logo />
        <MenuLinks />
        <ShoppingCart />
      </nav>
    </header>
  )
}

export default Menu
