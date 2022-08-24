import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md'
import Modal from '@/common/Modal'
import useModal from '@/hooks/useModal'
import Button from '@/common/Button'
import Link from './Link'

function Drawer () {
  const { isOpen, toggle } = useModal()
  return (
    <div className='flex items-center justify-center'>
      <Button
        size='smaller'
        onClick={toggle}
        aria-label='menu'
        icon={<MdOutlineMenu size={24} />}
      />
      <Modal isOpen={isOpen} toggle={toggle}>
        <Button
          onClick={toggle}
          icon={<MdOutlineClose size='24' />}
          size='smaller'
        />
        <ul>
          <Link path='/'>Inicio</Link>
          <Link path='/categories'>Categorías</Link>
          <Link path='/login'>Iniciar sesión</Link>
        </ul>
      </Modal>
    </div>
  )
}

export default Drawer
