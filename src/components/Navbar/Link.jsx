import { Link } from 'react-router-dom'

function NavbarLink ({ path, children }) {
  return (
    <li>
      <Link to={path} className='block text-lg px-3 py-2'>
        {children}
      </Link>
    </li>
  )
}

export default NavbarLink
