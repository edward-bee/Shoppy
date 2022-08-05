import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import ProductProvider from './context/ProductContext'
import SingleProductProvider from '@/context/SingleProductContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <SingleProductProvider>
        <App />
      </SingleProductProvider>
    </ProductProvider>
  </React.StrictMode>
)
