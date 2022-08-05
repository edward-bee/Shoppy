import { FiShoppingCart } from 'react-icons/fi'
import useModal from '@/hooks/useModal'
import Modal from '@/common/Modal'

function ShoppingCart () {
  const { isOpen, toggle } = useModal()
  return (
    <>
      <button className='p-2 rounded-md' onClick={toggle}>
        <FiShoppingCart size='24' />
      </button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <p>Shopping Cart</p>
      </Modal>
    </>
  )
}

export default ShoppingCart
