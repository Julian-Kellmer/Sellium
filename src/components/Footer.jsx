import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-white pt-16 pb-8 border-t border-black/5'>
      <div className='layout-wrap'>
        {/* Main Grid: 4 Columns on Desktop, 1 on Mobile */}
        <div className='col-span-full grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 px-4 md:px-0'>
          {/* Column 1: Logo & Slogan */}
          <div className='flex flex-col items-center md:items-start gap-6'>
            <h1 className='text-2xl font-bold'>logo</h1>
            <div className='text-center md:text-left'></div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className='flex flex-col items-center md:items-start gap-4'>
            <h4 className='text-primary font-medium text-lg mb-2'>Menu</h4>
            <div className='flex flex-col gap-3 items-center md:items-start text-sm text-black/60 font-medium uppercase tracking-wide'>
              <Link
                to='/'
                className='hover:text-secondary transition-colors'>
                Inicio
              </Link>
              <Link
                to='/servicios'
                className='hover:text-secondary transition-colors'>
                Servicios
              </Link>
              <Link
                to='/nosotros'
                className='hover:text-secondary transition-colors'>
                Nosotros
              </Link>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className='flex flex-col items-center md:items-start gap-4'>
            <h4 className='text-primary font-medium text-lg mb-2'>
              Contactanos
            </h4>
            <div className='flex flex-col gap-3 items-center md:items-start text-sm text-black/60'>
              <a
                href='tel:+549116662222'
                className='hover:text-secondary transition-colors'>
                + 549 112222-3333
              </a>
              <a
                href='mailto:Mail@gmail.com'
                className='hover:text-secondary transition-colors break-all'>
                mail@gmail.com
              </a>
              <div className='text-center md:text-left'>
                <p>Belgrano CABA,</p>
                <p>Cabildo 4367</p>
              </div>
            </div>
          </div>

          {/* Column 4: Social */}
          <div className='flex flex-col items-center md:items-start gap-4'>
            <h4 className='text-primary font-medium text-lg mb-2'>Seguinos</h4>
            <div className='flex flex-col gap-3 items-center md:items-start text-sm text-black/60 font-medium uppercase tracking-wide'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-secondary transition-colors'>
                Red social
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: 4 Columns alignment/Stack */}
        <div className='col-span-full border-t border-black/10 pt-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-xs text-black/40 uppercase tracking-wider text-center md:text-left'>
            {/* 1. Copyright */}
            <div className='md:col-span-1'>
              <p>Copyright 2026, Todos los derechos reservados</p>
            </div>

            {/* 2. Developer */}
            <div className='md:col-span-1 flex justify-center md:justify-start'>
              <p>Developer, Kellmer Julian</p>
            </div>

            {/* 3. Terms */}
            <div className='md:col-span-1 flex justify-center md:justify-start'>
              <Link
                to='/terms'
                className='hover:text-primary transition-colors'>
                Terminos & Condiciones
              </Link>
            </div>

            {/* 4. Privacy */}
            <div className='md:col-span-1 flex justify-center md:justify-start'>
              <Link
                to='/privacy'
                className='hover:text-primary transition-colors'>
                Politicas de privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
