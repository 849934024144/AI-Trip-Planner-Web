import React from 'react'
import { Link } from 'react-router-dom';
import { FaMapLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

function PlaceCardItem({place}) {
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.placeName+","+place?.placeAddress} target='_blank'>
    <div className='flex w-[400px] gap-5 border rounded-xl p-3 mt-2  hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img src="/placeholder.jpg" alt="img" className='w-[130px] h-[130px] rounded-xl'/>

        <div>
        <h3 className='font-bold text-lg text-gray-700'>{place.placeName}</h3>
        < p className='text-sm text-gray-600'>{place.details}</p>
        <h2 className='text-sm text-gray-600'>🚗{place.travelTime}</h2>
        <h3 className='text-sm text-gray-700'> 💰 {place.ticketPricing}</h3>
        <h3 className='text-sm text-gray-600'> ⭐ {place.rating}</h3>
        {/* <Button size='sm'><FaMapLocationDot /></Button> */}
        </div>
    
    </div>
    </Link>
  )
}

export default PlaceCardItem


