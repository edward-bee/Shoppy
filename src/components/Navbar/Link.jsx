import { Link } from 'react-router-dom'

function NavbarLink ({ path, children, ...props }) {
  return (
    <li>
      <Link
        to={path}
        className='flex gap-2 items-center text-lg px-3 py-2'
        {...props}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavbarLink
