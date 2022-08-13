// eslint-disable-next-line import/no-absolute-path
import svg from '/logo.svg'
import { Link } from 'react-router-dom'

function Logo () {
  return (
    <figure className='w-[40px] h-[40px]'>
      <Link to='/'>
        <img src={svg} alt='logo' className='object-contain w-full h-full' />
      </Link>
    </figure>
  )
}

export default Logo
