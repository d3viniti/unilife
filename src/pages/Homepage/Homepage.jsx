import React from 'react'
import './Homepage.css'
import Slider from '../../components/Slider/Slider'
import { useState, useEffect } from 'react'
import CityDropdown from '../../components/CityDropdown/CityDropdown'

function Homepage() {



  // useEffect(()=>{
  //   console.log('displaying homepage')
  //   setCurrentPage('Homepage');
  // }, []);

  return (
    <div className='homepage-container'>
      <Slider header={"Find student homes with bills included"} />
      <div className="form-container">
          <CityDropdown />
      </div>
    </div>
  )
}

export default Homepage