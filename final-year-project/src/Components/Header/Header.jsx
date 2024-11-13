import React from 'react'
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import './Header.css'
function Header() {
  return (
    <nav>
        <div className='upper'>
            <div className='left'>
               <PriorityHighRoundedIcon />
               <p className='red'>Important:  </p>
               <p>Updates on flights to/from Djbouti and Sudan</p>
            </div>
            <p className='right'>Show more</p>
        </div>
        <div className='lower'>
            <p>BOOK</p>
            <p>MANAGE</p>
            <p>LOYALITY</p>
            <p>HELP</p>
        </div>
    </nav>
    
  )
}

export default Header