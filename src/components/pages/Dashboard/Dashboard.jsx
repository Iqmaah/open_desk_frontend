import './Dashboard.css'
import opendesklogowhite from '../../../assets/images/opendesklogowhite.png'
import search from '../../../assets/images/search.svg'
import alarm from '../../../assets/images/alarm.svg'
import picture from '../../../assets/images/picture.svg'
import date from '../../../assets/images/datepicker.png'


const Dashboard = () => {
    return(
        <div className="flex min-h-screen bg-slate-50">

                {/* sidebar */}
            <div className='hidden relative sm:block w-1/4 bg-[#09C5AD]'>
                <div className=" mx-5 mb-5">
                    <img src={opendesklogowhite}></img>
                </div>
                <div className='mx-5'>
                    <ul className='list-none px-10 text-2xl font-normal'>

                        <li> 
                            <div className="pt-2 text-white hover:bg-gray-500 hover:text-blue-400">
                                <a href='#'> <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 18H10V12H18V18ZM8 18H0V8H8V18ZM18 10H10V0H18V10ZM8 6H0V0H8V6Z" fill="white" />
                                    </svg>  
                                <span className="ml-8">Dashboard</span>
                                </a>
                            </div>
                        </li><br/>

                        <li> 
                            <div className="pt-2 text-white hover:bg-gray-500 hover:text-blue-400">
                                <a href='#'> <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 0L18 4.999V19.009C17.9999 19.1393 17.9741 19.2682 17.9241 19.3885C17.8741 19.5089 17.801 19.6181 17.7087 19.7102C17.6165 19.8022 17.5071 19.8751 17.3867 19.9249C17.2663 19.9746 17.1373 20.0001 17.007 20H0.993C0.730378 19.9982 0.479017 19.8931 0.293218 19.7075C0.107418 19.5219 0.00209465 19.2706 0 19.008V0.992C0 0.444 0.445 0 0.993 0H13ZM10 7H8V13H13V11H10V7Z" fill="white"/>
                                    </svg>  
                                <span className="ml-8">Bookings</span>
                                </a>
                            </div>
                        </li><br/>

                        <li> 
                            <div className="pt-2 text-white hover:bg-gray-500 hover:text-blue-400">
                                <a href='#'> <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.75 0.59375C4.75 0.436278 4.68744 0.285255 4.57609 0.173905C4.46475 0.0625556 4.31372 0 4.15625 0C3.99878 0 3.84776 0.0625556 3.73641 0.173905C3.62506 0.285255 3.5625 0.436278 3.5625 0.59375V1.1875H2.375C1.74511 1.1875 1.14102 1.43772 0.695621 1.88312C0.250223 2.32852 0 2.93261 0 3.5625L0 4.75H19V3.5625C19 2.93261 18.7498 2.32852 18.3044 1.88312C17.859 1.43772 17.2549 1.1875 16.625 1.1875H15.4375V0.59375C15.4375 0.436278 15.3749 0.285255 15.2636 0.173905C15.1522 0.0625556 15.0012 0 14.8438 0C14.6863 0 14.5353 0.0625556 14.4239 0.173905C14.3126 0.285255 14.25 0.436278 14.25 0.59375V1.1875H4.75V0.59375ZM19 16.625V5.9375H0V16.625C0 17.2549 0.250223 17.859 0.695621 18.3044C1.14102 18.7498 1.74511 19 2.375 19H16.625C17.2549 19 17.859 18.7498 18.3044 18.3044C18.7498 17.859 19 17.2549 19 16.625ZM12.8891 10.5141L9.32662 14.0766C9.27147 14.1319 9.20595 14.1758 9.13381 14.2057C9.06168 14.2357 8.98435 14.2511 8.90625 14.2511C8.82815 14.2511 8.75082 14.2357 8.67869 14.2057C8.60655 14.1758 8.54103 14.1319 8.48588 14.0766L6.70463 12.2954C6.59313 12.1839 6.5305 12.0327 6.5305 11.875C6.5305 11.7173 6.59313 11.5661 6.70463 11.4546C6.81612 11.3431 6.96733 11.2805 7.125 11.2805C7.28267 11.2805 7.43388 11.3431 7.54537 11.4546L8.90625 12.8167L12.0484 9.67338C12.1599 9.56188 12.3111 9.49925 12.4688 9.49925C12.6264 9.49925 12.7776 9.56188 12.8891 9.67338C13.0006 9.78487 13.0632 9.93608 13.0632 10.0938C13.0632 10.2514 13.0006 10.4026 12.8891 10.5141Z" fill="white"/>
                                    </svg>  
                                <span className="ml-8">Calender</span>
                                </a>
                            </div>
                        </li><br/>

                    </ul>
                </div>

                <div className='absolute bottom-16 mx-5'>
                    <button type="submit" className="text-white bg-blue-600 hover:bg-blue-dark focus:ring-4 
                        focus:outline-none focus:ring-teal-300 font-medium rounded-full text-2xl px-20 py-2 text-center 
                        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LOG OUT
                    </button>
                </div>

            </div>

            {/* second div */}

            <div className='container mx-auto mt-5'>

                <div className='flex justify-end space-x-8'>
                    <div className='px-4 pt-4 border rounded-xl bg-white drop-shadow-lg '>
                        <img src={search}></img>
                    </div>
                    <div className='px-4 pt-4 bg-white border rounded-xl drop-shadow-lg '>
                        <img src={alarm}></img>
                    </div>
                    <div className='drop-shadow-lg '>
                        <img src={picture}></img>
                    </div>

                </div>

                <div className='container mx-20 mt-20 mb-32'>
                    <h1 className='text-2xl font-medium text-gray-500 mb-4'>Hi Oladapo, Welcome back</h1>
                    <h1 className='text-5xl font-bold'>Your Dashboard is updated</h1>
                </div>

                <div className='my-32 mx-20 '>
                    <img src={date} className="py-10 border bg-white drop-shadow-lg"></img>
                </div>

            </div>
            
        </div>
    )
}

export default Dashboard 