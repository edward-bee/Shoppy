import { useNavigate } from 'react-router-dom'

function Product ({ image, name, category, id }) {
  const navigate = useNavigate()
  const handleClick = () => navigate(`/product/${id}`)

  return (
    <div className='bg-white grid gap-4 p-4 rounded-md border hover:shadow-sm'>
      <img src={image} alt='product' className='h-40 w-44 object-contain mx-auto' />
      <div className='text-center'>
        <span className='block text-sm text-gray-600 uppercase -tracking-tight pb-1'>
          {category}
        </span>
        <p className='text-black font-bold'>{name}</p>
      </div>
      <button
        className='border px-10 py-2 font-bold text-black hover:text-white hover:bg-blue-500 hover:duration-100 rounded-md'
        onClick={handleClick}
      >
        Details
      </button>
    </div>
  )
}

export default Product
