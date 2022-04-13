
import './App.css';
import Menu from './components/Menu/Menu'
import HerVest from './components/images/hervest.svg'
import Welcome from './components/Welcome/Welcome'
import SavingsCard from './components/Savings/SavingsCard';
import PlansCard from './components/Plans/PlansCard';
import Union from './components/images/union.svg'


const App = () => {
    
        const datas = [
          {
            "id" : "001",
            "name": "Saving for rainy days",
            "amount": "N400,000"
          },

          {
            "id" : "003",
            "name": "Saving for rainy days",
            "amount": "N400,000"
          },

          {
            "id" : "002",
            "name": "Saving for rainy days",
            "amount": "N400,000"
          }
        ]

       

  return (
    <div className="flex flex-row w-full">
        <div className="w-3/12 bg-white sm:none ">
             <div className="p-6">
               <div className='flex align-items-end justify-content-center'>
                 <img src={Union} alt='Union' style={{display:"inline"}} className="mr-4"/>
                  {/* <img src={HerVest} alt='HerVest' style={{display:"inline"}}/>  */}
                  <h1 className="text-[#E2698D] font-bold text-2xl">HerVest</h1>
                
               </div>
                <Menu/>

             </div>
        </div>


        <div className="w-full md:w-9/12 bg-slate-50 ">
            <div className="p-10">
                <Welcome/><br/>
                <div>
                  <h1 className='font-bold text-2xl text-gray-400'>Watch your plans</h1>
                  <p className='text-sm text-gray-400'>A goal without a plan is just a wish</p>
                </div><br/>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {
                  
                    datas.map((data,i) => <SavingsCard key={data.id} hervest={data}/>)
                  
                  } 
                </div><br/>

                
                  
                    <PlansCard />
                  
                   
                


            </div>
        </div>
        
      </div>
  )
}

export default App;

