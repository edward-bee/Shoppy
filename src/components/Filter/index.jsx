import { BiFilterAlt } from 'react-icons/bi'
import useModal from '@/hooks/useModal'
import Drawer from './Drawer'

function Filter () {
  const { isOpen, toggle } = useModal()

  return (
    <>
      <button className='border bg-white p-2 rounded-md' onClick={toggle}>
        <BiFilterAlt size='24' />
      </button>
      <Drawer isOpen={isOpen} toggle={toggle} />
    </>
  )
}

export default Filter
