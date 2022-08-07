function PrimaryBtn ({ children, ...props }) {
  return (
    <button
      className='border px-10 py-2 font-bold text-black hover:text-white hover:bg-blue-500 hover:duration-100 rounded-md'
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryBtn
