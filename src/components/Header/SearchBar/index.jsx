import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function SearchBar({ display, breakpoint }) {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target[0].value.length > 0) {
      navigate(`/search/${e.target[0].value}`)
    }
  }

  return (
    <form
      className={`${display} items-center pb-3 relative md:${breakpoint} md:flex-1 md:pb-0`}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Buscar productos...'
        className='w-full pl-3 pr-10 py-2 border rounded-[3px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder-slate-400'
        id='search-input'
      />
      <button
        type='submit'
        className='absolute right-2'
        aria-label='search-button'
        id='search-btn'
      >
        <BiSearch size={24} />
      </button>
    </form>
  )
}

export default SearchBar
