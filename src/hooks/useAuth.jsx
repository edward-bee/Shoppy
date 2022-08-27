import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

function useAuth () {
  const { jwtToken, setJwtToken } = useContext(AuthContext)

  const login = (token) => {
    window.localStorage.setItem('token', JSON.stringify(token))
    setJwtToken(token)
  }

  return { jwtToken, setJwtToken, login }
}

export default useAuth
