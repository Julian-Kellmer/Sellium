import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ReviewCard from '../../components/ReviewCard'

gsap.registerPlugin(ScrollTrigger)

import { reviewsData } from '../../constants/reviewsData'

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
          <h2 className='text-3xl md:text-5xl font-bold leading-tight text-white font-poppins px-4 md:px-0'>
            Con <span className='text-[#00C9A7]'>Sellium</span> el crecimiento
            es garantizado, mira nuestros casos de éxito
          </h2>
        </div>

        {/* Right Column - Scrollable */}
        <div
          ref={rightColRef}
          className='col-span-12 md:col-span-6 space-y-8 flex flex-col items-center md:items-start'>
          {reviewsData.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
