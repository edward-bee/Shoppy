import { useEffect } from 'react'

function useOnClickOutside (ref, handler, state) {
  useEffect(() => {
    const listener = (e) => {
      if (state && ref.current && !ref.current.contains(e.target)) handler()
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [state])
}

export default useOnClickOutside
