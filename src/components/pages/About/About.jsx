import aboutImage from '../../../assets/images/aboutImage.png'
import '../../../assets/styles/custom.css'
import icon1 from '../../../assets/images/icon1.png'
import icon2 from '../../../assets/images/icon2.png'
import icon3 from '../../../assets/images/icon3.png'
import icon4 from '../../../assets/images/icon4.png'
import rectangle from '../../../assets/images/rectangle.png'
import rectangle1 from '../../../assets/images/rectangle1.png'
import Container from '../../../components/pages/Container'

const About = () => {
    return (
        <Container>
            <div className="container mx-auto px-12 bg-white">
                
                    {/* <div className='flex space-x-28 py-24'>
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
                    </div> */}

                    <div class="grid grid-cols-2 gap-4 py-24">
                        <div>
                            <h1 className="text-lg pt-16" style={{fontFamily: 'Montserrat', fontWeight: "500px",fontSize: "26px", lineHeight: "42px"}}>ABOUT US</h1>
                            <h1 className="font-bold py-8" style={{fontFamily:"Gelato Soft Free", fontSize: "106px", lineHeight: "96px" }}>who we are</h1>
                            <p className="text-4xl pb-4" style={{fontFamily: 'Montserrat', fontWeight: "500px",fontSize: "26px", lineHeight: "42px"}}> We are an affordable, centrally located 
                            world class business incubation and growth hub committed to providing its partners with
                            top quality business support services that create significant value for all stakeholders.</p> 
                        </div>
                        
                        <div className="hidden md:block">
                        <div className="relative">
                            <img src={aboutImage}></img>
                        </div>
                        <div className='hidden lg:block absolute w-32 h-32 rounded-full bg-blue-600 -bottom-8 right-8' ></div>
                        </div>
                    </div>

                    <div className="text-4xl pt-8 pb-20" style={{fontFamily: 'Montserrat', fontWeight: "500px",fontSize: "26px", lineHeight: "42px"}}>Our offerings include virtual and serviced spaces under our partner program to new 
                        and growing businesses, ideally furnished training rooms in a serene and conducive 
                        environment for corporate<br/> learning events as well as well-equipped meeting rooms.
                    </div>

                    <div class="flex flex-row space-x-20 py-24 ">
                        <div>
                            <h1 className=" font-bold" style={{fontFamily:"Gelato Soft Free", fontWeight: "400px", fontSize: "51px", lineHeight: "61.21px" }}>We also have space <br/> that suits you</h1><br /><br />
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                <a href="#" className="block p-6 max-w-sm rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img src={icon1} className="w-20 h-20"></img>
                                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white" style={{fontFamily:"Gelato Soft Free", fontWeight: "400px", fontSize: "33px", lineHeight: "39.61px" }}>training room</h5>
                                    <img src={rectangle}></img>
                                    <p className="mt-4 font-normal dark:text-gray-400" style={{fontFamily: 'Montserrat', fontWeight: "500px",fontSize: "22px", lineHeight: "42px"}}>Testimonies abound from the use of our space for tranings and meetings. </p>
                                </a>
                                </div>
                                
                                <div>
                                <a href="#" className="block p-6 max-w-sm rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img src={icon2} className="w-20 h-20"></img>
                                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white" style={{fontFamily:"Gelato Soft Free", fontWeight: "400px", fontSize: "33px", lineHeight: "39.61px" }}>virtual office</h5>
                                    <img src={rectangle}></img>
                                    <p className="mt-4 font-normal dark:text-gray-400" style={{fontFamily: 'Montserrat', fontWeight: "500px",fontSize: "22px", lineHeight: "42px"}}>For a token, you can use our facility as your office contact address with several benefits. </p>
                                </a>
                                </div>

                                <div>
                                <a href="#" className="block p-6 max-w-sm rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img src={icon3} className="w-20 h-20"></img>
                                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white" style={{fontFamily:"Gelato Soft Free", fontWeight: "400px", fontSize: "33px", lineHeight: "39.61px" }}>serviced offices</h5>
                                    <img src={rectangle}></img>
                                    <p className="mt-4 font-normal dark:text-gray-400" style={{fontFamily: 'Montserrat', fontWeight: "500px",fontSize: "22px", lineHeight: "42px"}}>Get the right environment you desire for work as you use our desk space for your day-to-day work. </p>
                                </a>
                                </div>

                                <div>
                                <a href="#" className="block p-6 max-w-sm rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img src={icon4} className="w-20 h-20" />
                                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white" style={{fontFamily:"Gelato Soft Free", fontWeight: "400px", fontSize: "33px", lineHeight: "39.61px" }}>consulting</h5>
                                    <img src={rectangle}></img>
                                    <p className="mt-4 font-normal dark:text-gray-400" style={{fontFamily: 'Montserrat', fontWeight: "500px",fontSize: "22px", lineHeight: "42px"}}>We provide tailored bus-iness support solutions for effective and efficient business operations. </p>
                                </a>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:block pr-16">
                            <img src={rectangle1}></img>
                        </div>
            
                    </div>

                    <div className='container mx-auto mt-20'>
                    <div className='flex flex-col'>
                        <div>
                            <h1 className='pt-10 text-black font-bold text-center' style={{ fontFamily: "Gelato Soft Free", fontSize: "40px" }}>
                            Be one of the first to know our <br />upcoming services and offers
                            </h1>
                       </div>
                        <div>
                            <div className='grid grid-cols-1  m-10'>
                                <div className='text-center bg-opacity-10 p-8 rounded text-2xl'>  
                                
                                 <input type='text' placeholder='yourmailid@gmail.com' className='text-center px-5' style={{ width: "50%", backgroundColor: "transparent", outline: "none", outlineStyle: "none", borderBottom: "solid 1px rgba(0, 0, 0, 0.25)" }} /><br /><br />

                                <button className="w-72 h-11 bg-blue-600 text-white text-xs font-bold py-4 px-6 rounded">
                                    Join WaitList
                                </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* <div className="py-20 text-center">
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
                    </div> */}

                
            </div>
        </Container>
    )
}


export default About