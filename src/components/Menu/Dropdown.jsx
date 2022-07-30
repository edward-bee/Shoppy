import { AiOutlineMenu } from 'react-icons/ai'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import useMobileMenu from '@/hooks/useMobilMenu'

function Dropdown () {
  const { toggle, isOpen } = useMobileMenu()

  return (
    <section className='order-1 md:order-2 md:grow'>
      <button onClick={toggle} className='block md:hidden'>
        <AiOutlineMenu size='24' />
      </button>

      <MobileMenu toggle={toggle} isOpen={isOpen} />
      <DesktopMenu />
    </section>
  )
}

export default Dropdown
