function Details ({ description, price, name, stock }) {
  return (
    <div className='p-4 grid'>
      <h2 className='font-bold text-xl pb-4'>{name}</h2>
      <p className='text-gray-600'>{description}</p>

      <div className='py-4'>
        <div>
          <span className='text-xl font-bold'>$</span>
          <span className='text-2xl font-bold'>{price}</span>
        </div>

        <div>
          <span className='text-lg'>Amount in stock: </span>
          <span className='text-lg'>{stock}</span>
        </div>
      </div>

      <div>
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
          Add to Cart
        </button>

        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4'>
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default Details
