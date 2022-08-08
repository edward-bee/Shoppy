import { BiSearch } from 'react-icons/bi'

function Search () {
  return (
    <section className='pt-3'>
      <form className='flex items-center bg-white p-2 rounded-md shadow-sm w-full border'>
        <button type='button'>
          <BiSearch size='24' />
        </button>
        <input type='text' placeholder='Search' className='bg-inherit outline-none w-full pl-2' />
      </form>
    </section>
  )
}

export default Search
