import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

function useAuth () {
  const { jwtToken, setJwtToken } = useContext(AuthContext)

  const login = (token) => {
    window.localStorage.setItem('token', JSON.stringify(token))
    setJwtToken(token)
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    setJwtToken(null)
  }

  return { jwtToken, setJwtToken, login, logout }
}

export default useAuth
