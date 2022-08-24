import Button from '@/common/Button'
import usePagination from '@/hooks/usePagination'

function Index ({ previusPage, nextPage }) {
  const { handlePage } = usePagination()

  return (
    <div className='my-3 flex justify-between items-center'>
      <Button
        onClick={() => handlePage(previusPage)}
        kind='primary'
        variant='outline'
        disabled={!previusPage}
      >
        Anterior
      </Button>

      <Button
        onClick={() => handlePage(nextPage)}
        kind='primary'
        variant='outline'
        disabled={!nextPage}
      >
        Siguiente
      </Button>
    </div>
  )
}

export default Index
