import {React, useEffect, useState} from 'react'
import "./SeeAllCitiesPage.css"
import Slider from '../../components/Slider/Slider'
import axios from 'axios'
import { Link } from 'react-router-dom'

function SeeAllCitiesPage({baseUrl}) {

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
    <div className='see-all-cities-page'>
      <Slider header={"Student Accomodation"} paragraph={"UniLife have student accommodation available across the UK. Whatever you’re after, we can help you find the right student accommodation for you."} />
      <h3 className='grid-heading'>Search by City</h3>      
      <div className="all-cities-container">
         {
          allCities.map(city=><Link to={`/CityDetailsPage/${city?.id}`} className='city'><div key={city?.id}>{`${city?.name}`}</div></Link>)
         }
      </div>
    </div>
  )
}
//how do i link the data from each city to its own city details page?
export default SeeAllCitiesPage