import { useState, useRef } from 'react'
import Select from '@/components/Forms/Select'
import Option from '@/components/Forms/SelectOption'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import { OPTIONS } from '@/utils/constants'

function Index () {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)
  const ref = useRef()
  useOnClickOutside(ref, handleClick, isOpen)

  return (
    <div className='relative' ref={ref}>
      <Select onClick={handleClick} isOpen={isOpen}>
        Categorías
      </Select>
      <div
        className={`absolute origin-bottom-left z-20 w-full bg-white shadow-lg rounded-sm ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {
          OPTIONS.map(item => {
            return <Option key={item.id} path={item.name} onClick={handleClick} />
          })
        }
      </div>
    </div>
  )
}

export default Index
