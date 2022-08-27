import { emailValidation } from './emailValidation'

const loginForm = (values) => {
  const errors = {}
  const { email, password } = values

  if (!emailValidation(email)) {
    errors.email = 'El email no es válido'
  }

  if (password.length < 8) {
    errors.password = 'La contraseña debe contener un mínimo de 8 caracteres'
  }

  if (password.length > 20) {
    errors.password = 'La contraseña debe contener un máximo  de 20 caracteres'
  }

  return errors
}

export default loginForm
