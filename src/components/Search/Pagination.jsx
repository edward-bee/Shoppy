import { useSearchParams } from 'react-router-dom'
import Button from '@/common/Button'

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
    <div className='my-3 flex justify-between items-center'>
      {previusPage && (
        <Button onClick={handlePreviusPage} kind='primary' variant='outline'>
          Anterior
        </Button>
      )}
      {nextPage && (
        <Button onClick={handleNextPage} kind='primary' variant='outline'>
          Siguiente
        </Button>
      )}
    </div>
  )
}

export default Index
