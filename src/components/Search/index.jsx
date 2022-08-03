import { BiSearch } from 'react-icons/bi'
import Filter from '@/components/Filter'

function Search () {
  return (
    <section className='grid grid-cols-[1fr,auto] gap-2 pt-3'>
      <form className='flex items-center bg-white p-2 rounded-md shadow-sm w-full border'>
        <button type='button'>
          <BiSearch size='24' />
        </button>
        <input type='text' placeholder='Search' className='bg-inherit outline-none w-full pl-2' />
      </form>
      <Filter />
    </section>
  )
}

export default Search
