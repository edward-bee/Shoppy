import { clsx } from 'clsx'

const KINDS = {
  primary: 'border text-black hover:text-white hover:bg-blue-500',
  secondary: 'bg-blue-600 hover:bg-blue-500 text-white',
  default: ''
}

const SIZES = {
  smaller: 'h-6 px-2 text-xs',
  small: 'h-8 px-3 text-sm',
  regular: 'h-10 px-4 text-base',
  large: 'h-12 px-6 text-lg'
}

const VARIANT = {
  outline: 'border',
  ghost: 'border-transparent',
  unstyle: ''
}

function Button ({
  kind = 'default',
  size = 'regular',
  variant = 'ghost',
  icon,
  children,
  ...props
}) {
  return (
    <button
      className={clsx(
        'font-bold rounded-md hover:duration-100',
        KINDS[kind],
        SIZES[size],
        VARIANT[variant]
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}

export default Button
