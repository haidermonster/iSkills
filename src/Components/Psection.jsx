import React from 'react'

import images from './data/Portfolio'
import Pcard from './Pcard'

function Psection() {
  return (
    <>


      <div className='pt-20 pb-72'>

        <div className='p-6  mx-auto '>

          <h6 className='text-red-500 text-xl text-center'>Portofolio</h6>

          <h2 className='mt-2 font-sans text-4xl text-black text-bold text-center'>IT Solutions & Projects</h2>

          <p className='font-sans text-base text-gray-400 mt-2 text-center'>Efficient Project Delivery, Fully-Customized IT Solutions Flawless Project Outcomes Achieved, Delivered with our Excellence technology</p>


          <div className='mt-2 h-64  grid md:grid-cols-3 sm:grid-col-2 gap-4'> 

             {images.map((img,i) => (
              
              <Pcard src={img.src} name={img.name} field={img.field} para={img.para} key={i}/>

             ))}


          </div>



        </div>

      </div>


    </>
  )
}

export default Psection