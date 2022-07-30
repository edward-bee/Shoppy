import { useState, useRef, useEffect } from 'react'

function useDesktopMenu () {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current?.contains(e.target)) setIsOpen(false)
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return { isOpen, toggle, menuRef }
}

export default useDesktopMenu
