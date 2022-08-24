import { useNavigate } from 'react-router-dom'
import Text from '@/common/Text'
import Button from '@/common/Button'

function Product ({ image, name, category, id }) {
  const navigate = useNavigate()
  const handleClick = () => navigate(`/product/${id}`)

  return (
    <div className='bg-white grid gap-4 content-between p-4 rounded-md border hover:shadow-sm'>
      <img
        src={image}
        alt='product'
        className='h-40 w-44 object-contain mx-auto'
      />
      <div className='text-center'>
        <Text kind='secondary' size='small' style='upper'>
          {category}
        </Text>
        <Text>{name}</Text>
      </div>
      <Button onClick={handleClick} variant='outline' kind='primary'>Detalles</Button>
    </div>
  )
}

export default Product
