import React, { useState } from 'react'

import Testimonial_data from './data/Testinomials'
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

function Testinomials() {



  const [current, setcurent] = useState(0);
  const length = Testimonial_data.length;
  
const previous =()=>{
setcurent(current=== 0 ? length - 1 : current - 1);
}
const next =()=>{
  setcurent(current === length-1 ?  0 : current + 1);
  }
  
  const myStyle = {
    color: '#ff0000'
  };

  return (
    <>

      <div className='pt-20 pb-20 bg-black text-white '>


        <h6 className='text-red-500 text-xl text-center'>TESTIMONIAL</h6>

        <h2 className='mt-2 font-sans text-4xl text-white text-bold text-center'>Happy Customers</h2>


        <section className='flex h-[80vh] max-w-2xl mx-auto justify-center items-center'>
          <div>
            {
              Testimonial_data.map((item, index) => index === current && <div key={index}>
                <div className='pb-[40px] flex items-start gap-4'>
                  <img className='w-12 h-12 ' src="quote_mark.svg" alt="" />
                  <h2 className='text-white text-3xl font-bold'>{item.content_text}</h2>
                </div>

                <div className="flex justify-between">
                  <div className='flex gap-4 items-center'>
                    <div>
                      <img className='w-28 h-28 rounded-full' src={item.src} alt="" />
                    </div>

                    <div>
                      <h6>{item.name}</h6>
                      <span>{item.text_block}</span>
                    </div>
                  </div>

                  <div className='flex gap-20'>
                    <div className=' items-center text-center'>

                    <FaCircleArrowLeft onClick={previous} class="w-12 h-12  " style={myStyle}/>
                     

                    </div>
                    <div className='items-center text-center'>
                    <FaCircleArrowRight onClick={next} class="w-12 h-12   " style={myStyle}/>
                    

                    </div>
                  </div>

                </div>


              </div>)
            }
          </div>
        </section>

      </div>





    </>
  )
}

export default Testinomials