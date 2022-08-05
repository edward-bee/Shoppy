import { useState } from 'react'
import SlideItem from './SlideItem'

function Slider ({ images, name }) {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (index) => setSlideIndex(index)

  return (
    <>
      {images && (
        <div className='grid gap-4 sm:grid-cols-[auto,1fr] md:grid-cols-[auto,1fr]'>
          <figure className='overflow-hidden sm:order-2 h-[400px]'>
            <img
              src={images[slideIndex]}
              alt={name}
              className='object-contain w-full h-full'
            />
          </figure>

          <div className='flex justify-center items-center gap-2 sm:flex-col sm:justify-start'>
            {images?.map((image, index) => (
              <SlideItem
                key={index}
                image={image}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Slider
