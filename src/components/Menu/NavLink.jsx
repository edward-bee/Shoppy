import { Link } from 'react-router-dom'

function NavLink ({ path, text }) {
  return (
    <li>
      <Link to={path} className='text-gray-500 hover:text-gray-700'>
        {text}
      </Link>
    </li>
  )
}

export default NavLink
