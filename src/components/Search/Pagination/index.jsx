import { useSearchParams } from 'react-router-dom'

function Index ({ previusPage, nextPage }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const params = searchParams.toString().replace(/page=[0-9]*/, '')

  const handlePreviusPage = () => {
    setSearchParams(`${params}&page=${previusPage}`)
  }

  const handleNextPage = () => {
    setSearchParams(`${params}&page=${nextPage}`)
  }

  return (
    <div className='py-3 flex justify-between items-center'>
      {previusPage && (
        <button
          className='bg-white text-gray-600 border border-gray-300 rounded-md px-4 py-2'
          onClick={handlePreviusPage}
        >
          Previus
        </button>
      )}
      {nextPage && (
        <button
          className='bg-white text-gray-600 border border-gray-300 rounded-md px-4 py-2'
          onClick={handleNextPage}
        >
          Next
        </button>
      )}
    </div>
  )
}

export default Index
