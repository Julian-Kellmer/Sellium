import React, { useRef, useState } from 'react'

const SmartVideo = ({ webmSrc, mp4Src, poster }) => {
  const videoRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const handlePlay = async () => {
    setIsLoaded(true)

    // Esperamos a que React monte los <source>
    requestAnimationFrame(async () => {
      try {
        await videoRef.current?.play()
      } catch (err) {
        // Evita errores si el navegador bloquea algo
        console.warn('Video play prevented:', err)
      }
    })
  }

  return (
    <div className='relative w-full overflow-hidden rounded-2xl shadow-2xl'>
      <video
        ref={videoRef}
        controls
        playsInline
        preload='none'
        poster={poster}
        className='w-full h-auto object-cover rounded-2xl'>
        {isLoaded && (
          <>
            <source
              src={webmSrc}
              type='video/webm'
            />
            <source
              src={mp4Src}
              type='video/mp4'
            />
          </>
        )}
      </video>

      {!isLoaded && (
        <button
          onClick={handlePlay}
          className='absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition'>
          <div className='bg-white/45 w-10 h-10 flex items-center justify-center border border-white/45 text-black/70 rounded-full '>
            ▶
          </div>
        </button>
      )}
    </div>
  )
}

export default SmartVideo
