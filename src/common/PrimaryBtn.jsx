function PrimaryBtn ({ children, ...props }) {
  return (
    <button
      className='border w-full h-10 font-bold text-black hover:text-white hover:bg-blue-500 hover:duration-100 rounded-md'
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryBtn
