import React from 'react'

import { useState } from 'react';
import { FaLightbulb } from "react-icons/fa";
function Sercard() {
    let [products, setProducts] = useState([
        {
            head: "Creative Design",
            para: "Far far away, behind the word mountains, far from the countries Vokalia.",

        },
        {
            head: "Digital Marketing",
            para: "Far far away, behind the word mountains, far from the countries Vokalia.",

        },
        {
            head: "Application Design",
            para: "Far far away, behind the word mountains, far from the countries Vokalia.",

        },
        {
            head: "Web Development",
            para: "Far far away, behind the word mountains, far from the countries Vokalia.",

        },

    ]);
    return (
        <>






            <div className='pt-14 pb-14  '>
                <h6 className='text-red-600 text-4xl text-center'>Services</h6>

                <h2 className='mt-4 font-sans text-3xl text-black text-center'>Our Exclusive Services </h2>

                <h2 className='font-sans text-3xl text-black text-center mb-5'>We Offer For You</h2>

                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {/* <!-- Free Plan --> */}

                        {products.map((product, i) => (


                            <div key={i} className="bg-black rounded-lg text-center shadow-lg p-6 transform hover:scale-105 hover:bg-red-600 transition duration-300">

                                <span className='text-white flex justify-center'>
                                    <FaLightbulb className='bg-red-600  hover:bg-black   rounded-xl ' />

                                </span>



                                <div className="mb-6">
                                    <h3 className="text-2xl font-semibold text-white">{product.head}</h3>
                                   
                                </div>


                                <div className="mb-8">

                                    <span className="text-xl font-medium text-white">{product.para}</span>

                                </div>

                            </div>


                        ))}




                    </div>

                </div>



            </div>



        </>
    )
}

export default Sercard