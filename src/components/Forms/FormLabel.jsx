function FormLabel ({ children, ...props }) {
  return (
    <label className='text-lg text-gray-600 mb-2 block' {...props}>
      {children}
    </label>
  )
}

export default FormLabel
