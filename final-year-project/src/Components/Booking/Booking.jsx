import React from 'react'
import TrainIcon from '@mui/icons-material/Train';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import './Booking.css'

function Booking() {
  return (
    <section className='bookingWrapper'>
        <div className='booking'>
            <p><TrainIcon/> Search train</p>
            <p><BookmarksIcon/> Manage booking</p>
        </div>
        <div className='bookingInput'>
            <input type="text"  placeholder='Departure'/>
            <input type="text" placeholder='Arrival'/>
            <p className='buttons'>Continue</p>
        </div>
    </section>
  )
}

export default Booking