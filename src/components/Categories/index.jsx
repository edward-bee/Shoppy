import { useState } from 'react'
import Select from '@/components/Forms/Select'
import Option from '@/components/Forms/SelectOption'

function Index () {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  return (
    <div className='relative'>
      <Select onClick={handleClick} isOpen={isOpen}>
        Categorías
      </Select>
      <div
        className={`absolute origin-bottom-left z-20 w-full bg-white shadow-lg rounded-sm ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <Option path='Celulares y Teléfonos' />
        <Option path='Electrónica, Audio y Video' />
        <Option path='Deportes y Fitness' />
      </div>
    </div>
  )
}

export default Index
