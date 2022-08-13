import { Link } from 'react-router-dom'

function Category ({ path, children }) {
  return (
    <li className='px-4 py-3 md:p-0 md:pb-4'>
      <Link to={`/search?category=${path}`}>{children}</Link>
    </li>
  )
}

export default Category
