function Drawer ({ isOpen, toggle }) {
  return (
    <div
      className={`${
        isOpen ? 'right-0' : 'right-[-100%]'
      } h-screen fixed top-0 w-[250px] md:w-[300px] bg-white shadow-lg duration-500 ease-in-out`}
    >
      {
        isOpen && (
          <div className='p-2 h-full'>
            <button onClick={toggle}>X</button>
          </div>
        )
      }
    </div>
  )
}

export default Drawer
