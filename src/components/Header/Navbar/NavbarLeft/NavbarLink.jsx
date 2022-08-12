import { Link } from 'react-router-dom'

function NavbarLink ({ path, children }) {
  return (
    <Link to={path} className='ml-4'>
      {children}
    </Link>
  )
}

export default NavbarLink
