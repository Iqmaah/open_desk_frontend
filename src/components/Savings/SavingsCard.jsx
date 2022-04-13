import piggybank from '../images/piggybank.svg'

const SavingsCard = ({hervest}) => {
    return(
    
         
        <div className= "grid grid-rows-2 gap-4 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
            

                <div className="flex flex-row space-x-4">
                    <div className="bg-[#C2EFF0] rounded-full items-center p-2 ">
                        <img src= {piggybank} alt="piggybank" />
                    </div> 
                    <span><h2 className="text-sm pt-2">{hervest.name}</h2></span>
                </div>

                <div>
                    <h2 className="font-bold pb-2">{hervest.amount}</h2>
                        
                        <div className="w-full bg-gray-300 h-1">
                        <div className="bg-[#265859] h-1" style={{width: "45%"}}></div>
                        </div>  
                </div>

                 
            
        </div> 
    )
}

export default SavingsCard