import React from 'react'

function TarjetaOpcion({text}) {
  return (
    <div className='w-full max-w-sm sm:min-h-28 xl:min-h-32  bg-white border shadow-md px-5 py-4 text-center sm:py-6'>
      <h1 className='font-semibold text-lg xl:text-xl'>{text}</h1>
    </div>
  )
}

export default TarjetaOpcion
