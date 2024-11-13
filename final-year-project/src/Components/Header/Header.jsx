import React from 'react'
import Banner from '.././../Images/Banner.jpg'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css'
function Header() {
  return (
    <nav>
        <div className='upper'>
            <div className='left'>
               <ReportGmailerrorredIcon />
               <p className='red upperMessage'>Important:  </p>
               <p className='upperMessage'>Updates on flights to/from Djbouti and Sudan</p>
            </div>
            <p className='right'>Show more</p>
        </div>
        <div className='lower'>
            <div className='lowerLeft'>
              <p>BOOK</p>
              <p>MANAGE</p>
              <p>LOYALITY</p>
              <p>HELP</p>
            </div>
            <div className='right'>
              <SearchIcon /> 
              <AccountCircleIcon />
              <p>LOG IN</p>
            </div>
        </div>
        <img className='banner' src={Banner} alt="#" />
    </nav>

    
  )
}

export default Header