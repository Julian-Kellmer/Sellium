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

  const scrollToForm = () => {
    const formElement = document.getElementById('form-section')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Double the reviews for smooth continuous scroll
  const marqueeReviews = [...reviewsData, ...reviewsData]

  const reversedReviews = [...reviewsData].reverse()
  const marqueeReviewsRow2 = [...reversedReviews, ...reversedReviews]

  // We can just use the review images for the logo marquee as placeholders
  const logos = reviewsData.map((r) => r.image)
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <div className='layout-wrap min-h-screen w-full flex flex-col items-center pt-10 pb-16 text-white font-poppins bg-[#1e1e1e]'>
      <div className='layout-grid w-full max-w-7xl gap-y-16'>
        {/* --- HEADER SECTION --- */}
        <div className='col-span-full md:col-span-12 flex flex-col items-center text-center px-4'>
          <div className="relative w-full flex flex-col items-center pb-12 md:pb-24 border-b border-white/10 mb-16 overflow-visible">
            {/* Background glow shadow */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 opacity-25 w-[90vw] max-w-[900px] h-[500px] bg-[#6d28d9] blur-[150px] pointer-events-none rounded-full"></div>

            <div className="inline-flex items-center gap-2 bg-[#2d1b54]/40 border border-[#4c2d82] px-4 py-2 rounded-full mb-10 z-10 backdrop-blur-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00d084] shadow-[0_0_8px_#00d084]"></div>
              <span className="text-[#a582f7] text-sm md:text-base font-semibold tracking-wide">Sistema de fidelización con app propia</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-bold text-center tracking-tight leading-[1.05] mb-10 relative z-10 w-full">
              <span className="text-white block">Cada cliente que ya te</span>
              <span className="text-white block mt-1 md:mt-2">compró</span>
              <span className="text-[#8b5cf6] block mt-2 md:mt-5">debería volver a comprarte.</span>
              <span className="text-white block mt-2 md:mt-5">Sellium hace que eso pase.</span>
            </h1>

            <p className="text-[#a3a3a3] text-lg  text-center max-w-3xl mb-14 font-medium leading-relaxed relative z-10">
              Tu negocio no puede depender de la pauta para sostenerse.
              <br className="hidden md:block" />
              Buildamos el sistema que convierte compradores ocasionales
              <br className="hidden md:block" />
              en clientes de por vida.
            </p>

            <button 
              onClick={scrollToForm}
              className="bg-[#6d28d9] hover:bg-[#5b21b6] border border-[#7c3aed]/50 text-white py-4 px-8 md:px-10 rounded-2xl transition-all text-lg md:text-xl flex items-center justify-center gap-3 font-bold shadow-[0_10px_30px_rgba(109,40,217,0.3)] hover:shadow-[0_10px_40px_rgba(109,40,217,0.5)] hover:-translate-y-1 relative z-10 w-full md:w-auto"
            >
              Quiero ver cómo funciona para mi negocio 
              <span className="text-2xl font-normal leading-none mb-0.5" aria-hidden="true">→</span>
            </button>
          </div>

          <h5 className='text-lg md:text-xl font-medium tracking-widest mb-4'>
            PASO 1 DE 3
          </h5>
          <h2 className='text-xl md:text-2xl mb-8 max-w-2xl'>
            ¿Cómo hacemos para que tus clientes no se vayan a tu competencia?
          </h2>

          <div className='w-full max-w-4xl aspect-[16/9]  flex justify-center items-center rounded-3xl border-trasparent overflow-hidden'>
            {/* VIDEO PLACEHOLDER */}
            <SmartVideo
              webmSrc='/Video3OPT.webm'
              mp4Src='/Video3OPT.mp4'
              poster='PosterVideo3.png'
            />
          </div>

          <button 
              onClick={scrollToForm}
              className="bg-[#6d28d9] hover:bg-[#5b21b6] border border-[#7c3aed]/50 mt-8 text-white py-4 px-8 md:px-10 rounded-2xl transition-all text-lg md:text-xl flex items-center justify-center gap-3 font-bold shadow-[0_10px_30px_rgba(109,40,217,0.3)] hover:shadow-[0_10px_40px_rgba(109,40,217,0.5)] hover:-translate-y-1 relative z-10 w-full md:w-auto"
            >
              Quiero ver cómo funciona para mi negocio 
              <span className="text-2xl font-normal leading-none mb-0.5" aria-hidden="true">→</span>
            </button>
        </div>

        {/* --- REVIEWS SECTION --- */}
        <div className='col-span-full md:col-span-12 flex flex-col items-center mt-8'>
          <h2 className='text-2xl md:text-4xl font-bold text-center mb-12 px-4'>
            Lo que dicen los negocios que ya lo implementaron
          </h2>

          {/* Marquee Container */}
          <div className='w-full overflow-hidden flex flex-col gap-6 relative mask-image-linear-x pb-4'>
            {/* Row 1: Left to Right */}
            <div className='flex w-max hover-pause'>
              <div className='flex gap-6 animate-marquee-reverse shrink-0 pr-6'>
                {marqueeReviews.map((review, i) => (
                  <ReviewCard
                    key={`ltr-1-${i}`}
                    review={review}
                  />
                ))}
              </div>
              <div
                className='flex gap-6 animate-marquee-reverse shrink-0 pr-6'
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
              <div className='flex gap-6 animate-marquee shrink-0 pr-6'>
                {marqueeReviewsRow2.map((review, i) => (
                  <ReviewCard
                    key={`rtl-1-${i}`}
                    review={review}
                  />
                ))}
              </div>
              <div
                className='flex gap-6 animate-marquee shrink-0 pr-6'
                aria-hidden='true'>
                {marqueeReviewsRow2.map((review, i) => (
                  <ReviewCard
                    key={`rtl-2-${i}`}
                    review={review}
                  />
                ))}
              </div>
            </div>
          </div>

          <button 
              onClick={scrollToForm}
              className="bg-[#6d28d9] hover:bg-[#5b21b6] border border-[#7c3aed]/50 mt-8 text-white py-4 px-8 md:px-10 rounded-2xl transition-all text-lg md:text-xl flex items-center justify-center gap-3 font-bold shadow-[0_10px_30px_rgba(109,40,217,0.3)] hover:shadow-[0_10px_40px_rgba(109,40,217,0.5)] hover:-translate-y-1 relative z-10 w-full md:w-auto"
            >
              Quiero ver cómo funciona para mi negocio 
              <span className="text-2xl font-normal leading-none mb-0.5" aria-hidden="true">→</span>
            </button>
        </div>

        {/* Divider */}
        <div className='col-span-full md:col-span-10 md:col-start-2 border-t border-white/10 my-8'></div>

        {/* --- FORM SECTION --- */}
        <div
          id='form-section'
          className='col-span-full md:col-span-8 md:col-start-3 flex flex-col items-center text-center px-4 scroll-mt-24'>
          <h2 className='text-2xl md:text-3xl font-regular mb-6'>
            Contanos de tu negocio
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
        <div className='col-span-full md:col-span-12 mt-16 overflow-hidden w-full relative mask-image-linear-x'>
          <div className='flex w-max'>
            <div className='flex gap-12 md:gap-24 animate-marquee shrink-0 pr-12 md:pr-24 items-center'>
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
              className='flex gap-12 md:gap-24 animate-marquee shrink-0 pr-12 md:pr-24 items-center'
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
