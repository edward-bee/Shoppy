import { Link } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'

function Category ({ path }) {
  return (
    <Link
      to={`/search?category=${path}`}
      className='bg-white shadow-sm border rounded-sm flex justify-between p-4 text-black hover:text-white hover:bg-blue-500'
    >
      {path}
      <BiChevronRight size='24' />
    </Link>
  )
}

export default Category
