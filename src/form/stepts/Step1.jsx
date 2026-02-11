import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import emailjs from '@emailjs/browser'
import { useFormContext } from '../../context/FormContext'

import { EMAILJS_CONFIG } from '../../constants/emailJS'

const Step1 = ({ onNext, isLoading }) => {
  const { formData, updateFormData } = useFormContext()
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const revenueOptions = [
    '0 a 10000 USD/Mes',
    '10.000 a 20.000',
    '20.000 a 30.000',
    'Más de 30.000',
  ]

  const validate = () => {
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Email
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido'
    }

    // First Name (>= 3 chars)
    if (!formData.firstName || formData.firstName.length < 3) {
      newErrors.firstName = 'El nombre debe tener al menos 3 letras'
    }

    // Last Name (>= 3 chars)
    if (!formData.lastName || formData.lastName.length < 3) {
      newErrors.lastName = 'El apellido debe tener al menos 3 letras'
    }

    // Website (Not empty)
    if (!formData.website) {
      newErrors.website = 'Ingresa el link de tu web'
    }

    // Phone (Not empty)
    if (!formData.phone) {
      newErrors.phone = 'Ingresa un teléfono'
    }

    // Revenue (Not null)
    if (formData.revenue === null) {
      newErrors.revenue = 'Selecciona tu facturación actual'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')

    if (validate()) {
      setSending(true)
      try {
        const templateParams = {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          website: formData.website,
          revenue: revenueOptions[formData.revenue],
          page_url: window.location.href,
          submitted_at: new Date().toLocaleString('es-AR'),
        }

        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY,
        )

        onNext()
      } catch (error) {
        console.error('Error sending email:', error)
        setSubmitError(
          'Hubo un error al enviar el formulario. Por favor intentá de nuevo.',
        )
      } finally {
        setSending(false)
      }
    }
  }

  return (
    <form
      className='col-span-full md:col-start-2 md:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-4'
      onSubmit={handleSubmit}>
      {/* Email - Row 1 */}
      <div className='md:col-span-2'>
        <input
          type='email'
          placeholder='Email'
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          className={`w-full bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#6e4eff] transition-colors text-white`}
        />
        {errors.email && (
          <span className='text-red-500 text-xs ml-1'>{errors.email}</span>
        )}
      </div>

      {/* Row 2 */}
      <div>
        <input
          type='text'
          placeholder='Nombre'
          value={formData.firstName}
          onChange={(e) => updateFormData('firstName', e.target.value)}
          className={`w-full bg-white/10 border ${errors.firstName ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#6e4eff] transition-colors text-white`}
        />
        {errors.firstName && (
          <span className='text-red-500 text-xs ml-1'>{errors.firstName}</span>
        )}
      </div>
      <div>
        <input
          type='text'
          placeholder='Apellido'
          value={formData.lastName}
          onChange={(e) => updateFormData('lastName', e.target.value)}
          className={`w-full bg-white/10 border ${errors.lastName ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#6e4eff] transition-colors text-white`}
        />
        {errors.lastName && (
          <span className='text-red-500 text-xs ml-1'>{errors.lastName}</span>
        )}
      </div>

      {/* Link - Desktop Row 3 Col 1 */}
      <div className='md:row-start-3 md:col-start-1'>
        <input
          type='url'
          placeholder='Link de la pagina web de tu negocio'
          value={formData.website}
          onChange={(e) => updateFormData('website', e.target.value)}
          className={`w-full h-full bg-white/10 border ${errors.website ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#6e4eff] transition-colors text-white`}
        />
        {errors.website && (
          <span className='text-red-500 text-xs ml-1 block'>
            {errors.website}
          </span>
        )}
      </div>

      {/* Phone - Desktop Row 4 Col 1 */}
      <div className='md:row-start-4 md:col-start-1 text-left'>
        <PhoneInput
          international
          defaultCountry='AR'
          value={formData.phone}
          onChange={(val) => updateFormData('phone', val)}
          className={`flex items-center gap-2 bg-white/10 border ${
            errors.phone ? 'border-red-500' : 'border-white/20'
          } rounded-lg px-4 py-3 h-full`}
          numberInputProps={{
            className:
              'bg-transparent border-none w-full placeholder-gray-400 focus:outline-none text-white focus:ring-0',
            placeholder: '11 1234 5678',
          }}
        />
        {errors.phone && (
          <span className='text-red-500 text-xs ml-1'>{errors.phone}</span>
        )}
      </div>

      {/* Revenue - Right Column, Spans Rows 3-5 */}
      <div
        className={`bg-white/10 border ${errors.revenue ? 'border-red-500' : 'border-white/20'} rounded-lg p-6 md:col-start-2 md:row-start-3 md:row-span-3 flex flex-col justify-center`}>
        <label className='block text-gray-300 text-sm mb-4 text-left'>
          Facturacion actual de tu Empresa
        </label>
        <div className='space-y-4'>
          {revenueOptions.map((option, idx) => (
            <label
              key={idx}
              className='flex items-center justify-between cursor-pointer group'>
              <span className='text-gray-300 group-hover:text-white transition-colors text-sm md:text-base text-left'>
                {option}
              </span>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                  formData.revenue === idx
                    ? 'border-transparent bg-[#6e4eff]'
                    : 'border-gray-400'
                }`}
                onClick={() => updateFormData('revenue', idx)}>
                {formData.revenue === idx && (
                  <div className='w-2 h-2 rounded-full bg-white' />
                )}
              </div>
            </label>
          ))}
        </div>
        {errors.revenue && (
          <span className='text-red-500 text-xs mt-2'>{errors.revenue}</span>
        )}
      </div>

      {/* Button - Desktop Row 5 Col 1 */}
      <div className='md:row-start-5 md:col-start-1'>
        <button
          type='submit'
          disabled={isLoading || sending}
          className={`w-full h-full bg-white text-[#6e4eff] font-bold rounded-lg py-3 hover:bg-gray-100 transition-colors shadow-lg shadow-white/10 flex items-center justify-center ${
            isLoading || sending ? 'opacity-80 cursor-not-allowed' : ''
          }`}>
          {isLoading || sending ? (
            <div className='flex items-center gap-2'>
              <div className='w-6 h-6 border-2 border-[#6e4eff] border-t-transparent rounded-full animate-spin' />
              <span>{sending ? 'Enviando...' : 'Cargando...'}</span>
            </div>
          ) : (
            'Elegí día y horario para tu llamada'
          )}
        </button>
        {submitError && (
          <span className='text-red-500 text-sm mt-2 block text-center'>
            {submitError}
          </span>
        )}
      </div>
    </form>
  )
}

export default Step1
