import React, { useEffect } from 'react'
import { FaShare } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { GetPlaceDetails } from '@/service/GlobalApi';
import {IoIosSend} from "react-icons/io";



function InfoSection({trip}) {

 useEffect(()=>{
  trip && GetPlacePhoto();
 },[trip])

  const GetPlacePhoto=async()=>{
    const data={
      textQuery:trip?.userSelection?.location
    }
    const result=await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data)
    })
  }
  return (
    <div>
        <img src="/placeholder.jpg" alt=" img" className='h-[340px] w-full object-cover  rounded-xl'/>
    
      <div className='my-5 flex flex-col gap-2'>
        <h2 className='font-bold text-2xl'>{trip.location}</h2>
      </div>
      <div className='flex flex-col gap-2 my-5'>
        <h2 className='font-bold text-2xl'>
          {trip?.userSelection?.location}  
        </h2>
      </div>
      <div className='flex justify-between items-center'>
      <div className='flex gap-5'>
      <h2 className='p-3 bg-gray-200 rounded-full text-gray-500 w-fit md:text-md'>📅 Days :{trip.userSelection?.noOfDays} </h2>
      <h2 className='p-3 bg-gray-200 rounded-full text-gray-500 w-fit'>💰Budget :{trip.userSelection?.budget}</h2>
      <h2 className='p-3 bg-gray-200 rounded-full text-gray-500 w-fit'>🧳No. of Traveler :{trip.userSelection?.traveler} </h2>
      </div>
      <Button><FaShare /></Button>
      </div>

    </div>
  )
}

export default InfoSection