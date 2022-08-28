import { Link } from 'react-router-dom'

function SelectOption ({ path, ...props }) {
  return (
    <Link
      to={`/search?category=${path}`}
      className='block px-4 py-3 text-black hover:text-white hover:bg-blue-500'
      {...props}
    >
      {path}
    </Link>
  )
}

export default SelectOption
