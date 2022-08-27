import { emailValidation } from './emailValidation'

const registerForm = (values) => {
  const errors = {}
  const { email, password, name, confirmPassword } = values

  if (!emailValidation(email)) {
    errors.email = 'El email no es válido'
  }

  if (password.length <= 8 && confirmPassword.length <= 8) {
    errors.password = 'La contraseña debe contener un mínimo de 8 caracteres'
    errors.confirmPassword = 'La contraseña debe contener un mínimo de 8 caracteres'
  }

  if (password.length >= 20 && confirmPassword.length >= 20) {
    errors.password = 'La contraseña debe contener un máximo de 20 caracteres'
    errors.confirmPassword = 'La contraseña debe contener un máximo de 20 caracteres'
  }

  if (password !== confirmPassword) {
    errors.password = 'Las contraseñas deben coincidir'
    errors.confirmPassword = 'Las contraseñas deben coincidir'
  }

  if (name.length <= 3) {
    errors.name = 'El nombre debe contener un mínimo de 3 caracteres'
  }

  if (name.length >= 20) {
    errors.name = 'El nombre debe contener un máximo de 20 caracteres'
  }

  return errors
}

export default registerForm
