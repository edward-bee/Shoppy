import SearchBar from '../SearchBar'
import NavbarRight from './NavbarRight'
import NavbarLeft from './NavbarLeft'

function Navbar () {
  return (
    <div className='px-6 mx-auto'>
      <div className='flex items-center justify-between py-3 gap-1'>
        <NavbarLeft />
        <SearchBar display='hidden' breakpoint='flex' />
        <NavbarRight />
      </div>

      <SearchBar display='flex' breakpoint='hidden' />
    </div>
  )
}

export default Navbar
