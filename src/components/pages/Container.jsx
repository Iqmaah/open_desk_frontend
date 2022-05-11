
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './../../assets/styles/custom.css'
import opendesklogo from '../../assets/images/opendesklogo.png'
import { navigation } from "../../data/header"
import { footerNavigation } from "../../data/footer";
import opendesklogowhite from '../../assets/images/opendesklogowhite.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import linkedin from '../../assets/images/linkedin.png'

const Container = ({ children }) => {

  
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    return (
        <>
              
           
               <header className="container mx-auto py-3 md:py-2">
                    <div className="px-4 mx-auto md:flex md:items-center">

                    <div className="flex justify-between items-center">
                        <img src={opendesklogo} alt="opendesklogo" className="h-40" />
                       
                        <button
                        className="inline-flex items-center justify-center p-2 md:hidden rounded-md text-gray-400 hover:text-white hover:bg-[#125EC5] focus:outline-none focus:bg-[#125EC5] focus:text-white transition duration-150 ease-in-out"
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
                        </button>
                    </div>

                    <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
          
                        {navigation.map(({ href, title }) => (
                            <Link
                                to={href}
                                className="p-2 lg:px-4 md:mx-2 text-black hover:text-[#125EC5] hover:underline decoration-2 underline-offset-8"
                                key={title}
                            >
                                {title}
                            </Link>
                             ))
                        }
                        
                        <a href="/booking" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">HOP IN</a>
                    </div>
                </div>
                
                {openMobileMenu && (
                    <div className="md:hidden lg:hidden sm:block">
                    <div className="px-2 pt-2 pb-3">
                        {navigation.map(({ href, title }) => (
                        <a
                            href={href}
                            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-[#125EC5] focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                            key={title}
                        >
                            {title}
                        </a>
                        ))}

                    </div>
                    </div>
                )}
              </header>

            <div>

            {children}
            </div>

          
      <footer>
        <div className="flex flex-col mx-auto items-center text-white bg-[#09C5AD]">
          <div className="container">
            <div className="flex md:flex-row sm:flex-col flex-col py-5 px-5">
            <div className="flex mb-4 w-full">
                <div className="w-2/3">
                    <img src={opendesklogowhite} alt="Opendesk Logo" className="h-40" />
                    <div className="flex md:flex-row flex-col">
                        <div><img src={facebook} alt='facebook' className='h-5'/> </div>&nbsp;&nbsp;
                        <div><img src={instagram} alt='Instagram'className='h-5' /></div>&nbsp;&nbsp;
                        <div><img src={linkedin} alt='Linkedin' className='h-5'/></div>&nbsp;&nbsp;
                        <div><img src={twitter} alt='Twitter' className='h-5'/></div>
                        <div> &nbsp;&nbsp;&nbsp; © {new Date().getFullYear()} </div>
                    </div>
                </div>
                <div className="w-1/3">Address goes in here</div>
                    <div className="w-1/3 pt-7" style={{ fontSize: "18px", fontFamily: 'Montserrat' }}>
                     <p> We give remote workers access to short term co-working and co-living spaces, all around. </p>          
                    </div>
            </div>
              {/* <div className="px-2">
                
                 <img src={opendesklogowhite} alt="Opendesk Logo" className="" />
                    <div className="flex md:flex-row flex-col">
                        <div><img src='' alt='facebook' /></div>
                        <div><img src='' alt='facebook' /></div>
                        <div><img src='' alt='facebook' /></div>
                        <div><img src='' alt='facebook' /></div>
                        <div> © {new Date().getFullYear()} </div>
                    </div>
              </div>
              <div className="px-2">
                    <br /><br /><br /> 
                     <p> 18 Ijagbemi street, pedro rd, Somolu</p>
              </div>
              <div className="px-2">
                <p className="text-xs">
                  Perfect Teeth Dental Plan is NOT INSURANCE, but rather a
                  licensed dental savings plan offered through your local dental
                  office. Members in good standing with their annual membership
                  fee are eligible to receive transparent, member-only discounts
                  from the normal retail fees that participating offices
                  typically charge self-pay patients for dental services
                  rendered. Plan details and member savings are exclusive to
                  participating offices and may vary by location. Membersy does
                  not make payments directly to dental providers for services
                  rendered to plan members. Members are obligated to pay for all
                  dental services, but will receive a discount on services
                  rendered by participating dental providers. The plan is not a
                  qualified health plan under the Affordable Health Act. The
                  plan does not meet the minimum creditable coverage
                  requirements under MGLC.111M and 956 CMR 5.00. Discount
                  Medical Plan Organization (“DMPO”) and plan administrator:
                  Membersy LLC, 811 Barton Springs Rd. Ste. 750, Austin, TX
                  78704.
                </p>
              </div> */}
                            
            </div>
          </div>
        </div>

        {/* subfooter */}
        {/* <div className="bg-blue-400 py-2 text-white flex w-full">
          <div className="text-center w-full">
            <span>
              © {new Date().getFullYear()} - OpenDesk - All Rights Reserved
            </span>
          </div>
        </div> */}
      </footer>


        </>
    )
}


export default Container