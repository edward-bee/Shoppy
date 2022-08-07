function CheckBox ({ label, value, ...props }) {
  return (
    <div className='flex items-center justify-between'>
      <label htmlFor={value} className='text-base'>
        {label}
      </label>
      <input
        id={value}
        type='checkbox'
        value={value}
        className='h-[15px] w-[15px]'
        {...props}
      />
    </div>
  )
}

export default CheckBox
