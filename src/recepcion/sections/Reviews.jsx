import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviewsData = [
  {
    id: 1,
    name: 'Tomas Silberman',
    role: 'Socio en Ojo Rojo',
    text: 'No tengo mucha experiencia en tecnología, y eso era algo que me preocupaba al momento de sumar una app. Lo que más me gustó de Sellium fue que todo el proceso fue simple y claro desde el primer día. El sistema fue facil de poner en funcionamiento y hoy la usamos sin complicaciones. Impresionantes los resultados de retención de clientes con Sellium.',
    image: './ojoRojoLogo.png', // Placeholder
  },
  {
    id: 2,
    name: 'Tomy Lapidus',
    role: 'Director en El Mundo del JugueteRetail / Juguetería',
    text: 'Personalmente, tengo un enfoque muy de resultados, Por eso cuando empezamos con el sistema de fidelizacion esperamos ver resultados y no tardaron en llegar. Mis clientes ya se manejan con la app, mejoramos exponencialmente la tasa de recompra y con el plan PRO ya estamos segmentando con una base de datos con mas de 5mil usuarios. ',
    image: './EMDL-Logo.png',
  },
  {
    id: 3,
    name: 'Pablo Bendayan',
    role: 'Centre Manager en Shopping San JustoCentro Comercial',
    text: 'Los visitantes del shopping descargan la app para acceder a promociones, beneficios y para encontrar fácilmente locales y puntos clave dentro del centro comercial. Con Sellium logramos concentrar toda esa información en un solo canal, facilitando la experiencia del visitante y mejorando la forma en que se informan antes y durante su visita al shopping.',
    image: './logoShopping.png',
  },
  {
    id: 4,
    name: 'Adrian Paniccia',
    role: 'Head of operations Wenelen Executive Hotel',
    text: 'La app permite a nuestros huéspedes acceder fácilmente a información, servicios y beneficios, mejorando su experiencia y fortaleciendo la relación con la marca. Hoy nuestros huespedes nos eligen mas seguido gracias a la App.',
    image: './logoWenelen.png',
  },
  {
    id: 5,
    name: 'Denise Ovsejevisch',
    role: 'Head of Marketing en DITOYS',
    text: 'Los clientes utilizan la app para conocer promociones y novedades, fortaleciendo la relación con la marca y mejorando la experiencia de compra.',
    image: './logoDitoys.png',
  },
]

const Reviews = () => {
  const containerRef = useRef(null)
  const leftColRef = useRef(null)
  const rightColRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: leftColRef.current,
        pinSpacing: false,
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className='layout-wrap w-full bg-[#1e1e1e] md:py-20 py-10'>
      <div className='layout-grid w-full max-w-7xl mx-auto'>
        {/* Left Column - Pinned */}
        <div
          ref={leftColRef}
          className='col-span-12 md:col-span-6 flex flex-col justify-start pt-10 h-fit'>
          <h2 className='text-3xl md:text-5xl font-bold leading-tight text-white font-poppins'>
            Con <span className='text-[#00C9A7]'>Sellium</span> el crecimiento
            es garantizado, mira nuestros casos de éxito
          </h2>
        </div>

        {/* Right Column - Scrollable */}
        <div
          ref={rightColRef}
          className='col-span-12 md:col-span-6 space-y-8'>
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className='bg-[#161616] p-8 rounded-2xl border border-white/5 shadow-xl transition-transform hover:scale-[1.02]'>
              {/* Stars */}
              <div className='flex gap-1 mb-6'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='white'
                    className='text-white'>
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                  </svg>
                ))}
              </div>

              {/* Header: Image & Name */}
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-white/20'>
                  <img
                    src={review.image}
                    alt={review.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div>
                  <h4 className='text-white font-bold text-lg font-poppins'>
                    {review.name}
                  </h4>
                  <p className='text-gray-400 text-sm font-poppins'>
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Text */}
              <p className='text-gray-300 leading-relaxed font-poppins text-sm md:text-base'>
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
