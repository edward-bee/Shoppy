import { Link } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import { useEffect } from 'react'

function MobileMenu ({ isOpen, toggle }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <div
      className={`${
        isOpen ? 'grid' : 'hidden'
      } grid-rows-[60vh,auto] absolute top-0 left-0 h-screen w-screen bg-white px-4 md:hidden`}
    >
      <button onClick={toggle} className='absolute top-4 right-4'>
        <GrClose size='24' />
      </button>

      <ul className='pt-20'>
        <li className='pb-10 w-full'>
          <Link to='/' className='text-xl font-medium block'>
            All
          </Link>
        </li>
        <li className='pb-10 w-full'>
          <Link to='/' className='text-xl font-medium block'>
            Clothes
          </Link>
        </li>
        <li className='pb-10 w-full'>
          <Link to='/' className='text-xl font-medium block'>
            Electronics
          </Link>
        </li>
        <li className='pb-10 w-full'>
          <Link to='/' className='text-xl font-medium block'>
            Toys
          </Link>
        </li>
        <li className='pb-10 w-full'>
          <Link to='/' className='text-xl font-medium block'>
            Others
          </Link>
        </li>
      </ul>

      <ul className='border-t pt-10'>
        <li className='pb-10 w-full'>
          <Link to='/' className='text-xl font-medium block'>
            My orders
          </Link>
        </li>
        <li className='pb-10 w-full'>
          <Link to='/' className='text-xl font-medium block'>
            My account
          </Link>
        </li>
        <li className='pt-20 w-full'>
          <Link to='/' className='text-xl font-medium block'>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
