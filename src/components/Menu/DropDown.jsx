import { AiOutlineMenu } from 'react-icons/ai'
import Menu from './Menu'
import useMenu from '@/hooks/useMenu'

function Dropdown () {
  const { toggle, isOpen } = useMenu()

  return (
    <section className='order-1 md:order-2 md:grow'>
      <button onClick={toggle} className='block md:hidden'>
        <AiOutlineMenu size='24' />
      </button>

      <Menu toggle={toggle} isOpen={isOpen} />
    </section>
  )
}

export default Dropdown
