import { FILTER_OPTIONS as OPTIONS } from '@/constants/FILTER_OPTIONS'
import CheckBox from './CheckBox'
import useFilters from '@/hooks/useFilters'

function CheckboxGroup () {
  const { filters, handleCategory } = useFilters()
  const { category } = filters

  return (
    <div className='py-5 flex flex-col gap-3'>
      <h3 className='border-b text-lg pb-1'>Category</h3>
      {OPTIONS.map(({ label, value }) => (
        <CheckBox
          key={value}
          label={label}
          value={value}
          checked={value === category}
          onChange={handleCategory}
        />
      ))}
    </div>
  )
}

export default CheckboxGroup
