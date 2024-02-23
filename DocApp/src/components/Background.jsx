import React from 'react'

const Background = () => {
  return (
    <div className='fixed z-[2] w-full h-screen'>
    <div className=' absolute  flex justify-center w-full py-3 text-zinc-600  bg-orange-300 text-3xl font-semibold'>Documents</div>
     <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tight font-semibold text-zinc-900'>Docs</h1>
    </div>
  )
}

export default Background