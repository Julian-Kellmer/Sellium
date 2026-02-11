import React, { useState } from 'react'
import { FormContext } from './FormContext'

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    website: '',
    phone: '',
    revenue: null, // index of the option
  })

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  )
}
