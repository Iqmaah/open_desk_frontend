import Desk from '../../../assets/images/Desk.png'
import image1 from '../../../assets/images/image1.png'
import image2 from '../../../assets/images/image2.png'
import Ellipse2 from '../../../assets/images/Ellipse2.png'
import '../../../assets/styles/custom.css'
import Container from '../../../components/pages/Container'

const HomePage = () => {
    return (
        <Container>
            <div>

                <div
                    style={{ backgroundImage: `url(${Desk})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "100vh" }}
                    className="relative container mx-auto z-40 bg-[#09C5AD] mt-5 text-center rounded space-y-20 mb-48">
                    <h1 className='pt-10 text-6xl text-white font-bold'>the perfect and affordable workspace is here</h1>
                    <div className=''>
                        <p className='text-lg text-white pt-2 '>Everything you need to make your hustle </p>
                        <p className='text-lg text-white pb-6'>convenient and effective.</p>

                        <button className="w-72 h-11 bg-blue-600 hover:bg-blue-dark text-white text-xs font-bold py-4 px-6 rounded" type="button">
                            BOOK NOW
                        </button>

                        {/* <img src={Desk} alt="Desk"></img> */}
                        

                    </div>
                    <div className='absolute w-32 h-32 rounded-full bg-blue-600 -bottom-8 -right-8' ></div> 
                
                </div>

                <div className='container mx-auto border border-red-500 mt-20'>
                    <div className='flex'>
                        <div>
                            <h1 className='text-4xl font-bold pt-10'>a whole new experience to work remote</h1>
                            <p className='text-lg pt-2'>A new third space for people who work, stay and move between globally.</p>
                            <button className="bg-blue-600 hover:bg-blue-dark text-white text-xs font-bold py-2 px-6 rounded-full" type="button">
                                LEARN MORE
                            </button>
                        </div>
                        <div className="">
                            <div className="z-10 absolute"><img src={image1} alt='image1'></img></div>
                            <div className="z-30 absolute mt-80 mr-60 w-80 h-80"><img src={image2} alt='image2'></img> </div>
                            <div className="z-20 absolute mt-80"><img src={Ellipse2} alt="ellipse2"></img> </div>
                        
                        </div>
                    </div>

                </div>

            </div>
        </Container>
            )
}


export default HomePage