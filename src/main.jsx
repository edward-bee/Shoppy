import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import ProductProvider from './context/ProductContext'
import FiltersProvider from './context/FilterContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </ProductProvider>
)
