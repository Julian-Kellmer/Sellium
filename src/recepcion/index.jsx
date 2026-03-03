import React from 'react'
import Reviews from './sections/Reviews'
import FAQ from './sections/FAQ'
import '@fontsource/poppins'
import SmartVideo from '../components/SmartVideos'
const Recepcion = () => {
  return (
    <section className=''>
      <div className='layout-wrap w-full flex flex-col items-center justify-center p-4 text-white bg-[#1e1e1e]'>
        <div className='layout-grid w-full max-w-7xl  min-h-[50svh]  '>
          <div className='col-span-full mt-8 text-left flex flex-col items-start justify-center px-4 md:px-8'>
            <h1 className='text-3xl md:text-5xl font-bold leading-tight mb-4 font-roboto '>
              Tu llamada aun no fue confirmada, Espera la comunicación via{' '}
              <span className='text-[#3ce05d]'>Whatsapp</span>
            </h1>
            <p className='text-gray-400 text-sm font-poppins'>
              En breve vas a recibir un WhatsApp para confirmar la llamada. Si
              no recibimos confirmación en las próximas 12 horas, vamos a
              liberar el espacio para otro E-commerce.
            </p>
          </div>
        </div>
        <div className='md:w-2/3 w-full'>
          <SmartVideo
            webmSrc='/SelliumHorizontal2.webm'
            mp4Src='/Video2OPT.mp4'
            poster='PosterVideo2.png'
          />
        </div>

        <Reviews />
      </div>
      <FAQ />
    </section>
  )
}

export default Recepcion
