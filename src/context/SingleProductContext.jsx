import { createContext, useState } from 'react'

export const Context = createContext()

function SingleProductProvider ({ children }) {
  const [product, setProduct] = useState({})

  return (
    <Context.Provider value={{ product, setProduct }}>
      {children}
    </Context.Provider>
  )
}

export default SingleProductProvider
