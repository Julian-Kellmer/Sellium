import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-[#6E4EFF] text-white py-8 px-4 font-poppins'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base'>
        {/* Left: Contact Link */}
        <div className='w-full md:w-auto text-center md:text-left'>
          <a
            href='mailto:contacto@sellium.com'
            className='underline hover:text-gray-200 transition-colors'>
            Contacto
          </a>
        </div>

        {/* Center: Developer Credit */}
        <a
          href='https://jk-portfolio-neon.vercel.app/'
          className='w-full md:w-auto text-center opacity-80'>
          Developer, Kellmer Julian
        </a>

        {/* Right: Copyright */}
        <div className='w-full md:w-auto text-center md:text-right opacity-80'>
          Copyright 2024, Todos los derechos reservados
        </div>
      </div>
    </footer>
  )
}

export default Footer
