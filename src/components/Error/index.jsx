import { useNavigate } from 'react-router-dom'

function Error () {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className='grid place-content-center h-screen'>
      <h1 className='text-4xl text-center font-extrabold pb-10'>
        Parece que esta página no existe
      </h1>

      <button
        className='border px-10 py-2 font-bold text-white bg-blue-500 rounded-md max-w-xs mx-auto'
        onClick={handleClick}
      >
        Ir a la página principal
      </button>
    </div>
  )
}

export default Error
