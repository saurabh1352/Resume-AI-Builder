import React from 'react'
import { LandingPageSvg } from '../Formcomponent/LandingPageSvg'

export const HeroSection = () => {
  return (
    <div className='flex flex-row '>
    <div className='flex justify-end '>
    <div className='flex items-center justify-center text-center p-3'>
  <LandingPageSvg />
  <span className='text-xl font-medium text-black'>RESUME.AI</span>
</div>

    </div>
    <div className='ml-auto'>
   <div className='flex items-center justify-center text-center p-3'>
    <div className='flex flex-row gap-4'>
    <div>
<a href='/login'>  <button className=' text-purple-500 bg-white border-2 border-purple-500 text-medium font-medium px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white hover:border-white'>
    Sign in
  </button></a>
</div>
<div>
 <a href='/register'> <button className='text-white bg-purple-500 border-2  text-md font-medium px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-purple-500 hover:border-purple-500'>
   Create account
  </button></a>
</div>

    </div>
   </div>
    </div>
  </div>
  
  )
}
