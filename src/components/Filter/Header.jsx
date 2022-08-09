import useFilters from '@/hooks/useFilters'

function Header () {
  const { clearAll } = useFilters()

  return (
    <header className='flex justify-end items-center'>
      <button className='text-left text-lg' onClick={clearAll}>
        Reset
      </button>
    </header>
  )
}

export default Header
