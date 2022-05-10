import aboutImage from '../../../assets/images/aboutImage.png'
import '../../../assets/styles/custom.css'
import icon1 from '../../../assets/images/icon1.png'
import icon2 from '../../../assets/images/icon2.png'
import icon3 from '../../../assets/images/icon3.png'
import icon4 from '../../../assets/images/icon4.png'
import rectangle from '../../../assets/images/rectangle.png'
import rectangle1 from '../../../assets/images/rectangle1.png'

const About = () => {
    return(
        <div className="container mx-auto px-12 bg-white">
            
                <div className='flex space-x-28 py-24'>
                    <div className="">
                        <h1 className="text-lg pt-16 font-medium">ABOUT US</h1>
                        <h1 className="text-8xl font-bold py-8">who we are</h1>
                        <p className="text-4xl pb-4"> We are an affordable, centrally located</p> 
                        <p className="text-4xl pb-4">world class business incubation and growth </p>
                        <p className="text-4xl pb-4">hub committed to providing its partners with</p> 
                        <p className="text-4xl pb-4">top quality business support services that </p>
                        <p className="text-4xl pb-4">create significant value for all stakeholders.</p>

                    </div>
                    <div className="relative">
                        <img src={aboutImage}></img>
                    </div>
                    <div className='absolute w-32 h-32 rounded-full bg-blue-600 -bottom-8 right-8' ></div> 
                </div>

                <div className="text-4xl">Our offerings include virtual and serviced spaces under our partner program to new 
                     and growing businesses, ideally furnished training rooms in a serene and conducive 
                     environment for corporate<br/> learning events as well as well-equipped meeting rooms.
                </div>

                <div class="flex flex-row space-x-20 py-24 ">
                    <div>
                        <h1 className="text-5xl font-bold">We also have space <br/> that suits you</h1>
                        <div class="grid grid-cols-2 gap-12">
                            <div>
                            <a href="#" className="block p-6 max-w-sm rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img src={icon1} className="w-20 h-20"></img>
                                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">training room</h5>
                                <img src={rectangle}></img>
                                <p className="mt-4 font-normal text-lg dark:text-gray-400">Testimonies abound from <br/>the use of our space for<br/> tranings and meetings. </p>
                            </a>
                            </div>
                            
                            <div>
                            <a href="#" className="block p-6 max-w-sm rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img src={icon2} className="w-20 h-20"></img>
                                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">virtual office</h5>
                                <img src={rectangle}></img>
                                <p className="mt-4 font-normal text-lg dark:text-gray-400">For a token, you can use <br/>our facility as your office<br/> contact address with<br/> several benefits. </p>
                            </a>
                            </div>

                            <div>
                            <a href="#" className="block p-6 max-w-sm rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img src={icon3} className="w-20 h-20"></img>
                                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">serviced offices</h5>
                                <img src={rectangle}></img>
                                <p className="mt-4 font-normal text-lg dark:text-gray-400">Get the right environment <br/>you desire for work as you <br/>use our desk space for<br/> your day-to-day work. </p>
                            </a>
                            </div>

                            <div>
                            <a href="#" className="block p-6 max-w-sm rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img src={icon4} className="w-20 h-20"></img>
                                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">consulting</h5>
                                <img src={rectangle}></img>
                                <p className="mt-4 font-normal text-lg dark:text-gray-400">We provide tailored bus-<br/>iness support solutions for <br/>effective and efficient<br/> business operations. </p>
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="pr-16">
                        <img src={rectangle1}></img>
                    </div>
          
                </div>

                <div className="py-20 text-center">
                <button className="bg-blue-600 hover:bg-blue-dark text-white text-sm py-2 px-16 rounded-full" type="button">
                   JOIN WAITLIST         
                </button>
                </div>

                <div className="py-20 text-center ">
                    <h1 className="text-5xl font-bold">Be one of the first to know our</h1>
                    <h1 className="text-5xl font-bold">upcoming services and offers</h1>
                </div>

                <div className="py-10"> 
                    <p className="text-gray-300 text-xs text-center">yourmailid@gmail.com</p>
                </div>
                <hr className="" style={{width:"50%", margin: "auto"}}/>

                <div className="py-10 text-center">
                <button className="bg-blue-600 hover:bg-blue-dark text-white text-sm py-2 px-16 rounded-full" type="button">
                   JOIN WAITLIST         
                </button>
                </div>

            
        </div>
    )
}


export default About