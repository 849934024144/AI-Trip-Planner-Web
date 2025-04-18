import React from 'react'
import {Button} from '../ui/button'
import {Link} from  'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 
      className='font-extrabold text-[40px] text-center mt-16'
      ><span className='text-[#fb4931]'>Discover Your adventure With AI: </span>Personalized Itineraries at Your Fingertips</h1>
    <p className='text-xl text-gray-500 text-center '>Your persnol trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
   
     <Link to={'/create-trip'}>
      <Button>Get Started, it's free</Button>  
      </Link> 
    </div>
  )
}

export default Hero