import React from 'react'

function ErrorMessage ({ children, ...props }) {
  return (
    <p className='text-red-500 pt-1 text-sm' {...props}>
      {children}
    </p>
  )
}

export default ErrorMessage
