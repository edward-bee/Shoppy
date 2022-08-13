import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Details from './pages/Details'
import Search from './pages/Search'
import './styles/index.css'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Details />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
