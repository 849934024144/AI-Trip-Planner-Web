import React from 'react'

function UserTripCardItem(trip) {
  return (
    <div>
        <img src="/logo1.png" alt="" className="object-cover rounded-xl"/>
        <div>
            <h2>{trip?.userSelection?.location}</h2>
            <h2 className='p-3 bg-gray-200 rounded-full text-gray-500 w-fit md:text-md'>📅 Days :{trip.userSelection?.noOfDays} </h2>
      <h2 className='p-3 bg-gray-200 rounded-full text-gray-500 w-fit'>💰Budget :{trip.userSelection?.budget}</h2>
      <h2 className='p-3 bg-gray-200 rounded-full text-gray-500 w-fit'>🧳No. of Traveler :{trip.userSelection?.traveler} </h2>
        </div>
    </div>
  )
}

export default UserTripCardItem