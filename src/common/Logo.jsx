// eslint-disable-next-line import/no-absolute-path
import svg from '/logo.svg'
import { Link } from 'react-router-dom'

function Logo () {
  return (
    <figure>
      <Link to='/'>
        <img src={svg} alt='logo' className='w-[40px] h-[40px]' />
      </Link>
    </figure>
  )
}

export default Logo
