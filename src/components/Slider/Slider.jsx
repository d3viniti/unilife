import React from 'react'
import './Slider.css'
import sliderImage from '../../assets/cover-imgslider.png'
import { useState } from 'react'

function Slider({header, paragraph}) {

  

  return (
    <div className='slider-container'>
        <h1 className='slider-header'>{header}</h1>
        <p className='slider-p'>{paragraph}</p>
       
    </div>
  )
}

export default Slider