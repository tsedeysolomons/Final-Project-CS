import React from 'react'
import banner from '.././../Images/banner2.jpg'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <img className='banner' src={banner} alt="#" />
    </div>
  )
}

export default Banner