function SlideItem ({ name, image, ...props }) {
  return (
    <div
      className='border w-auto p-1 py-2 rounded-[3px] hover:border-blue-600 flex items-center justify-center'
      {...props}
    >
      <img src={image} alt={name} className='h-8' />
    </div>
  )
}

export default SlideItem
