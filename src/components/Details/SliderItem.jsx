function SlideItem ({ name, image, ...props }) {
  return (
    <div
      className='border h-[50px] w-[50px] rounded-[3px] hover:border-sky-500 flex justify-center items-center'
      {...props}
    >
      <img src={image} alt={name} className='h-8 object-cover' />
    </div>
  )
}

export default SlideItem
