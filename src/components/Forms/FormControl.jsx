import React from 'react'

function FormControl ({ children, ...props }) {
  return (
    <form
      className='max-w-2xl mx-auto w-full'
      {...props}
    >
      {children}
    </form>
  )
}

export default FormControl
