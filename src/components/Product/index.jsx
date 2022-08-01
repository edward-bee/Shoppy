function Product ({ name, price, img }) {
  return (
    <div className='w-full border border-[#cdcdcd] rounded-md py-5 px-4 hover:shadow-md'>
      <img src={img} alt={name} className='h-32 mx-auto' />
      <div className='mt-4'>
        <p className='text-base font-bold md:text-lg'>${price}</p>
        <p className='text-sm text-[#797979] md:text-base'>{name}</p>
      </div>
    </div>
  )
}

export default Product
