import { ABOUT_US_TEXT } from '@/constants'
import React from 'react'

const About = () => {
  return (
    <>
    <div className='container mx-auto my-20 border-b pb-10' id='about'>
      <div className="mb-8">
        <h2 className="mb-6 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
          Check More About Us
        </h2>
        <p className="py-6 text-center text-lg tracking-tighter lg:pr-20">
          {ABOUT_US_TEXT}
        </p>
      </div>
      <div className="flex flex-wrap text-center">
        <div className="w-full border-neutral-700 p-6 lg:w-1/2 lg:border-r">
          <p className="bg-gradient-to-r from-purple-500 via-rose-500 to-purple-700">1000+</p>
          <p className='my-8 font-medium'>Clients from 2022</p>
        </div>
        <div className="w-full p-6 lg:w-1/2">
        <p className="bg-gradient-to-r from-blue-500 via-green-200 to-blue-700">3000+</p>
        <p className='my-8 font-medium'>Properties Sold!</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About