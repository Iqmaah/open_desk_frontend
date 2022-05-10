import arrow from '../../../assets/images/arrow.png'
import bluerec from '../../../assets/images/bluerec.png'
import greenrec from '../../../assets/images/greenrec.png'
import furniture from '../../../assets/images/furniture.png'


const Booking = () => {
    return(
        <div className="container mx-auto px-12 bg-white">

            <div className="flex space-x-28 py-28 mx-20">
                <div>
                <h1 className="text-7xl font-bold py-8">book a <br/>space now</h1>
                <img src={arrow} className="py-16"></img>
                </div>

                <div className="">
                    <div className="absolute ml-72">
                        <img src={bluerec} className="w-40 h-44"></img>
                    </div>
                    <div className="absolute ml-96 mt-10">
                        <img src={greenrec} className="w-80 h-96"></img>
                    </div>
                    <div className="absolute mt-28 mr-64">
                        <img src={furniture}></img>
                    </div>
                </div>
            </div>

            <div className="py-12 mx-20">
                <p className="text-2xl pb-2"> Would you like to see our space before joining? Come and visit our <br/>coworking space. Please fill out the form and our manager will get <br/>back to you asap.</p>
            </div>

            <div class="max-w-2xl mx-20 bg-white ">

            <form className="w-full">
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                    
                    <input type="text" id="first_name" className="bg-gray-50 placeholder-text-black border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="FIRST NAME" required/>
                </div>
                <div>
                    
                    <input type="text" id="last_name" className="bg-gray-50 placeholder-text-black border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="LAST NAME" required/>
                </div>  
                <div>
                    
                    <input type="tel" id="phone" className="bg-gray-50 placeholder-text-black border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PHONE" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" required/>
                </div>
                <div>
                    
                    <input type="email" id="email" className="bg-gray-50 placeholder-text-black border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="EMAIL" required/>
                </div>
                <div>
                    
                    <input type="date" id="date" classNmae="bg-gray-50 placeholder-text-black border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="DATE" required/>
                </div>
                <div>
                    
                    <input type="text" id="duration" className="bg-gray-50 placeholder-text-black border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="DURATION" required/>
                </div>
            </div>
            <div class="mb-6">
                
                <input type="text" id="purpose" className="bg-gray-50 placeholder-text-black border border-gray-300 text-gray-900 text-lg h-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="WHAT PURPOSE?" required/>
            </div> 
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 placeholder-text-black border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                </div>
                <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree that my submitted data is being collected and stored</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">BOOK NOW</button>
            </form>

            </div>

        </div>
    )
}


export default Booking