import React from 'react'
import { useState } from 'react'
const ReviewCard = ({ review }) => {
  const [showFullText, setShowFullText] = useState(false)
  return (
    <div className='max-w-sm bg-[#161616] p-6 lg:p-8 rounded-2xl border border-white/5 shadow-xl transition-transform hover:scale-[1.02] w-full'>
      {/* Stars */}
      <div className='flex gap-1 mb-4 lg:mb-6'>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='white'
            className='text-white'>
            <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
          </svg>
        ))}
      </div>

      {/* Header: Image & Name */}
      <div className='flex items-center gap-4 mb-4'>
        <div className='w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-white/20 shrink-0'>
          <img
            src={review.image}
            alt={review.name}
            className='w-full h-full object-cover bg-neutral-800'
          />
        </div>
        <div>
          <h4 className='text-white font-bold text-base lg:text-lg font-poppins leading-tight'>
            {review.name}
          </h4>
          <p className='text-gray-400 text-xs lg:text-sm font-poppins mt-1'>
            {review.role}
          </p>
        </div>
      </div>

      {/* Text */}
      <p className='text-gray-300 leading-relaxed font-poppins text-xs md:text-sm lg:text-base'>
        {showFullText ? review.text : review.text.slice(0, 300) + '...'}
        <button
          onClick={() => setShowFullText(!showFullText)}
          className='text-[#3ce05d]/50 font-bold ml-2'>
          {showFullText ? 'Ver menos' : 'Ver más'}
        </button>
      </p>
    </div>
  )
}

export default ReviewCard
