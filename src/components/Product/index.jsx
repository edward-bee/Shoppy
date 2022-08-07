import { useNavigate } from 'react-router-dom'
import PrimaryBtn from '@/common/PrimaryBtn'

function Product ({ image, name, category, id }) {
  const navigate = useNavigate()
  const handleClick = () => navigate(`/product/${id}`)

  return (
    <div className='bg-white grid gap-4 p-4 rounded-md border hover:shadow-sm'>
      <img
        src={image}
        alt='product'
        className='h-40 w-44 object-contain mx-auto'
      />
      <div className='text-center'>
        <span className='block text-sm text-gray-600 uppercase -tracking-tight pb-1'>
          {category}
        </span>
        <p className='text-black font-bold'>{name}</p>
      </div>
      <PrimaryBtn onClick={handleClick}>Details</PrimaryBtn>
    </div>
  )
}

export default Product
