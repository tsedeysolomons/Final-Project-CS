import React from 'react'
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
               <p className='upperMessage'>Updates on rail to/from Diredawa and Djibouti</p>
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
            <div className='lowerRight'>
              <SearchIcon /> 
              <div><AccountCircleIcon /><p>LOG IN</p></div>
            </div>
        </div>
    </nav>

    
  )
}

export default Header