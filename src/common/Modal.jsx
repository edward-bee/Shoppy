import { MdOutlineClose } from 'react-icons/md'

function Modal ({ children, toggle, isOpen, ...props }) {
  return (
    <div
      className={`${
        isOpen ? 'right-0' : 'right-[-100%]'
      } h-screen fixed top-0 w-[250px] md:w-[300px] bg-white shadow-lg duration-500 ease-in-out`}
      {...props}
    >
      {isOpen && (
        <div className='p-2 h-full'>
          <button onClick={toggle} className='absolute top-2 left-2'>
            <MdOutlineClose size='24' />
          </button>

          {children}
        </div>
      )}
    </div>
  )
}

export default Modal
