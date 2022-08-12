import NavbarLink from './NavbarLink'

function NavLinks () {
  return (
    <nav className='hidden md:flex ml-2'>
      <ul>
        <NavbarLink path='/'>Inicio</NavbarLink>
        <NavbarLink path='/'>Ayuda</NavbarLink>
      </ul>
    </nav>
  )
}

export default NavLinks
