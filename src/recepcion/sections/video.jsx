import React, { useRef, useEffect } from 'react'

const Video = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          const p = videoRef.current?.play()
          if (p && typeof p.catch === 'function') p.catch(() => {})
        } else {
          videoRef.current?.pause()
        }
      },
      {
        threshold: 0.5, // 50% visible
      },
    )

    const videoElement = videoRef.current
    if (videoElement) observer.observe(videoElement)

    return () => {
      if (videoElement) observer.unobserve(videoElement)
    }
  }, [])

  return (
    <section className='layout-wrap md:min-h-screen w-full flex flex-col items-center justify-center p-4 text-white font-sans'>
      <div className='layout-grid w-full max-w-7xl'>
        <div className='col-span-full my-8 text-left'>
          <div className='relative w-full overflow-hidden rounded-2xl bg-transparent shadow-2xl'>
            <video
              ref={videoRef}
              controls
              loop
              playsInline
              preload='metadata'
              poster='poster-selliumvideo2.png'
              className='w-full h-auto object-cover rounded-2xl'>
              <source
                src='/SelliumHorizontal.webm'
                type='video/webm'
              />
              <source
                src='/SelliumHorizontal.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Video
