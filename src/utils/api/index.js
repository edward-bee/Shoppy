import axios from 'axios'
import { API_URL } from '@/utils/constants/index'

export const userRegister = async (user) => {
  const { data } = await axios.post(`${API_URL}/api/v1/user/register`, user)
  return data
}

export const userLogin = async (user) => {
  const { data } = await axios.post(`${API_URL}/api/v1/user/login`, user)
  return data
}
