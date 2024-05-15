import React from 'react'
import { FaCheck } from "react-icons/fa";
function Sabout() {
  return (
    <>
    
    <div className=''>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <img src="about2.jpeg" alt="" />
          </div>


          <div className='md:mt-32'>

            <h6 className="font-sans text-red-500">About us</h6>
            <h3 className='font-sans text-2xl text-black font-bold '>We Design, Build Brands & Digital Projects</h3>
            <p className="text-base text-gray-400 mt-2">
              Iskills is a leading technology company that provides a wide range of IT services and solutions to businesses of all sizes and industries. With our strong focus on innovation, quality, and customer satisfaction, we strive to deliver excellence in everything we do.
            </p>

            <button className=' md:mt-7 bg-gradient-to-r from-red-600 to-red-400  px-4 py-2 text-center  rounded-md '>Get Started</button>




            <div className='flex  gap-4 items-center'>
            <FaCheck  className='text-red-600 mt-2'/> 
            
            <div>
          <p className="text-base text-gray-400 mt-2">  We are committed to providing quality IT Services</p>
          </div>
           </div>

           <div className='flex  gap-4 items-center'>
            <FaCheck  className='text-red-600 mt-2'/> 
            
            <div>
          <p className="text-base text-gray-400 mt-2">  Provided by experts to help challenge critical activities</p>
          </div>
           </div>

           <div className='flex  gap-4 items-center'>
            <FaCheck  className='text-red-600 mt-2'/> 
            
            <div>
            <p className="text-base text-gray-400 mt-2">
              Really know the true needs and expectations of customers
            </p>
          </div>
           </div>

         

            

          </div>

        </div>
      </div>

    
    
    </>
  )
}

export default Sabout