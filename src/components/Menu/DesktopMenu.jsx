import { Link } from 'react-router-dom'
import useDesktopMenu from '@/hooks/useDesktopMenu'

function DesktopMenu () {
  const { isOpen, toggle, menuRef } = useDesktopMenu()

  return (
    <div className='flex justify-between'>
      <ul className='space-x-6 hidden md:flex items-center'>
        <li>
          <Link to='/' className='text-xl font-medium block'>
            All
          </Link>
        </li>
        <li>
          <Link to='/' className='text-xl font-medium block'>
            Clothes
          </Link>
        </li>
        <li>
          <Link to='/' className='text-xl font-medium block'>
            Electronics
          </Link>
        </li>
        <li>
          <Link to='/' className='text-xl font-medium block'>
            Toys
          </Link>
        </li>
        <li>
          <Link to='/' className='text-xl font-medium block'>
            Others
          </Link>
        </li>
      </ul>

      <div className='space-x-6 hidden md:flex items-center relative' ref={menuRef}>
        <div className='h-10 w-10' onClick={toggle}>
          <img
            src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
            alt='user'
            className='rounded-full h-full w-full'
          />
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } top-10 right-8 absolute shadow-sm bg-white px-4 py-2 border rounded-lg w-40`}
        >
          <ul className='flex flex-col'>
            <li className='pb-2'>
              <Link to='/' className='text-xl font-medium block'>
                My orders
              </Link>
            </li>
            <li className='pb-2'>
              <Link to='/' className='text-xl font-medium block'>
                My account
              </Link>
            </li>
            <li className='pt-2 border-t'>
              <Link to='/' className='text-xl font-medium block'>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DesktopMenu
