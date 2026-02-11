import React from 'react'
import Video from './sections/video'
import Reviews from './sections/Reviews'
import FAQ from './sections/FAQ'
import '@fontsource/poppins'
const Recepcion = () => {
  return (
    <sections className=''>
      <div className='layout-wrap w-full flex flex-col items-center justify-center p-4 text-white bg-[#1e1e1e]'>
        <div className='layout-grid w-full max-w-7xl md:min-h-screen min-h-[65vh] '>
          <div className='col-span-full my-8 text-left flex flex-col items-start justify-end md:justify-center'>
            <h1 className='text-3xl md:text-5xl font-bold leading-tight mb-4 font-roboto '>
              Tu llamada aun no fue confirmada, Espera la comunicación via{' '}
              <span className='text-tertiary'>Whatsapp</span>
            </h1>
            <p className='text-gray-400 text-sm font-poppins'>
              En breve vas a recibir un WhatsApp para confirmar la llamada. Si
              no recibimos confirmación en las próximas 12 horas, vamos a
              liberar el espacio para otro E-commerce.
            </p>
          </div>
        </div>
        <Video />
        <Reviews />
      </div>
      <FAQ />
    </sections>
  )
}

export default Recepcion
