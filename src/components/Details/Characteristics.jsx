import React from 'react'

function Characteristics ({ characteristics }) {
  return (
    <div className='grid gap-4'>
      <h2 className='text-lg'>Lo que tenés que saber de este producto</h2>
      <ul>
        {characteristics.map((characteristic, index) => (
          <li
            key={index}
            className='before:content-["•"] before:pr-2 mb-3 indent-[-10px] pl-3'
          >
            {characteristic}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Characteristics
