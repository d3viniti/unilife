import React, { useEffect } from 'react'
import './CityDetailsPage.css'
import Slider from '../../components/Slider/Slider'


function CityDetailsPage() {

    //imported useEffect and slider components, setting current page w state
  // useEffect(()=>{
  //   setCurrentPage('CityDetailsPage');
  // }, []);

  return (
    <div><Slider header={"Search Accomodation"} paragraph={"Whatever you’re after, we can help you find the right student accommodation for you."} />
    </div>
  )
}

export default CityDetailsPage