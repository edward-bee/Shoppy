import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getProducts = async () => {
  const { data } = await axios.get(`${API_URL}/api/product`)
  return data
}

export const getProductById = async (id) => {
  const { data } = await axios.get(`${API_URL}/api/product/${id}`)
  return data
}
