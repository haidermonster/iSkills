import React from 'react'
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Form2() {
    return (
        <>

            <div className='flex w-full min-h-screen justify-center items-center mt-10'>
                <div className='bg-black w-full  max-w-6xl p-8 rounded-xl shadow-lg text-white flex flex-col md:flex-row md:space-x-6  space-y-6 md:space-y-0'>

                    <div className='flex flex-col space-y-7 justify-between'>
                        <div>
                            <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
                            <p className='pt-2 text-white text-sm'> Lorem ipsum dolor sit amet consecte temporibus veritatis earum a rerum consequuntur amet, voluptate sit qui numquam?</p>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <div className='inline-flex space-x-2 items-center'>
                                <div className='inline-flex space-x-2'><IoCall className='text-red-600 text-3xl' /><span className='text-white'>+(123) 456 7890</span></div>
                            </div>

                            <div className='inline-flex space-x-2 items-center'>

                                <div className='inline-flex space-x-2'><IoMdMail className='text-red-600 text-3xl' /> <span className='text-white'>contact@xyzwebsite.com</span></div>
                            </div>


                            <div className='inline-flex space-x-2 items-center'>

                                <div className='inline-flex space-x-2'><FaLocationDot className='text-red-600 text-3xl' /> <span className='text-white'>11, Street 342, Abcd fgh</span></div>


                            </div>
                        </div>
                        <div className='flex space-x-4 text-lg'>
                            <Link to='/'><FaFacebook /></Link>

                            <Link to='/'><FaTwitter /></Link>

                            <Link to='/'><FaLinkedin /></Link>

                            <Link to='/'><FaFacebook /></Link>
                        </div>
                    </div>

                    <div>
                        <div className='grid grid-row-3 gap-4 bg-white rounded-xl shadow-lg p-8'>
                            <form action='' className='flex flex-col space-y-4'>
                                <div className='flex'>
                                <div>
                                    <label htmlFor="" className='text-sm text-white'>Your name</label>
                                
                                    <input type="text" placeholder='Your name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-500' name="" id="" />
                                </div>
                                
                                <div>
                                    <label htmlFor="" className='text-sm text-white'>Email</label>
                              
                                    <input type="email" placeholder='Email Address' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-500' name="" id="" />
                                
                                </div>
                                </div>
                                


                                <div className='flex'>
                                <div>
                                    
                                <label htmlFor="" className='text-sm text-white'>Phone no</label>
                                
                                   
                                <input type="text" placeholder='phone no' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-500' name="" id="" />
                                </div>
                                
                                <div>
                              
                                <label htmlFor="" className='text-sm text-white'>Subject</label>
                                    <input type="text" placeholder='Your subject' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-500' name="" id="" />
                                </div>
                                </div>

                              





                                <div>
                                    <label htmlFor="" className='text-sm text-white'>Message</label>
                                </div>
                                <div>

                                    <textarea name="" placeholder='Your message here' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-500' id=""></textarea>

                                </div>

                                <button className='inline-block self-end bg-red-600 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm' >Send Message</button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Form2