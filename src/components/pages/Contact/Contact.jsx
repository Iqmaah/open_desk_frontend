import blue from '../../../assets/images/blue.png'
import green from '../../../assets/images/green.png'
import socials from '../../../assets/images/socials.png'
import location from '../../../assets/images/location.png'
import phone from '../../../assets/images/phone.png'
import message from '../../../assets/images/message.png'

const Contact = () => {
    return(
        <div className="container mx-auto bg-white">

            <div className="flex space-x-40 py-20 pb-52 mx-40">
                <div className='pt-28'>
                    <h1 className="text-lg pt-16 font-medium">CONTACT US</h1>
                    <h1 className="text-7xl font-bold pb-10 ">say hello</h1>
                    <p className="text-4xl pb-2">Your email address will not be published.</p>
                    <p className="text-4xl pb-2">and we promise not to spam!</p>
                </div>

                <div>
                    <div className='z-50 absolute'>
                        <img src={blue}></img>
                    </div>
                    <div className='absolute transform -translate-x-4'>
                        <img src={green}></img>
                    </div>
                </div>
            </div>

            <div className="flex flex-row py-32 mx-40 space-x-20">
                <div className="flex-auto block p-6 max-w-sm rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img src={location} className=""></img>
                    <h5 className="my- text-lg font-semibold dark:text-white">CA 560 Bush St & 20th Ave, Apt 5 San Francisco, 230909, Canada</h5>
                    <img src={socials} className="w-40 h-8"></img>
                </div>

                <div className="flex-auto block p-6 max-w-sm rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img src={message} className=""></img>
                    <h5 className="my-3 text-lg font-semibold dark:text-white">rosh@email.com <br/>fax@email.com</h5>
                </div>

                <div className="flex-auto block p-6 max-w-sm rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img src={phone} className=""></img>
                    <h5 className="my-3 text-lg font-semibold dark:text-white">+44 587 154756 <br/>+55 5555 14574</h5>
                </div>  
            </div>
            <hr className="mx-40 pb-24" style={{width:"75%", margin: "center"}}/>

            <div className='mx-40 mb-10'>
                <p className="text-3xl pb-2">Have a Question?</p>
                <h1 className="text-8xl font-bold pb-10 ">Send a Message</h1>
                <p className="text-3xl pb-2">Your email address will not be published.</p>
                <p className="text-3xl pb-2">and we promise not to spam!</p>
            </div>

            <form className="w-full max-w-lg mx-60">
                <div className="flex -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    
                    <input className="block w-full placeholder-text-black text-black bg-white border text-lg h-16 drop-shadow-md rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-NAME" type="text" placeholder="NAME"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                   
                    <input className="block w-full placeholder-text-black text-black bg-white border text-lg h-16 drop-shadow-md rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder='EMAIL'/>
                    </div>
                </div>
                <div className="flex -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    
                    <input className="block w-full placeholder-text-black text-black bg-white border text-lg h-16 drop-shadow-md rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-SUBJECT" type="text" placeholder="SUBJECT"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    
                    <textarea className="no-resize placeholder-text-black appearance-none block w-full bg-gray-200 text-black border text-lg rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder='MESSAGE'></textarea>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/2">
                    <button className="shadow bg-teal-400 h-12 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        SEND MESSAGE
                    </button>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
            </form>

        </div>
    )
}


export default Contact