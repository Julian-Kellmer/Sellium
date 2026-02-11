import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [logoSize, setLogoSize] = useState(250) // Start large for Recepcion
  const [showText, setShowText] = useState(false)
  const location = useLocation()
  const isRecepcion = location.pathname === '/recepcion'

  useEffect(() => {
    if (!isRecepcion) return // No scroll logic needed for other pages

    const handleScroll = () => {
      const scrollY = window.scrollY

      // Logo Logic: 250px -> 50px over 200px
      const maxScroll = 200
      const startSize = 250
      const minSize = 50

      if (scrollY <= maxScroll) {
        const progress = scrollY / maxScroll
        const currentSize = startSize - progress * (startSize - minSize)
        setLogoSize(currentSize)
      } else {
        setLogoSize(minSize)
      }

      // Text Logic: Show after 200px
      setShowText(scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    // Initialize
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isRecepcion])

  // Determine current display values
  // If NOT recepcion, force 80px. If Recepcion, use state.
  const currentSize = isRecepcion ? logoSize : 50

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 layout-wrap py-4 flex items-center justify-between transition-colors duration-300 bg-transparent pointer-events-none`}>
      {/* Logo container */}
      <div
        style={{ width: `${currentSize}px`, height: `${currentSize}px` }}
        className={`transition-all duration-75 ease-linear pointer-events-auto`}>
        <Link to='/'>
          <img
            src='./logo_sellium.png'
            alt='Sellium Logo'
            className='w-full h-full object-contain'
          />
        </Link>
      </div>

      {/* Fade-in Text - Only on /recepcion */}
      {isRecepcion && (
        <div
          className={`text-white font-poppins font-bold text-xl md:text-2xl transition-opacity duration-500 ${showText ? 'opacity-100' : 'opacity-0'}`}>
          Sellium
        </div>
      )}
    </header>
  )
}

export default Header
