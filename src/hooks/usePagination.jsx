import { useSearchParams } from 'react-router-dom'

function Index () {
  const [searchParams, setSearchParams] = useSearchParams()

  const params = searchParams.toString().replace(/page=[0-9]*/, '')

  const handlePage = (page) => setSearchParams(`${params}&page=${page}`)

  return { handlePage }
}

export default Index
