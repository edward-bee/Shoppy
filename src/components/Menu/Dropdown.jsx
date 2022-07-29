import { AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Dropdown () {
  const [isOpen, setIsOpen] = useState(false)
  const [isUserOpen, setIsUserOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  const toggleUser = () => setIsUserOpen(!isUserOpen)

  return (
    <section className='order-1 md:order-2 md:grow'>
      <button onClick={toggle} className='block md:hidden'>
        <AiOutlineMenu size='24' />
      </button>

      <div
        className={`${
          isOpen ? 'grid' : 'hidden'
        } grid-rows-[60vh,auto] absolute top-0 left-0 h-screen w-screen bg-white px-4`}
      >
        <button onClick={toggle} className='absolute top-4 right-4'>
          <GrClose size='24' />
        </button>

        <ul className='flex flex-col pt-20'>
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

        <div className='space-x-6 hidden md:flex items-center relative'>
          <div className='h-10 w-10' onClick={toggleUser}>
            <img
              src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
              alt='user'
              className='rounded-full h-full w-full'
            />
          </div>

          <div
            className={`${
              isUserOpen ? 'block' : 'hidden'
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
    </section>
  )
}

export default Dropdown
