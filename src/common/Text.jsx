import { clsx } from 'clsx'

const KINDS = {
  primary: 'text-black font-bold',
  secondary: 'text-gray-600'
}

const SIZES = {
  small: 'text-sm',
  regular: 'text-base',
  large: 'text-lg'
}

const STYLE = {
  upper: 'uppercase',
  normal: 'normal-case'
}

function Text ({
  kind = 'primary',
  size = 'regular',
  style = 'normal',
  children,
  ...props
}) {
  return (
    <p
      className={clsx('text-', SIZES[size], KINDS[kind], STYLE[style])}
      {...props}
    >
      {children}
    </p>
  )
}

export default Text
