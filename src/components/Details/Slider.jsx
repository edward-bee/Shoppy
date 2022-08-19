import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

function Slider ({ images, name }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides
        spaceBetween={30}
        grabCursor
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className='mySwiper mx-0'
      >
        {images?.map((image, index) => (
          <SwiperSlide className='h-full w-full flex justify-center items-center' key={index}>
            <img src={image} alt={name} className='object-contain h-[400px] w-[400px]' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider
