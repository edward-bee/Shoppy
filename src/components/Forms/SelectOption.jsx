import { Link } from 'react-router-dom'

function SelectOption ({ path }) {
  return (
    <Link
      to={`/search?category=${path}`}
      className='block px-4 py-3 text-black hover:text-white hover:bg-blue-500'
    >
      {path}
    </Link>
  )
}

export default SelectOption
