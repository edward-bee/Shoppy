import Input from '@/components/Forms/Input'
import FormLabel from '@/components/Forms/FormLabel'
import Button from '@/common/Button'
import Logo from '@/common/Logo'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '@/hooks/useForm'
import { REGISTER_INITIAL_VALUES } from '@/utils/constants'
import { useState } from 'react'
import registerForm from '@/utils/helpers/registerDTO'
import ErrorMessage from '@/components/Forms/ErrorMessage'
import { userRegister } from '@/utils/api'
import useAuth from '@/hooks/useAuth'

function Register () {
  const { formData, handleInput } = useForm(REGISTER_INITIAL_VALUES)
  const [formErrors, setFormErrors] = useState({})
  const { login } = useAuth()
  const navigation = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = registerForm(formData)

    if (Object.keys(errors).length > 0) setFormErrors(errors)

    try {
      const { password, email, name } = formData

      const res = await userRegister({ password, email, name })

      const { jwt } = res

      login(jwt)

      navigation('/', { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='h-screen px-3 mx-auto flex flex-col justify-center max-w-xl'>
      <div className='flex flex-col items-center mb-4'>
        <Logo />
        <h1 className='py-3 font-bold text-2xl text-center'>
          Registrarse en Shoppy
        </h1>
      </div>

      <form className='grid gap-4' onSubmit={handleSubmit}>
        <div>
          <FormLabel htmlFor='name'>Nombre</FormLabel>
          <Input
            placeholder='Nombre'
            type='text'
            id='name'
            onChange={handleInput}
          />
          <ErrorMessage>{formErrors.name}</ErrorMessage>
        </div>

        <div>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input
            placeholder='Email'
            type='email'
            id='email'
            onChange={handleInput}
          />
          <ErrorMessage>{formErrors.email}</ErrorMessage>
        </div>

        <div>
          <FormLabel htmlFor='password'>Contraseña</FormLabel>
          <Input
            placeholder='Contraseña'
            type='password'
            id='password'
            onChange={handleInput}
          />
          <ErrorMessage>{formErrors.password}</ErrorMessage>
        </div>

        <div>
          <FormLabel htmlFor='confirmPassword'>Confirmar contraseña</FormLabel>
          <Input
            placeholder='Contraseña'
            type='password'
            id='confirmPassword'
            onChange={handleInput}
          />
          <ErrorMessage>{formErrors.confirmPassword}</ErrorMessage>
        </div>

        <Button kind='secondary' type='submit'>
          Registrarse
        </Button>
      </form>

      <div className='mt-4 flex flex-wrap items-center justify-center'>
        <p>¿Tienes cuenta en Shoppy?</p>
        <Link to='/login' className='text-blue-500 font-bold pl-2'>
          Iniciar sesión
        </Link>
      </div>
    </div>
  )
}

export default Register
