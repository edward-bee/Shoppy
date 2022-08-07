import { createContext, useState } from 'react'

export const Context = createContext()

const initialValues = {
  category: '',
  price: '0-1000'
}

function FilterContext ({ children }) {
  const [filters, setFilters] = useState(initialValues)

  return (
    <Context.Provider value={{ filters, setFilters }}>
      {children}
    </Context.Provider>
  )
}

export default FilterContext
