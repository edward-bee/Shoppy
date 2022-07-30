import { BiSearch } from 'react-icons/bi'

function SearchBar () {
  return (
    <form
      className='mt-12 border h-12 rounded-md flex max-w-2xl bg-[#F7F7F7]'
    >
      <button type='button' className='h-full px-3'>
        <BiSearch size='20' />
      </button>
      <input
        type='text'
        className='h-full block outline-none w-full px-2 bg-transparent border-l'
        placeholder='Search product'
      />
    </form>
  )
}

export default SearchBar
