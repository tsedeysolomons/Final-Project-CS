import React from 'react'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css'
function Header() {
  return (
    <nav>
        <div className='upper d-flex row bg-white px-5 pt-3'>
            <div className='left d-flex col-md-10 col-sm-8 text-wrap'>
               <ReportGmailerrorredIcon />
               <p className='text-danger p-1'>Important:</p>
               <p className='p-1'>Updates on rail to/from Diredawa and Djibouti</p>
            </div>
            <p className='p-1 col-md-2 col-sm-4'>Show more</p>
        </div>
        <div className='row bg-dark text-white px-5 py-3 '>
            <div className='col-md-10 d-flex gap-5 pt-1'>
              <p>BOOK</p>
              <p>MANAGE</p>
              <p>LOYALITY</p>
              <p>HELP</p>
            </div>
            <div className='lowerRight col-md-2 d-flex gap-5'>
              <SearchIcon /> 
              <div className='d-flex gap-1'><AccountCircleIcon /><p className='pt-1'>LOG IN</p></div>
            </div>
        </div>
    </nav>
  )
}

export default Header