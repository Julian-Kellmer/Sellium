import React from 'react'

const Video = () => {
  return (
    <section className='layout-wrap md:min-h-screen w-full flex flex-col items-center justify-center p-4 text-white font-sans'>
      <div className='layout-grid w-full max-w-7xl'>
        <div className='col-span-full my-8 text-left'>
          <div className='relative w-full overflow-hidden rounded-2xl bg-transparent shadow-2xl'>
            <video
              src='/SelliumHorizontal.webm'
              controls
              autoPlay
              muted
              loop
              playsInline
              className='w-full h-auto object-cover rounded-2xl'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Video
