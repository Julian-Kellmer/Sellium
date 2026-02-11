import React, { useState } from 'react'

const faqData = [
  {
    question: '¿Qué beneficios tiene frente a la web?',
    answer:
      'La app permite comunicación directa, menor abandono, mayor retención y mayor probabilidad de conversión que la web tradicional como hacen los grandes Ecommerce como Zara, MCdonalds y Adidas.',
  },
  {
    question: '¿Sellium reemplaza mi tienda online o redes sociales?',
    answer:
      'No. Sellium complementa esos canales y los potencia, agregando un canal propio donde el negocio tiene control total sobre la relación con sus clientes.',
  },
  {
    question: '¿Puedo personalizar el diseño?',
    answer:
      'Absolutamente. Tu app tendrá tu logo, colores, tipografías y estilo, siguiendo una estructura predefinida. Es 100% white-label, nadie sabrá que usaste Sellium.',
  },
  {
    question: '¿Necesito conocimientos técnicos?',
    answer:
      'Para nada. Nosotros nos encargamos de todo: desarrollo, publicación en las tiendas, configuración de pagos y soporte continuo.',
  },
]

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className='border-b border-white/20 overflow-hidden'>
      <button
        className='w-full py-6 flex items-center justify-between text-left focus:outline-none group'
        onClick={onClick}>
        <span className='text-white font-poppins text-lg md:text-xl font-medium group-hover:text-gray-200 transition-colors'>
          {item.question}
        </span>
        <span
          className={`text-white text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          +
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
        <p className='text-gray-300 font-poppins leading-relaxed'>
          {item.answer}
        </p>
      </div>
    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className='w-full min-h-screen bg-gradient-to-b from-[#1e1e1e] to-[#6E4EFF] py-20 px-4 flex flex-col items-center'>
      <div className='w-full max-w-4xl mx-auto flex flex-col gap-16'>
        {/* Header & Video Section */}
        <div className='text-center space-y-8'>
          <h2 className='text-3xl md:text-5xl font-bold leading-tight text-white font-poppins'>
            Como es que escalamos tiendas online todos los meses?{' '}
            <span className='text-[#00C9A7] block mt-2'>Acá te lo cuento</span>
          </h2>

          <div className='w-full aspect-video bg-black/20 rounded-2xl overflow-hidden shadow-2xl border border-white/10'>
            <video
              src='/SelliumHorizontal2.mp4'
              controls
              playsInline
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className='w-full'>
          <h3 className='text-2xl md:text-3xl font-bold text-white mb-8 font-poppins'>
            Algunas de las preguntas frecuentes
          </h3>
          <div className='flex flex-col'>
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => toggleIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
