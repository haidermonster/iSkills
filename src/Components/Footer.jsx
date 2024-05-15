import React from 'react'

import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Footer() {

  const myStyle = {
    backgroundColor: '#ff0000'
  };
  return (
    <>


      <footer className="mt-10  bg-black w-full text-white body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 bg-white rounded-2xl p-3 text-black flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
           <Link><img className='w-40 h-40 bg-white' src="i-Skill-Logo.png" alt="" /></Link>
            <p className="mt-2 font-bold text-black">iSkills is one of the leading and fast-paced companies across the world. We offer customized IT solutions for digital businesses.</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Other Pages</h2>
              
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-white flex gap-4  hover:text-red-500"><IoIosArrowForward className='text-red-600'/> Home</Link>
                </li>
                <li>
                  
                  <Link className="text-white flex gap-4  hover:text-red-500"><IoIosArrowForward className='text-red-600'/>About</Link>

                </li>
                <li>
                  
                  <Link className="text-white flex gap-4  hover:text-red-500"><IoIosArrowForward className='text-red-600'/>Services</Link>
               
                </li>
                <li>
                  
                  <Link className="text-white flex gap-4  hover:text-gray-800"><IoIosArrowForward className='text-red-600'/>Portfolio</Link>
     
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</h2>
             
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-white flex gap-4 hover:text-red-600"> <IoIosArrowForward className='text-red-600'/>  Privacy policy</Link>
                </li>
                <li>
                  
                  <Link className="text-white flex gap-4 hover:text-red-600"> <IoIosArrowForward className='text-red-600'/> Disclamier</Link>
               
                </li>
                <li>
                  
                  <Link className="text-white flex gap-4 hover:text-red-600"> <IoIosArrowForward className='text-red-600'/> Disclamier</Link>
               
                </li>
                <li>
                  
                  <Link className="text-white flex gap-4 hover:text-red-600"> <IoIosArrowForward className='text-red-600'/> Contact us</Link>
     
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-white">
              <h2 className="title-font font-medium  tracking-widest text-sm mb-3">Contact Info</h2>
              <div className='flex gap-4'><FaLocationDot  className='text-red-600'/>   <p>Fazilat Town Main Road, street No.3 near oxbrdge girls road, RYK</p></div>
              <div className='flex gap-4 pt-5'><IoMdMail  className='text-red-600'/>  <p>Rahim Yar Khan, Pakistan</p></div>
              <div className='flex gap-4 pt-5'><FaPhoneAlt  className='text-red-600'/>   <p>03048673947</p></div>
              
              <div className='flex space-x-4 text-lg mt-10'>
                          <span className='text-white  p-3  rounded-full hover:bg-white hover:text-red-600' style={myStyle}><Link to='/'><FaFacebook /></Link></span>  

                            <span className='text-white  p-3  rounded-full hover:bg-white hover:text-red-600' style={myStyle}><Link to='/'><FaTwitter /></Link></span>

                            <span className='text-white  p-3  rounded-full hover:bg-white hover:text-red-600' style={myStyle}><Link to='/'><FaLinkedin /></Link></span>

                            <span className='text-white  p-3  rounded-full hover:bg-white hover:text-red-600' style={myStyle}><Link to='/'><FaInstagram /></Link></span>
                        </div>
            </div>

          </div>
        </div>
      </footer>


    </>
  )
}

export default Footer
