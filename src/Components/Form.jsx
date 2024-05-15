import React from 'react'

function Form() {
  return (
    <>

      <div className='bg-black rounded-xl shadow-lg p-8'>
        <form action='' className='flex flex-col space-y-4'>
          <div>
            <label htmlFor="" className='text-sm text-white'>Your name</label>
          </div>
          <div>
            <input type="text" placeholder='Your name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-500' name="" id="" />
          </div>
          

          <div>
            <label htmlFor="" className='text-sm text-white'>Email</label>
          </div>
          <div>
            <input type="email" placeholder='Email Address' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-500' name="" id="" />
          </div>
          


          <div>
            <label htmlFor="" className='text-sm text-white'>Phone no</label>
          </div>
          <div>
            <input type="text" placeholder='phone no' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-500' name="" id="" />
          </div>
          

          <div>
            <label htmlFor="" className='text-sm text-white'>Subject</label>
          </div>
          <div>
            <input type="text" placeholder='Your subject' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-500' name="" id="" />
          </div>
          

          
          <div>
            <label htmlFor="" className='text-sm text-white'>Message</label>
          </div>
          <div>

            <textarea  name="" placeholder='Your message here' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-500' id=""></textarea>

          </div>
          
          <button className='inline-block self-end bg-red-600 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm' >Send Message</button>
        </form>
      </div>

    </>
  )
}

export default Form