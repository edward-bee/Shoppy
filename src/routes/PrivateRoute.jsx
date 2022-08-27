import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'

function PrivateRoutes () {
  const { jwtToken } = useAuth()

  if (!jwtToken) {
    return <Navigate to='/' />
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export default PrivateRoutes
