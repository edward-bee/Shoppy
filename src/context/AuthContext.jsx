import { createContext, useState } from 'react'

export const AuthContext = createContext()

function AuthProvider ({ children }) {
  const [jwtToken, setJwtToken] = useState(window.localStorage.getItem('token'))

  return (
    <AuthContext.Provider value={{ jwtToken, setJwtToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
