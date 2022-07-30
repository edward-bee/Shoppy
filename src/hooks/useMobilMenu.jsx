import { useState } from 'react'

function useMobileMenu () {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return { isOpen, toggle }
}

export default useMobileMenu
