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
  const col1Ref = useRef(null)
  const col2Ref = useRef(null)

  const col1 = reviewsData.filter((_, i) => i % 2 === 0)
  const col2 = reviewsData.filter((_, i) => i % 2 !== 0)

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

      gsap.to(col1Ref.current, {
        y: -150,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(col2Ref.current, {
        y: 150,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className='layout-wrap w-full bg-[#1e1e1e] md:py-20 py-10 overflow-hidden'>
      <div className='layout-grid w-full max-w-7xl mx-auto'>
        {/* Left Column - Pinned */}
        <div
          ref={leftColRef}
          className='col-span-12 md:col-span-5 flex flex-col justify-start pt-10 h-fit'>
          <h2 className='text-3xl lg:text-5xl font-bold leading-tight text-white font-poppins px-4 md:px-0'>
            Con <span className='text-[#3ce05d]'>Sellium</span> el crecimiento
            es garantizado, mira nuestros casos de éxito
          </h2>
        </div>

        {/* Right Column - Scrollable */}
        <div
          ref={rightColRef}
          className='col-span-12 md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
          <div
            ref={col1Ref}
            className='flex flex-col space-y-4 lg:space-y-8'>
            {col1.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
              />
            ))}
          </div>

          <div
            ref={col2Ref}
            className='flex flex-col space-y-4 lg:space-y-8 md:mt-0 mt-8'>
            {col2.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
