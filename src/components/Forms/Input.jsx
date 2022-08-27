import { clsx } from 'clsx'

const SIZE = {
  lg: 'px-4 h-12 text-lg',
  md: 'px-3 h-10 text-base',
  sm: 'px-2 h-8 text-sm',
  xs: 'px-2 h-6 text-xs'
}

function Input ({ size = 'md', ...props }) {
  return (
    <input
      className={
        clsx(
          'w-full border rounded-[3px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder-slate-400',
          SIZE[size]
        )
      }
      {...props}
    />
  )
}

export default Input
