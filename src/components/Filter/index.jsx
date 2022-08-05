import { BiFilterAlt } from 'react-icons/bi'
import useModal from '@/hooks/useModal'
import Modal from '@/common/Modal'

function Filter () {
  const { isOpen, toggle } = useModal()

  return (
    <>
      <button className='border bg-white p-2 rounded-md' onClick={toggle}>
        <BiFilterAlt size='24' />
      </button>

      <Modal isOpen={isOpen} toggle={toggle}>
        <p>Filter</p>
      </Modal>
    </>
  )
}

export default Filter
