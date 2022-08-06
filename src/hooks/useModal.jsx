import { useState, useEffect } from 'react'

function useModal () {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    document.body.style.overflow = (isOpen) ? 'hidden' : 'auto'
  }, [isOpen])

  return { isOpen, toggle }
}

export default useModal
