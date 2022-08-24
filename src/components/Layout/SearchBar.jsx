import { useNavigate } from 'react-router-dom'
import Input from '@/components/Forms/Input'
import FormControl from '@/components/Forms/FormControl'

function SearchBar () {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target[0].value.length > 0) {
      navigate(`/search?q=${e.target[0].value}`)
    }
  }

  return (
    <FormControl onSubmit={handleSubmit}>
      <Input type='text' placeholder='Buscar productos...' id='search-input' />
    </FormControl>
  )
}

export default SearchBar
