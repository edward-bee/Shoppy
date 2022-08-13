import { BiChevronDown } from 'react-icons/bi'
import Category from './Category'
import { useState } from 'react'

function Index () {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  return (
    <div className='relative'>
      <button
        className='flex items-center justify-between w-full border rounded-sm py-2 px-3 md:hidden'
        onClick={handleClick}
      >
        Categorías
        <BiChevronDown size='24' />
      </button>
      <div
        className={`absolute origin-bottom-left z-20 w-full bg-white shadow-lg rounded-sm md:block md:relative md:shadow-none md:min-w-[150px]
          ${isOpen ? 'block' : 'hidden'}`}
      >
        <h2 className='font-bold text-lg mb-4 hidden md:block'>Categorías</h2>
        <ul>
          <Category path='CELULARES Y TELÉFONOS'>
            Celulares y Teléfonos
          </Category>
          <Category path='Electrónica, Audio y Video'>
            Electrónica, Audio y Video
          </Category>
          <Category path='Deportes y Fitness'>
            Deportes y Fitness
          </Category>
        </ul>
      </div>
    </div>
  )
}

export default Index
