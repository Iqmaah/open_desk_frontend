import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './assets/styles/toastify.css'
import HomePage from './components/pages/HomePage/HomePage';
import About from './components/pages/About/About'
import Contact from './components/pages/Contact/Contact'
import Bookings from './components/pages/Booking/Booking'

function App() {
  return (
    <>   
        
        <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              toastclassName="px-2 shadow-sm bg-green-400 rounded-md text-sm"
      />

      
        <BrowserRouter>
        <Routes>   
            <Route  path="/" element={<HomePage />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/contact" element={<Contact />} />
            <Route  path="/bookings" element={<Bookings />} />
            <Route path="*" element={<HomePage />} />
        </Routes>

          </BrowserRouter>
    </>
    
  )
}

export default App
