import React from 'react'
import "./SeeAllCitiesPage.css"
import Slider from '../../components/Slider/Slider'

function SeeAllCitiesPage() {

  // useEffect(()=>{
  //   setCurrentPage('SeeAllCitiesPage');
  // }, []);

  return (
    <div>
       <Slider header={"Student Accomodation"} paragraph={"UniLife have student accommodation available across the UK. Whatever you’re after, we can help you find the right student accommodation for you."} />
    </div>
  )
}

export default SeeAllCitiesPage