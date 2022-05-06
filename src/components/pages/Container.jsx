
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './../../assets/styles/custom.css'
import opendesklogo from '../../assets/images/opendesklogo.png'
import { navigation } from "../../data/header";

const Container = ({ children }) => {

  
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    return (
        <>
            <header>
           
                <nav className="bg-white">
                <div className="max-w-7xl mx-auto p-5">
                    <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                            aria-label="Main menu"
                            aria-expanded="false"
                            onClick={() => setOpenMobileMenu(!openMobileMenu)}
                        >
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* <!-- Icon when menu is open. -->
                        <!--
                            Heroicon name: x

                            Menu open: "block", Menu closed: "hidden"
                        --> */}
                            <svg
                                className="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 lg:mt-2 md:mt-2">
                        
                            <img src={opendesklogo} className=" w-full" alt="OpenDeskLogo"/>
                      
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                        <div className="flex">
                            {
                              navigation.map(({ href, title }) => (
                               
                            <a href={href} className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                                key={title}
                            >{title} </a>
                                            
                            ))
                            }
                        </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                        className="hidden sm:hidden md:block btn-blue flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                        aria-label="Join now"
                        >
                        Join now
                        </button>
                        

                       
                    </div>
                    </div>
                </div>

                {/* <!--
                Mobile menu, toggle classes based on menu state.

                Menu open: "block", Menu closed: "hidden"
            --> */}
                {openMobileMenu && (
                    <div className="md:hidden lg:hidden sm:block">
                    <div className="px-2 pt-2 pb-3">
                        {navigation.map(({ href, title }) => (
                        <a
                            href={href}
                            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                            key={title}
                        >
                            {title}
                        </a>
                        ))}

                        <span class="inline-flex rounded-md shadow-sm">
                        <a
                            href="/join-now"
                            className="whitespace-no-wrap inline-flex items-center justify-center my-2 px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                        >
                            Join now
                        </a>
                        </span>
                    </div>
                    </div>
                )}
                </nav>

            </header>
            <br /><br /><br /><br />

             {children}

            <footer>
                <div className="container mx-auto">
                    <div className="grid grid-cols-3 gap-4 place-items-center">
                        <div>01</div>

                        <div>02</div>

                        <div>09</div>
                    </div>
                </div>
            </footer>


        </>
    )
}


export default Container