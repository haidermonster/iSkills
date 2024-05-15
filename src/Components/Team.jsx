import React from 'react'

import { useState } from 'react';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Team() {
    let [team, setteams] = useState([
        {
            src: "team.jpg",
            name: "Jason Smith",
            title: "PRESIDENT & CEO",
            para: "I am an ambitious workaholic, but apart from that, pretty simple person.",

        },
        {
            src: "team2.jpg",
            name: "Jason Smith",
            title: "PRESIDENT & CEO",
            para: "I am an ambitious workaholic, but apart from that, pretty simple person.",
        },
        {
            src: "team3.jpg",
            name: "Jason Smith",
            title: "PRESIDENT & CEO",
            para: "I am an ambitious workaholic, but apart from that, pretty simple person.",
        },
        {
            src: "team4.jpg",
            name: "Jason Smith",
            title: "PRESIDENT & CEO",
            para: "I am an ambitious workaholic, but apart from that, pretty simple person.",
        },

    ]);
    return (
        <>

            <div className='pt-14 pb-14  '>

                <h6 className='text-red-500 text-xl text-center'>OUR TEAM</h6>

                <h2 className='mt-2 font-sans text-4xl text-black text-bold pb-44 text-center'>Meet Our Team</h2>



                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                  
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {/* <!-- Free Plan --> */}

                        {team.map((teams, i) => (


                            <div key={i} className="bg-black rounded-lg text-center shadow-lg p-6 transform hover:bg-red-600 hover:scale-105 transition duration-300">


                                <div className="mb-8">
                                    <h3 className="text-2xl font-semibold text-white">{teams.name}</h3>
                                    <p className="mt-4 text-white">
                                        {teams.title}
                                    </p>
                                </div>

                                <div className='flex gap-4 justify-center'>
                                <span className="  bg-red-600 text-white p-2 rounded-xl hover:bg-black"><FaTwitter /></span>
                                <span className="  bg-red-600 text-white p-2 rounded-xl hover:bg-black"><FaFacebookF /></span>
                                <span className=" bg-red-600 text-white p-2  rounded-xl hover:bg-black"><FaGoogle /></span>
                                <span className="  bg-red-600 text-white p-2 rounded-xl hover:bg-black"><FaInstagram /></span>
                                </div>
                                <div className="mb-8">
                                    
                                    <span className="text-xl font-medium text-white">{teams.para}</span>
                                    
                                </div>

                            </div>


                        ))}




                    </div>

                </div>



            </div>


        </>
    )
}

export default Team