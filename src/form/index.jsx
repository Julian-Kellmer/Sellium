import React from 'react'
import { useNavigate } from 'react-router-dom'
import Step1 from './stepts/Step1'
import ReviewCard from '../components/ReviewCard'
import { reviewsData } from '../constants/reviewsData'
import SmartVideo from '../components/SmartVideos'

const Form = () => {
  const navigate = useNavigate()

  const handleNextStep = () => {
    navigate('/calendly')
  }

  // Double the reviews for smooth continuous scroll
  const marqueeReviews = [...reviewsData, ...reviewsData]

  // We can just use the review images for the logo marquee as placeholders
  const logos = reviewsData.map((r) => r.image)
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <div className='layout-wrap min-h-screen w-full flex flex-col items-center pt-16 pb-16 text-white font-poppins bg-[#1e1e1e]'>
      <div className='layout-grid w-full max-w-7xl gap-y-16'>
        {/* --- HEADER SECTION --- */}
        <div className='col-span-12 flex flex-col items-center text-center px-4'>
          <h1 className='text-3xl md:text-5xl font-bold font-poppins mb-2'>
            En solo 30 días, ya podes activar
          </h1>
          <h1 className='text-3xl md:text-5xl font-bold font-poppins text-[#00C9A7] mb-12'>
            tu sistema de fidelización propio
          </h1>

          <h5 className='text-lg md:text-xl font-medium tracking-widest mb-4'>
            PASO 1 DE 3
          </h5>
          <h2 className='text-xl md:text-2xl mb-8 max-w-2xl'>
            ¿Cómo hacemos para que tus clientes no se vayan a tu competencia?
          </h2>

          <div className='w-full max-w-4xl aspect-[16/9] bg-[#d9d9d9] flex justify-center items-center rounded-xl overflow-hidden'>
            {/* VIDEO PLACEHOLDER */}
            <SmartVideo
              webmSrc='/SelliumHorizontal.webm'
              mp4Src='/Video1OPT.mp4'
              poster='PosterVideo1.png'
            />
          </div>
        </div>

        {/* --- REVIEWS SECTION --- */}
        <div className='col-span-12 flex flex-col items-center mt-8'>
          <h2 className='text-2xl md:text-4xl font-bold text-center mb-12 px-4'>
            Con Sellium el crecimiento es garantizado,
            <br />
            <span className='text-[#00C9A7] mt-2 block'>
              mira nuestros casos de éxito
            </span>
          </h2>

          {/* Marquee Container */}
          <div className='w-full overflow-hidden flex flex-col gap-6 relative mask-image-linear-x pb-4'>
            {/* Row 1: Left to Right */}
            <div className='flex w-max hover-pause'>
              <div className='flex gap-6 animate-marquee shrink-0 px-3'>
                {marqueeReviews.map((review, i) => (
                  <ReviewCard
                    key={`ltr-1-${i}`}
                    review={review}
                  />
                ))}
              </div>
              <div
                className='flex gap-6 animate-marquee shrink-0 px-3'
                aria-hidden='true'>
                {marqueeReviews.map((review, i) => (
                  <ReviewCard
                    key={`ltr-2-${i}`}
                    review={review}
                  />
                ))}
              </div>
            </div>

            {/* Row 2: Right to Left */}
            <div className='flex w-max hover-pause'>
              <div className='flex gap-6 animate-marquee-reverse shrink-0 px-3'>
                {marqueeReviews.map((review, i) => (
                  <ReviewCard
                    key={`rtl-1-${i}`}
                    review={review}
                  />
                ))}
              </div>
              <div
                className='flex gap-6 animate-marquee-reverse shrink-0 px-3'
                aria-hidden='true'>
                {marqueeReviews.map((review, i) => (
                  <ReviewCard
                    key={`rtl-2-${i}`}
                    review={review}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='col-span-10 col-start-2 border-t border-white/10 my-8'></div>

        {/* --- FORM SECTION --- */}
        <div className='col-span-10 col-start-2 md:col-span-8 md:col-start-3 flex flex-col items-center text-center px-4'>
          <h2 className='text-2xl md:text-3xl font-regular mb-6'>
            Contanos de tu e-commerce
            <br />y agenda tu reunion
          </h2>
          <h5 className='text-lg md:text-xl font-medium tracking-widest mb-10'>
            PASO 2 DE 3
          </h5>

          <div className='w-full text-left'>
            <Step1 onNext={handleNextStep} />
          </div>
        </div>

        {/* --- LOGO MARQUEE SECTION --- */}
        <div className='col-span-12 mt-16 overflow-hidden w-full relative mask-image-linear-x'>
          <div className='flex w-max'>
            <div className='flex gap-12 md:gap-24 animate-marquee shrink-0 px-6 items-center'>
              {marqueeLogos.map((logo, i) => (
                <img
                  key={`logo-1-${i}`}
                  src={logo}
                  alt='Brand Logo'
                  className='rounded-full h-12 md:h-16 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all'
                />
              ))}
            </div>
            <div
              className='flex gap-12 md:gap-24 animate-marquee shrink-0 px-6 items-center'
              aria-hidden='true'>
              {marqueeLogos.map((logo, i) => (
                <img
                  key={`logo-2-${i}`}
                  src={logo}
                  alt='Brand Logo'
                  className='rounded-full h-12 md:h-16 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
