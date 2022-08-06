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
        className='appearance-none h-5 w-5 border rounded-full cursor-pointer checked:bg-black checked:border-transparent'
        {...props}
      />
    </div>
  )
}

export default CheckBox
