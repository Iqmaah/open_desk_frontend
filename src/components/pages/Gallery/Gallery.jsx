import gallery from '../../../assets/images/gallery.png'

const Gallery = () => {
    return(
        <div className="container mx-auto">

            <h1 className="text-7xl font-bold py-8 text-center">explore our gallery</h1>
            <div className="grid grid-rows-5 grid-flow-col gap-2 mx-44">
                <div className="border bg-[#C4C4C4] ">
                    <img src={gallery} className="mx-auto py-24"></img>
                </div>
                <div className="border bg-[#C4C4C4]">
                    <img src={gallery} className="mx-auto py-24"></img>
                </div>
                <div className="border bg-[#C4C4C4]">
                    <img src={gallery} className="mx-auto py-24"></img>
                </div>
                <div className="row-span-2 col-span-2 border bg-[#C4C4C4]">
                    <img src={gallery} className="mx-auto py-48"></img>
                </div>
                <div className="row-span-2 col-span-2 border bg-[#C4C4C4]">
                    <img src={gallery} className="mx-auto py-48"></img>
                </div>
                <div className="border bg-[#C4C4C4]">
                    <img src={gallery} className="mx-auto py-24"></img>
                </div>
                <div className="border bg-[#C4C4C4]">
                    <img src={gallery} className="mx-auto py-24"></img>
                </div>
                <div className="border bg-[#C4C4C4]">
                    <img src={gallery} className="mx-auto py-24"></img>
                </div>
                <div className="border bg-[#C4C4C4]">
                    <img src={gallery} className="mx-auto py-24"></img>
                </div>
            </div>
            
        </div>
    )
}



export default Gallery