import React from 'react'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <div className='w-full px-8 '>
        <div className="w-full text-gray-700 bg-white px-8">
            <div className="container flex flex-col flex-wrap items-center justify-between py-4 mx-aito md:flex-row max-w-7xl ">
               <div className="relative flex flex-col flex-wrap items-center">
               <a href="#" className='text-3xl font-bold italic '>Halwo <span className='text-orange-800 '>App</span></a>
               <nav className='flex flex-wrap items-center text-base px-8 gap-4'>
                <a href="#" className='font-base text-gray-600 hover:text-dark-500 font-medium w-[130px]'>Home</a>
                <a href="#" className='font-base text-gray-600 hover:text-dark-500 font-medium w-[130px]'>Features</a>
                <a href="#" className='font-base text-gray-600 hover:text-dark-500 font-medium w-[130px]'>Blog</a>
                <a href="#" className='font-base text-gray-600 hover:text-dark-500 font-medium w-[130px]'>Contact</a>
               </nav>
               </div>
             

            </div>


        </div>
 
    </div>
  )
}

export default Navbar