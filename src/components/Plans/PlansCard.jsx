


const PlansCard = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className= "grid grid-rows-2 gap-4 p-6 max-w-sm rounded-lg border   border-gray-200 shadow-md bg-[#E2698D] bg-image1 bg-no-repeat bg-right text-white ">
                    <div className="">
                        
                        <h2 className="text-base font-bold"> Create a savings plan </h2>  
                        <p className="text-xs pb-2"> Earn up to 12% </p>
                        
                    </div>
            </div> 


            <div className= "grid grid-rows-2 gap-4 p-6 max-w-sm rounded-lg border   border-gray-200 shadow-md bg-[#265859] bg-image2 bg-no-repeat bg-right text-white">
                    <div className="">
                        
                        <h2 className="text-sm font-bold"> Invest in a </h2> 
                        <h2 className="text-sm font-bold">Female Farmer </h2>
                        <p className="text-xs pb-2"> Get up to 25% returns per annum</p>
                        
                    </div>
            </div> 


            <div className= "grid grid-rows-2 gap-4 p-6 max-w-sm rounded-lg border   border-gray-200 shadow-md bg-[#F2F1F3] bg-image3 bg-no-repeat bg-right text-[#E2698D]">
                    <div className="">
                        
                        <h2 className="text-sm font-bold"> Invite your girls to  </h2> 
                        <h2 className="text-sm font-bold">HerVest </h2> 
                        <p className="text-xs pb-2"> Share your girl code</p>
                        
                    </div>
                    <div className="mt-5">
                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#E2698D] rounded-lg hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        HG7FIB   
                    </a>
                   
                    </div>
            </div> 

        </div>
    )
}

export default PlansCard