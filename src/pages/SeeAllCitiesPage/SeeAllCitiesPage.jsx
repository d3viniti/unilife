import {React, useEffect, useState} from 'react'
import "./SeeAllCitiesPage.css"
import Slider from '../../components/Slider/Slider'
import axios from 'axios'

function SeeAllCitiesPage() {

  // useEffect(()=>{
  //   setCurrentPage('SeeAllCitiesPage');
  // }, []);

  //create state to hold the cities to display
  const [allCities, setAllCities] = useState([])

  //create useEffect to retrieve all cities
  useEffect(() => {
    axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
    .then(res=>{
      console.log(res.data.response)
      setAllCities(res.data.response)
    })
    .catch(err=>console.log(err))
  },[])


  return (
    <div>
       <Slider header={"Student Accomodation"} paragraph={"UniLife have student accommodation available across the UK. Whatever you’re after, we can help you find the right student accommodation for you."} />
        <div className="cities-container">
         {
          allCities.map(city=><div className='city' key={city?.id}>{`${city?.name}`}</div>)
         }
        </div>
    </div>
  )
}

export default SeeAllCitiesPage