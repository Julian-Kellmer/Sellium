import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormContext } from '../../context/FormContext'

import { CALENDLY_CONFIG } from '../../constants/calendly'

const Step2 = ({ onReady }) => {
  const navigate = useNavigate()
  const { formData } = useFormContext()

  const buildCalendlyUrl = () => {
    const base = CALENDLY_CONFIG.URL

    const fullName =
      `${formData.firstName || ''} ${formData.lastName || ''}`.trim()

    const params = new URLSearchParams({
      hide_gdpr_banner: '1',
      locale: 'es',
      'prefill[name]': fullName,
      'prefill[email]': formData.email || '',
    })

    return `${base}?${params.toString()}`
  }

  const url = buildCalendlyUrl()

  useEffect(() => {
    // 1. Cargar el script de Calendly dinámicamente
    const src = CALENDLY_CONFIG.WIDGET_SRC
    let script = document.querySelector(`script[src="${src}"]`)

    if (!script) {
      script = document.createElement('script')
      script.src = src
      script.async = true
      document.body.appendChild(script)
    }

    // Check for iframe to know when it's loaded
    const checkIframe = setInterval(() => {
      const iframe = document.querySelector('.calendly-inline-widget iframe')
      if (iframe) {
        if (onReady) onReady()
        clearInterval(checkIframe)
      }
    }, 500)

    // 2. Definir el listener para mensajes de Calendly
    function onMessage(e) {
      if (
        e.origin !== 'https://calendly.com' &&
        e.origin !== 'https://assets.calendly.com'
      ) {
        return
      }

      if (
        e.data.event === 'calendly.event_scheduled' ||
        (e.data.event && e.data.event.indexOf('event_scheduled') > -1)
      ) {
        window.scrollTo(0, 0)
        navigate('/recepcion')
      }
    }

    // 3. Suscribirse al evento message
    window.addEventListener('message', onMessage)

    return () => {
      window.removeEventListener('message', onMessage)
      clearInterval(checkIframe)
    }
  }, [navigate, onReady])

  return (
    <div className='col-span-full md:col-start-2 md:col-span-10 w-full flex items-center justify-center'>
      <div
        className='calendly-inline-widget w-full'
        data-url={url}
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  )
}

export default Step2
