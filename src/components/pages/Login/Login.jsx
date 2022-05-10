const Login = () => {
    return(
        
        <div>

            {/* <!-- Modal toggle --> */}
            <button className="block text-white bg-[#09C5AD] hover:bg-[#09C5AD] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
            HOPIN
            </button>
 
            {/* Main modal  there should be hidden in this div */}
            <div id="authentication-modal" tabindex="-1" aria-hidden="true" className=" overflow-y-auto overflow-x-hidden bg-opacity-50 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className=' w-full h-16  text-center rounded-t-lg bg-[#09C5AD]' >
                        <p className="text-white text-4xl p-4">kindly fill the form below </p>   
                    </div><br/>

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                           
                            <form className="space-y-6" action="#">
                                <div>
                                    
                                    <input type="text" name="Name" id="Name" placeholder="Oladapo Koiki Khalid" className="h-24 text-center placeholder-text-center text-gray-900 text-2xl focus:ring-blue-100 focus:border-blue-100 block w-full placeholder-text-3xl dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                    <hr className="" style={{width:"100%", margin: "auto"}}/>
                                </div>
                                
                                <div>
                                    
                                    <input type="email" name="email" id="email" className="h-24 text-center placeholder-text-center text-gray-900 text-2xl focus:ring-blue-500 focus:border-blue-500 block w-full placeholder-text-2xl dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="youremailid@gmail.com" required/>
                                    <hr className="" style={{width:"100%", margin: "auto"}}/>
                                </div>
                                <div>
                                    
                                    <input type="tel" name="phone" id="phone" placeholder="+234 801 234 5678" pattern="+234 [1-9]{3}-[0-9]{3}-[0-9]{4}" className="h-24 text-center placeholder-text-center text-gray-900 text-2xl focus:ring-blue-500 focus:border-blue-500 block w-full placeholder-text-2xl dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                    <hr className="" style={{width:"100%", margin: "auto"}}/>
                                </div>
                                
                                <button type="submit" className="w-full text-white bg-[#09C5AD] hover:bg-[#09C5AD] focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-2xl px-4 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">HOPIN</button>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div> 

        </div>
    )
}


export default Login