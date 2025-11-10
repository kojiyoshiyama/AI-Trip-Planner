import React from 'react'

function Hero() {
  return (
    <div className='mt-24 w-full flex justify-center'>
        <div className='max-w-4xl w-full text-center space-t-6'>
            <h1 className='text-xl md:text-5xl font-bold'>
                Hey, I'm your personal  <span className='text-primary'>Trip Planner</span>
                <p className='text-lg font-light pt-4'>Tell me what you want, and I'll handle the rest: flights, hotels, trip planning - all in seconds!</p>
            </h1>
        </div>
    </div>
  )
}

export default Hero