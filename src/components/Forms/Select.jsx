import { clsx } from 'clsx'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

const SIZE = {
  lg: 'px-3 h-12 text-base',
  md: 'px-3 h-8 text-sm',
  sm: 'px-2 h-6 text-xs'
}

function Select ({ size = 'lg', isOpen, children, ...props }) {
  return (
    <div
      className={clsx(
        'flex items-center justify-between border rounded-[3px]',
        SIZE[size]
      )}
      {...props}
    >
      {children}
      {isOpen ? <BiChevronDown size='24' /> : <BiChevronUp size='24' />}
    </div>
  )
}

export default Select
