import React from 'react'

const LocationError = () => {
  return (
    <div className = "w-full h-[100vh] bg-orange-400 flex flex-col justify-center items-center">
        <div className='w-[50%] h-[200px] bg-white flex flex-col justify-center items-center'>
            <h1 className='text-xl text-center text-black'>Entered location is not correct,  Please try again.</h1>
            <button 
                className='w-[200px] h-[50px] bg-gray-400 rounded-full text-white font-bold text-xl px-10 py-3 cursor-pointer' 
                onClick = {()=>{window.location.reload()}}>Retry</button>
        </div>
    </div>
  )
}

export default LocationError