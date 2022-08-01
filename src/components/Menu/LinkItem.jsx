import { Link } from 'react-router-dom'

function LinkItem ({ children, ...props }) {
  return (
    <li className='px-4' {...props}>
      <Link to='/' className='text-xl md:text-lg font-medium block'>
        {children}
      </Link>
    </li>
  )
}

export default LinkItem
