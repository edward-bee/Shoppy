import { useContext } from 'react'
import { Context as FiltersContext } from '@/context/FilterContext'

function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const handlePrice = (e) => {
    setFilters({
      ...filters,
      price: `0-${e.target.value}`
    })
  }

  const handleCategory = (e) => {
    setFilters({
      ...filters,
      category: e.target.value
    })
  }

  return { filters, setFilters, handlePrice, handleCategory }
}

export default useFilters
