import woman from '../images/woman.svg'


const Welcome = () => {
    return(
        <div>
            <div className="flex flex-row items-center space-x-4 p-2 shadow-md hover:bg-rosh-100 transition ease-in duration-300 pb-2">
                <img className="w-20 rounded-3xl" src={woman} alt="user" />
                <div className="flex flex-col">
                    <p className="text-sm text-gray-400">Hello</p>
                    <span className="text-gray-400 text-base font-bold">Oluwatobi</span>
                </div> 
            </div>

            <div className='bg-[#E2698D]  p-16 rounded-lg bg-pinkbg '>
                <div className="flex justify-start md: justify-around ... text-white">
                    <div>
                       <p className='text-xs pb-2'>Available Balance</p>
                       <p className='font-bold text-base'>₦1,063,345.04</p> 
                    </div>
                    <div>
                       <p className='text-xs pb-2'>Impact Investments</p>
                       <p className='font-bold text-base'>₦1,007,345.04</p>
                    </div>
                    <div>
                       <p className='text-xs pb-2'>Total Savings</p>
                       <p className='font-bold text-base'>₦2,007,345.04</p>
                    </div>
                    <div>
                       <p className='text-xs pb-2'>Total Returns</p>
                       <p className='font-bold text-base'>₦56,000.00</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Welcome