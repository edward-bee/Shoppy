import { BiSearch } from 'react-icons/bi'

function SearchBar ({ display, breakpoint }) {
  return (
    <form
      className={`${display} items-center pb-3 relative md:${breakpoint} md:flex-1 md:pb-0`}
    >
      <input
        type='text'
        placeholder='Buscar productos...'
        className='w-full pl-3 pr-10 py-2 border rounded-[3px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder-slate-400'
      />
      <button type='submit' className='absolute right-2'>
        <BiSearch size={24} />
      </button>
    </form>
  )
}

export default SearchBar
