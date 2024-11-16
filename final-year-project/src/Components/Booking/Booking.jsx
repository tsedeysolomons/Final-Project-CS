import React from 'react'
import TrainIcon from '@mui/icons-material/Train';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import '../../App.css';
import './Booking.css'

function Booking() {
  return (
    <section className='container bookingWrapper bg-white text-dark pt-3 w-75 pb-5'>
        <div className='booking d-flex'>
            <p><TrainIcon/> Search trains</p>
            <p><BookmarksIcon/> Manage booking / Check-in</p>
            <p><DoubleArrowIcon />Multi-city</p>
        </div>
        <div className='bookingInput d-flex'>
            <input type="text"  placeholder='From station'/>
            <input type="text" placeholder='To station'/>
            <input type="date" name="date" id="date" placeholder='Departing' />
            <p className='buttons py-3 px-5'>Continue</p>
        </div>
    </section>
  )
}

export default Booking