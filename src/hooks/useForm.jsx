import { useState } from 'react'

function useForm (initialValue) {
  const [formData, setFormData] = useState(initialValue)

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  return { formData, handleInput }
}

export default useForm
