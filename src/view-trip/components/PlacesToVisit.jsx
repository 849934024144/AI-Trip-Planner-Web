// import React from 'react'
import PlaceCardItem from '../components/PlaceCardItem'

// function PlacesToVisit(trip) {
//   console.log('trip object:', trip)
//   console.log('tripData:', trip.trip.tripData)
//   console.log('itinerary:', trip.trip.tripData?.itinerary)

//   const itinerary = trip.trip.tripData?.itinerary;

//   return (
//     <div>
//         <h2 className='font-bold'>Places to Visit</h2>
//         <div>
//             {itinerary && Object.keys(itinerary).map((key, index) => (
//                 <div key={index} >
//                     <h2>{itinerary[key].day}</h2>
//                     {/* You can also render the places here */}
//                     <div className='grid grid-cols-2 gap-5'>
//                     {itinerary[key].places && itinerary[key].places.map((place, placeIndex) => (
//                         <div key={placeIndex} >
//                             <h2 className='font-medium text-sm text-orange-600'>{place.timeSchedule}</h2>
                            
//                             <div>
//                                 <PlaceCardItem place={place} />
//                             </div>
//                             {/* Render place details here */}
//                         </div>
//                     ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default PlacesToVisit

import React from 'react';

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Places to Visit</h2>

      {trip?.tripData?.itinerary?.days?.map((day, index) => (
        <div key={index} className='mb-5'>
          <h3 className='font-medium'>day : {day.day}</h3>
          <p className='text-sm text-gray-600'>{day.bestTimeToVisit}</p>
          <p className='text-sm text-gray-600'>{day.theme}</p>

          <div className='flex flex-wrap gap-6 mt-5'>
            {day.places?.map((place, placeIndex) => (
              <div key={placeIndex} className=' gap-5'>
                
                <h3 className='text-sm text-orange-600'> ⏰ {place.timeSchedule}</h3>
                <PlaceCardItem place={place} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlacesToVisit;