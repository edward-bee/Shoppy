import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md'
import Modal from '@/common/Modal'
import useModal from '@/hooks/useModal'
import Button from '@/common/Button'
import Link from './Link'
import useAuth from '@/hooks/useAuth'
import {
  BiCategory,
  BiHomeAlt,
  BiLogIn,
  BiInfoCircle,
  BiLogOut,
  BiArrowFromLeft
} from 'react-icons/bi'

function Drawer () {
  const { isOpen, toggle } = useModal()
  const { jwtToken, logout } = useAuth()

  return (
    <div className='flex items-center justify-center'>
      <Button
        size='smaller'
        onClick={toggle}
        aria-label='menu'
        kind='unstyled'
        icon={<MdOutlineMenu size={24} />}
      />
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className='h-full grid gap-4 grid-rows-[auto,1fr,auto]'>
          <Button
            onClick={toggle}
            icon={<MdOutlineClose size='24' />}
            size='smaller'
            kind='unstyled'
          />
          <ul>
            <Link path='/'>
              <BiHomeAlt size='24' />
              Inicio
            </Link>
            <Link path='/categories'>
              <BiCategory size='24' />
              Categorías
            </Link>
            <Link path='/help'>
              <BiInfoCircle size='24' />
              Ayuda
            </Link>
          </ul>
          <ul>
            {jwtToken
              ? (
                <li
                  className='flex gap-2 items-center text-lg px-3 py-2 cursor-pointer'
                  onClick={logout}
                  data-id='logout-test'
                >
                  <BiLogOut size='24' />
                  Cerrar sesión
                </li>
                )
              : (
                <>
                  <Link path='/login'>
                    <BiLogIn size='24' />
                    Iniciar sesión
                  </Link>
                  <Link path='/register'>
                    <BiArrowFromLeft size='24' />
                    Registrarse
                  </Link>
                </>
                )}
          </ul>
        </div>
      </Modal>
    </div>
  )
}

export default Drawer
