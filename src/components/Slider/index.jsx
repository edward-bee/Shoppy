import { useState } from 'react'
import SlideItem from './SlideItem'

function Slider ({ images } = [], { name } = {}) {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (index) => setSlideIndex(index)

  return (
    <div className='h-72 grid grid-rows-[1fr,auto] p-2 md:grid-cols-[auto,1fr]'>
      <div className='grid place-content-center md:order-2'>
        <img
          src={images?.[slideIndex]}
          alt={name}
          className='h-40 object-cover mx-auto'
        />
      </div>

      <div className='grid grid-flow-col gap-2 justify-center md:grid-flow-row md:items-start'>
        {images?.map((image, index) => (
          <SlideItem
            key={index}
            image={image}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
