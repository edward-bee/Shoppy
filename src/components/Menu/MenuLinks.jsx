import NavLink from './NavLink'

function MenuLinks () {
  return (
    <ul className='grid grid-flow-col gap-4 items-center justify-center'>
      <NavLink path='/' text='Home' />
      <NavLink path='/login' text='Login' />
    </ul>
  )
}

export default MenuLinks
