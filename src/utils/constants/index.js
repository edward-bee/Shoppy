export const API_URL = import.meta.env.VITE_API_URL

export const getRecommendations = `${API_URL}/api/v1/product?limit=8`
export const getSingleProduct = `${API_URL}/api/v1/product`
export const getProducts = `${API_URL}/api/v1/product/search?limit=12`

export const REGISTER_INITIAL_VALUES = {
  email: '',
  name: '',
  password: '',
  confirmPassword: ''
}

export const LOGIN_INITIAL_VALUES = {
  email: '',
  password: ''
}

export const OPTIONS = [
  {
    name: 'Celulares y Teléfonos',
    id: 1
  },
  {
    name: 'Electrónica, Audio y Video',
    id: 2
  },
  {
    name: 'Deportes y Fitness',
    id: 3
  }
]
