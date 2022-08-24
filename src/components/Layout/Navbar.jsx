import Logo from '@/common/Logo'
import SearchBar from './SearchBar'
import Dropdown from '@/components/Navbar/Drawer'
import ShoppingCart from '@/components/Navbar/ShoppingCart'

function Navbar () {
  return (
    <div className='content-wrapper py-3 grid grid-cols-[auto,1fr,auto] gap-3'>
      <Logo />
      <SearchBar />
      <div className='flex-1 flex items-center justify-end'>
        <ShoppingCart />
        <Dropdown />
      </div>
    </div>
  )
}

export default Navbar
