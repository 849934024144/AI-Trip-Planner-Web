import React from 'react'
import { Link } from 'react-router-dom';

function Hotels({trip}) {
  return (
    <div>
        <h2 className='font-bold text-xl mt-5'>Hotel recommendation</h2>
       
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
           {trip?.tripData?.hotelOptions?.map((hotel, index) => (
            <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotelName+","+hotel?.hotelAddress} target='_blank'>
            <div className='hover:scale-105 transition-all cursor-pointer'>
            <img src="/placeholder.jpg" alt="img" className='rounded-lg' />
           
           <div className='flex flex-col gap-2 my-3'>
            <h3 className='font-medium'>{hotel?.hotelName}</h3>
            <h3 className='text-xs text-gray-500'> 📍 {hotel?.hotelAddress} </h3> {/* some times it will be hotelAddress*/}
            <h3 className='text-sm'> 💰 {hotel?.price}</h3>
            <h3 className='text-sm'> ⭐ {hotel?.rating}</h3>
           </div>
            </div>
            </Link>
            ))}

        </div>
        
    </div>
  )
}

export default Hotels