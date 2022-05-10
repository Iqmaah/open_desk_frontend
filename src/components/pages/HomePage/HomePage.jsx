import Desk from '../../../assets/images/Desk.png'
import image1 from '../../../assets/images/image1.png'
import image2 from '../../../assets/images/image2.png'
import Ellipse2 from '../../../assets/images/Ellipse2.png'
import checkMark from '../../../assets/images/check-o.png'
import '../../../assets/styles/custom.css'
import Container from '../../../components/pages/Container'
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import { useEffect } from 'react'

const HomePage = () => {

    useEffect(() => { 
        new Accordion('.accordion-container');
    }, [])
    return (
        <Container>
            <div>

                <div
                    style={{ backgroundImage: `url(${Desk})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "100vh" }}
                    className="relative container mx-auto bg-[#09C5AD] mt-5 text-center rounded space-y-20 mb-48">
                    <h1 className='pt-10 text-white font-bold' style={{fontFamily:"Gelato Soft Free", fontSize: "77px" }}>the perfect and affordable workspace is here</h1>
                    <div className=''>
                        {/* <p className='text-lg text-white pt-2' style={{fontFamily: 'Montserrat', fontStyle: "normal", fontWeight: "500px", fontSize: "26px"}}>Everything you need to make your hustle </p>
                        <p className='text-lg text-white pb-6'>convenient and effective.</p> */}

                        {/* <button className="w-72 h-11 bg-blue-600 hover:bg-blue-dark text-white text-xs font-bold py-4 px-6 rounded">
                            BOOK NOW
                        </button> */}

                        {/* <img src={Desk} alt="Desk"></img> */}
                        

                    </div>
                    <div className='z-10 absolute w-32 h-32 rounded-full bg-blue-600 -bottom-8 -right-8' ></div> 
                
                </div>

                <div className='container mx-auto mt-20'>
                    <div className='grid grid-cols-2 gap-40 mx-20'>
                        <div className=''>
                            <h1 className='font-bold text-left' style={{fontFamily:"Gelato Soft Free", fontSize:"62px" }}>a whole new experience to<br /> work remotely</h1>
                            <p className='text-lg pt-2' style={{fontFamily: 'Montserrat', fontWeight: "500px",fontSize: "26px", lineHeight: "42px"}}>A new third space for people who work, <br />stay and move between globally.</p>
                            <br /><br />
                            <button className="bg-blue-600 hover:bg-blue-dark text-white text-xs font-bold py-4 px-20 rounded-full" type="button">
                                LEARN MORE
                            </button>
                        </div>
                        <div className="relative" style={{ backgroundImage: `url(${image1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                           
                            <div className="absolute h-80 w-80 -left-10 top-80"
                                style={{ backgroundImage: `url(${image2})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                           
                        </div>
                    </div>

                </div>

                <div className='container mx-auto mt-20'>
                    <div className='flex flex-col'>
                        <div>
                            <h1 className='pt-10 text-black font-bold text-center' style={{fontFamily:"Gelato Soft Free", fontSize: "62px" }}>What we will Offer</h1>
                       </div>
                        <div>
                            <h5 className="pt-2 text-center" style={{fontFamily: 'Montserrat', fontStyle: "normal", fontWeight: "500px", fontSize: "26px"}}>We give remote workers access to short term
                                co-working and co-living spaces, all around.
                            </h5>
                        </div>
                        <div>
                            <div className='grid grid-cols-3 gap-20 m-10'>
                                <div className='bg-[#125EC5] bg-opacity-10 p-8 rounded text-2xl'>
                                    <h4 className='text-[#125EC5]' style={{fontFamily:"Gelato Soft Free", fontSize: "30px" }}>flexibility</h4><br />
                                    <div className='text-xl'>You don't live in fixed time blocks and neither do we, book the time you need in flexible time blocks.</div>
                                </div>
                                <div className='bg-[#09C5AD] bg-opacity-10 p-8 rounded text-2xl'>
                                <h4 className='text-[#125EC5]' style={{fontFamily:"Gelato Soft Free", fontSize: "30px" }}>affordability</h4><br />
                                    <div className='text-xl'>You don't live in fixed time blocks and neither do we, book the time you need in flexible time blocks.</div>
                                </div>
                                <div className=' bg-[#125EC5] bg-opacity-10 p-8 rounded text-2xl'>
                                    <h4 className='text-[#125EC5]' style={{fontFamily:"Gelato Soft Free", fontSize: "30px" }}>connection</h4><br />
                                    <div className='text-xl'>You don't live in fixed time blocks and neither do we, book the time you need in flexible time blocks.</div>
                                </div>

                                <div className=' bg-[#09C5AD] bg-opacity-10 p-8 rounded text-2xl'>
                                    <h4 className='text-[#125EC5]' style={{fontFamily:"Gelato Soft Free", fontSize: "30px" }}>comfortability</h4><br />
                                    <div className='text-xl'>You don't live in fixed time blocks and neither do we, book the time you need in flexible time blocks.</div>
                                </div>
                                <div className=' bg-[#125EC5] bg-opacity-10 p-8 rounded text-2xl'>
                                    <h4 className='text-[#125EC5]' style={{fontFamily:"Gelato Soft Free", fontSize: "30px" }}>productivity</h4><br />
                                    <div className='text-xl'>You don't live in fixed time blocks and neither do we, book the time you need in flexible time blocks.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

 

                
                <div className='container mx-auto mt-20'>
                    <div className='flex flex-col'>
                        <div>
                            <h1 className='pt-10 text-black font-bold text-center' style={{fontFamily:"Gelato Soft Free", fontSize: "62px" }}>Our Pricing Packages</h1>
                       </div>
                        <div>
                            <h5 className="pt-2 text-center" style={{fontFamily: 'Montserrat', fontStyle: "normal", fontWeight: "500px", fontSize: "26px"}}>
                            Perfectly composed just for your budget.
                            </h5>
                        </div>
                        <div>
                            <div className='grid grid-cols-3 gap-10 m-20'>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <div className="bg-[#09C5AD] pt-5" style={{  borderRadius: "0px 0px 40px 40px", borderTopLeftRadius: "0", borderTopRightRadius: "0"}}>
                                        <div className=" w-full container" >
                                             <div className="font-bold text-center" style={{ fontFamily: "Gelato Soft Free", fontSize: "35px" }}>coworking</div>
                                            <h4 className='text-center' style={{ fontFamily: 'Montserrat', fontSize: "25px" }}>#3000 per day</h4>
                                            <br /><br /><br />
                                        </div>
                                    </div>
                                    <div className="px-6 py-4 pb-5">
                                        <div className='text-center'>
                                            <div className=' m-10' style={{fontFamily: 'Montserrat', fontSize: "18px"}}>

                                                <p className="p-2">24/7 Access </p><hr />
                                                <p className="p-2">High Speed Internet </p><hr />
                                                <p className="p-2">Access to Kitchen Lounge </p><hr />
                                                <p className="p-2">Utilities Included </p><hr />
                                                <p className="p-2">Access to Kitchen Lounge </p><hr />
                                                <p className="p-2">Utilities Included </p><hr />
                                            
                                            </div>
                                            <button className="bg-blue-600 hover:bg-blue-dark text-white text-xs font-bold py-5 px-20 rounded-full">
                                                BOOK NOW
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <div className="bg-[#09C5AD] pt-5" style={{  borderRadius: "0px 0px 40px 40px", borderTopLeftRadius: "0", borderTopRightRadius: "0"}}>
                                        <div className=" w-full container" >
                                             <div className="font-bold text-center" style={{ fontFamily: "Gelato Soft Free", fontSize: "35px" }}>virtual office</div>
                                            <h4 className='text-center' style={{ fontFamily: 'Montserrat', fontSize: "25px" }}>#3000 per day</h4>
                                            <br /><br /><br />
                                        </div>
                                    </div>
                                    <div className="px-6 py-4 pb-5">
                                        <div className='text-center'>
                                            <div className=' m-10' style={{fontFamily: 'Montserrat', fontSize: "18px"}}>

                                                <p className="p-2">24/7 Access </p><hr />
                                                <p className="p-2">High Speed Internet </p><hr />
                                                <p className="p-2">Access to Kitchen Lounge </p><hr />
                                                <p className="p-2">Utilities Included </p><hr />
                                                <p className="p-2">Access to Kitchen Lounge </p><hr />
                                                <p className="p-2">Utilities Included </p><hr />
                                            
                                            </div>
                                            <button className="bg-blue-600 hover:bg-blue-dark text-white text-xs font-bold py-5 px-20 rounded-full">
                                                BOOK NOW
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <div className="bg-[#09C5AD] pt-5" style={{  borderRadius: "0px 0px 40px 40px", borderTopLeftRadius: "0", borderTopRightRadius: "0"}}>
                                        <div className=" w-full container" >
                                             <div className="font-bold text-center" style={{ fontFamily: "Gelato Soft Free", fontSize: "35px" }}>dedicated desk</div>
                                            <h4 className='text-center' style={{ fontFamily: 'Montserrat', fontSize: "25px" }}>#3000 per day</h4>
                                            <br /><br /><br />
                                        </div>
                                    </div>
                                    <div className="px-6 py-4 pb-5">
                                        <div className='text-center'>
                                            <div className=' m-10' style={{fontFamily: 'Montserrat', fontSize: "18px"}}>

                                                <p className="p-2">24/7 Access </p><hr />
                                                <p className="p-2">High Speed Internet </p><hr />
                                                <p className="p-2">Access to Kitchen Lounge </p><hr />
                                                <p className="p-2">Utilities Included </p><hr />
                                                <p className="p-2">Access to Kitchen Lounge </p><hr />
                                                <p className="p-2">Utilities Included </p><hr />
                                            
                                            </div>
                                            <button className="bg-blue-600 text-white text-xs font-bold py-5 px-20 rounded-full">
                                                BOOK NOW
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>


                <div className='container mx-auto mt-20'>
                    <div className='flex flex-col'>
                        <div>
                            <h1 className='pt-10 text-black font-bold text-center' style={{fontFamily:"Gelato Soft Free", fontSize: "40px" }}>frequently asked questions</h1>
                       </div>
                        <div>
                            <div className='grid grid-cols-1  m-10'>
                                <div className='bg-[#09C5AD] text-center bg-opacity-10 p-8 rounded text-2xl'>  
                        
                                <div className="accordion-container" >
                                <div className="ac">
                                    <h2 className="ac-header">
                                         <button type="button" className="ac-trigger w-50 p-10 bg-[#09C5AD]" style={{ fontFamily: 'Montserrat' }}>How do i get started</button>
                                    </h2>
                                    <div className="ac-panel">
                                         <p className="ac-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className="ac">
                                    <h2 className="ac-header">
                                    <button type="button" className="ac-trigger">Lorem ipsum dolor sit amet.</button>
                                    </h2>
                                    <div className="ac-panel">
                                    <p className="ac-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className="ac">
                                    <h2 className="ac-header">
                                    <button type="button" className="ac-trigger">Lorem ipsum dolor sit amet.</button>
                                    </h2>
                                    <div className="ac-panel">
                                    <p className="ac-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className="ac">
                                    <h2 className="ac-header">
                                    <button type="button" className="ac-trigger">Lorem ipsum dolor sit amet.</button>
                                    </h2>
                                    <div className="ac-panel">
                                    <p className="ac-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>

                                </div>



                                    
                                </div>
                            </div>
                        </div>
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

            </div>
        </Container>
        )
}


export default HomePage