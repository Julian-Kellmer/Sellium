import React, { useState } from 'react'
import Step1 from './stepts/Step1'
import Step2 from './stepts/Step2'

import { FormProvider } from '../context/FormProvider'

const Form = () => {
  const [step, setStep] = useState(1)
  const [isCalendlyLoading, setIsCalendlyLoading] = useState(false)
  const handleNextStep = () => {
    setIsCalendlyLoading(true)
  }

  const handleCalendlyReady = () => {
    setStep(2)
    setIsCalendlyLoading(false)
  }

  return (
    <FormProvider>
      <div className='layout-wrap min-h-screen w-full flex flex-col items-center pt-16 p-4 text-white font-poppins'>
        <div className='layout-grid w-full max-w-7xl'>
          <div className='md:col-span-10 md:col-start-2 col-span-full  my-8 text-left'>
            <h1 className=' mb-4 text-h4'>
              <span className='text-3xl md:text-5xl font-bold leading-tight'>
                Contactanos para que tus clientes no vayan a tu competencia
              </span>
            </h1>
            <h2 className='text-h4 '>
              Solo para tiendas online que facturen más de{' '}
              <span className='text-tertiary'>20.000$</span> al mes.
            </h2>
          </div>

          {/* Step 1: Always visible until Step 2 is ready */}
          {step === 1 && (
            <Step1
              onNext={handleNextStep}
              isLoading={isCalendlyLoading}
            />
          )}

          {/* Step 2: Mounted when loading starts or when active. Hidden while loading. */}
          {(step === 2 || isCalendlyLoading) && (
            <div className={step === 1 ? 'hidden' : 'block contents'}>
              <Step2 onReady={handleCalendlyReady} />
            </div>
          )}
        </div>
      </div>
    </FormProvider>
  )
}

export default Form
