import useOnClickOutside from '@/hooks/useOnClickOutside'
import { useRef } from 'react'

function Modal ({ children, toggle, isOpen, ...props }) {
  const modalRef = useRef()

  useOnClickOutside(modalRef, toggle, isOpen)

  return (
    <div
      className={`${
        isOpen ? 'right-0' : 'right-[-100%]'
      } h-screen fixed top-0 w-[250px] md:w-[300px] bg-white shadow-lg duration-500 ease-in-out z-50`}
      {...props}
    >
      {isOpen && (
        <div className='py-2 h-full' ref={modalRef}>
          {children}
        </div>
      )}
    </div>
  )
}

export default Modal
