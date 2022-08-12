import { useState } from 'react'
import SliderItem from './SliderItem'

function useSlider () {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (index) => setSlideIndex(index)

  return {
    slideIndex,
    handleClick
  }
}

function Slider ({ images, name }) {
  const { slideIndex, handleClick } = useSlider()

  return (
    <>
      {images && (
        <div className='grid items-center gap-4 sm:grid-cols-[auto,1fr] md:grid-cols-[auto,1fr]'>
          <figure className='overflow-hidden sm:order-2 h-[400px]'>
            <img
              src={images[slideIndex]}
              alt={name}
              className='object-contain w-full h-full'
            />
          </figure>

          <div className='flex flex-wrap justify-center gap-2 sm:flex-col'>
            {images?.map((image, index) => (
              <SliderItem
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
