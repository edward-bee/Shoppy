import LinkItem from './LinkItem'
import { GrClose } from 'react-icons/gr'
import LoginLink from './LoginLink'

function MobileMenu ({ isOpen, toggle }) {
  return (
    <div
      className={`${
        isOpen ? 'left-0' : 'left-[-200%]'
      } duration-500 md:duration-0 fixed top-0 left-0 h-screen w-[320px] bg-white shadow-2xl grid md:grid md:static md:shadow-none md:h-auto md:w-auto md:justify-between md:items-center md:grid-cols-[1fr,auto]
    `}
    >
      <button onClick={toggle} className='absolute top-4 right-4 md:hidden'>
        <GrClose size='24' />
      </button>

      <ul className='flex flex-col justify-evenly max-w-xl md:flex-row md:justify-start lg:justify-evenly'>
        <LinkItem>All</LinkItem>
        <LinkItem>Clothes</LinkItem>
        <LinkItem>Electronics</LinkItem>
        <LinkItem>Toys</LinkItem>
        <LinkItem>Books</LinkItem>
      </ul>

      <ul className='flex flex-col justify-end border-t md:border-t-0'>
        <LoginLink>Login</LoginLink>
      </ul>
    </div>
  )
}

export default MobileMenu
