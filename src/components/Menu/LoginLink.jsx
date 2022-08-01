import { Link } from 'react-router-dom'

function LoginLink () {
  return (
    <li className='p-4 md:p-0'>
      <Link to='/' className='text-xl md:text-lg font-medium block'>
        Sign in
      </Link>
    </li>
  )
}

export default LoginLink
