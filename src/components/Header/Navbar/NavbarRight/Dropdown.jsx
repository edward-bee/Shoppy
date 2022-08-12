import { MdOutlineMenu } from 'react-icons/md'
import Modal from '@/common/Modal'
import useModal from '@/hooks/useModal'
import { Link } from 'react-router-dom'

function Dropdown () {
  const { isOpen, toggle } = useModal()
  return (
    <li className='ml-6 flex items-center justify-center md:hidden'>
      <button onClick={toggle} aria-label='menu'>
        <MdOutlineMenu size={24} />
      </button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ul className='flex flex-col mt-4'>
          <li className='text-xl font-bold mb-2'>
            <Link to='/'>Inicio</Link>
          </li>
          <li className='text-xl font-bold mb-2'>
            <Link to='/'>Ayuda</Link>
          </li>
        </ul>
      </Modal>
    </li>
  )
}

export default Dropdown
