import React from 'react'

function GridItem ({ name, price }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img
        src='https://via.placeholder.com/200'
        alt='product'
        className='overflow-hidden object-cover'
      />
      <h3 className='text-center text-sm'>{name}</h3>
      <p className='text-center text-sm'>{price}</p>
    </div>
  )
}

export default GridItem
