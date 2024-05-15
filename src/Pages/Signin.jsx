import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Signin() {
    return (
        <>


            <div className='p-6 max-w-sm mx-auto shadow-lg'>

                <div className=" w-320 rounded-lg bg-black p-8 text-white">
                    <p className="text-center text-xl leading-8 font-bold">Login</p>
                    <form className="mt-6">
                        <div className="mt-1 text-sm leading-5">
                            <label htmlFor="username" className='block text-gray-400 mb-1'>Username</label>
                            <input className='ring-1 ring-white  w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-500' type="text" name="username" id="username" placeholder="" />
                        </div>
                        <div className="mt-1 text-sm leading-5">
                            <label htmlFor="password" className='block text-gray-400 mb-1'>Password</label>
                            <input className='ring-1 ring-white  w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-500' type="password" name="password" id="password" placeholder="" />
                            <div className="flex justify-end text-sm leading-4 text-gray-400 mb-4 mt-2">
                                <Link className='text-white text-decoration-none text-base' to="">Forgot Password ?</Link>

                            </div>
                        </div>
                        <button className="block w-full bg-red-600 px-3 py-2 text-center text-white border-none rounded-sm font-bold">Sign in</button>
                    </form>
                    <div className="flex items-center pt-4">
                        <div className="h-px flex-grow bg-gray-400"></div>
                        <p className="pl-2 pr-2 text-sm leading-5 text-gray-400">Login with social accounts</p>
                        <div className="h-px flex-grow bg-gray-400"></div>
                    </div>
                    <div className="flex justify-center">
                        <button aria-label="Log in with Google" className="rounded-sm px-3 border-none bg-transparent ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                        <button aria-label="Log in with Twitter" className="text-xl rounded-sm px-3 border-none bg-transparent ml-2">
                        <FaFacebook />
                        </button>
                        <button aria-label="Log in with GitHub" className="text-xl rounded-sm px-3 border-none bg-transparent ml-2">
                        <MdEmail />
                        </button>
                    </div>
                    <p className="text-center text-sm leading-4 text-gray-400">Don't have an account?
                        <Link className="text-white text-decoration-none text-base hover:underh-px flex-grow bg-gray-400 hover:text-white">Sign up</Link>

                    </p>
                </div>


            </div>


        </>
    )
}

export default Signin