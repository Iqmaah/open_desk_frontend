import './Menu.css'

const Menu = () => {
    return(
        <div>
            <h3 className="py-7">MENU</h3>
                <ul className="list-none px-5">
                    <li> 
                        <div className="hover:text-[#E2698D]">
                            <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                         </svg> &nbsp; &nbsp; 
                                         <span className="text-gray-600">Dashboard</span>
                            </a>
                        </div>
                    </li><br/>

                    <li>
                        <div className="text-gray-600 hover:text-[#E2698D]">
                            <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                         </svg> &nbsp; &nbsp; 
                                         <span >Plans</span>
                            </a>
                        </div>
                    </li><br/>

                    <li>
                        <div className="text-gray-600 hover:text-[#E2698D]">
                            <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                         </svg> &nbsp; &nbsp; 
                                         <span>Purse</span>
                            </a>
                        </div>
                    </li><br/>

                    <li>
                        <div className="text-gray-600 hover:text-[#E2698D]">
                            <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                         </svg> &nbsp; &nbsp; 
                                         <span>Transactions</span>
                            </a>
                        </div>
                    </li><br/>

                    <li>
                        <div className="text-gray-600 hover:text-[#E2698D]">
                            <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                         </svg> &nbsp; &nbsp; 
                                         <span>Bank & Cards</span>
                            </a>
                        </div>
                    </li><br/>

                    <li>
                        <div className="text-gray-600 hover:text-[#E2698D]">
                            <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                         </svg> &nbsp; &nbsp; 
                                         <span>Girl Code</span>
                            </a>
                        </div>
                    </li><br/>

                    <li>
                        <div className="text-gray-600 hover:text-[#E2698D]">
                            <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                         </svg> &nbsp; &nbsp; 
                                         <span>Profile</span>
                            </a>
                        </div>
                    </li><br/>

                    <li>
                        <div className="text-gray-600 hover:text-[#E2698D]">
                            <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                         </svg> &nbsp; &nbsp; 
                                         <span>Portfolio</span>
                            </a>
                        </div>
                    </li><br/>

                    <li>
                        <div className="text-gray-600 hover:text-[#E2698D]">
                            <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                         </svg> &nbsp; &nbsp; 
                                         <span>About HerVest</span>
                            </a>
                        </div>
                    </li><br/>

                    <li>
                        <div className="text-gray-600 hover:text-[#E2698D]">
                            <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                         </svg> &nbsp; &nbsp; 
                                         <span>Support</span>
                            </a>
                        </div>
                    </li><br/>

                    <li>
                        <div className="text-gray-600 hover:text-[#E2698D]">
                            <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                         </svg> &nbsp; &nbsp; 
                                         <span>Logout</span>
                            </a>
                        </div>
                    </li><br/>

                    
                    
                </ul>
        </div>
    )
}


export default Menu