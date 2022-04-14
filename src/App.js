
import './App.css';
import Menu from './components/Menu/Menu'
import HerVest from './components/images/hervest.svg'
import Welcome from './components/Welcome/Welcome'
import SavingsCard from './components/Savings/SavingsCard';
import PlansCard from './components/Plans/PlansCard';





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
    
      <div className="flex min-h-screen bg-slate-50">
       
            
           {/* <div className="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] p-2 w-[300px] overflow-visible y-auto bg-white">   */}
          
              
                    
                    <Menu/>

             
    

        <div className=" flex-1 w-full mx-auto bg-slate-50 ">
            <div className="p-10">
                <Welcome/><br/>
                <div>
                  <h1 className='font-bold text-2xl text-gray-400'>Watch your plans</h1>
                  <p className='text-sm text-gray-400'>A goal without a plan is just a wish</p>
                </div><br/>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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

