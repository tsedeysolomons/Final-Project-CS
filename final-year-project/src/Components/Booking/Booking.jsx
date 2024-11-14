import React from 'react'
import TrainIcon from '@mui/icons-material/Train';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import './Booking.css'

function Booking() {
  return (
    <section className='bookingWrapper'>
        <div className='booking'>
            <p><TrainIcon/> Search trains</p>
            <p><BookmarksIcon/> Manage booking / Check-in</p>
            <p><DoubleArrowIcon />Multi-city</p>
        </div>
        <div className='bookingInput'>
            <input type="text"  placeholder='From station'/>
            <input type="text" placeholder='To station'/>
            <p className='buttons'>Continue</p>
        </div>
    </section>
  )
}

export default Booking