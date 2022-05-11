import { useState } from "react";
// import CloseModalIcon from "../../assets/svgs/CloseModalIcon";
import '../../assets/styles/modal.css'
import furniture from '../../assets/images/furniture.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const BookingModal = ({closeModalClick}) => {

    const [value, onChange] = useState(new Date());

  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white rounded-lg fadeIn login-fieldset">
        <span className="closeModal">close </span>
        <div className="flex flex-col items-center mb-0">

          <h1 className="text-2xl font-medium mb-2">Bookings</h1>
            <p className="text-center text-gray-500 leading-normal">{"Make your bookings here"}</p><br />
            <div className="flex flex-row">
                <div>
                     <Calendar className="w-full"  onChange={onChange} value={value} />     
                </div>        
                      
            </div>
        
                  <div className=" flex text-center wealth-buddy--cta leading-loose bg-wb-primary text-white rounded-sm mt-8" >
                  <button className="bg-red-600 p-4 w-full" onClick={closeModalClick}>Cancel</button>
                      &nbsp;&nbsp;  &nbsp;&nbsp;
                  <button className="bg-green-600 p-4 rounded-full w-full" onClick={""}>Proceed</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BookingModal;
