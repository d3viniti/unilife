import { useEffect, useState } from 'react'
import './CityDetailsPage.css'
import Slider from '../../components/Slider/Slider'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function CityDetailsPage() {

    //imported useEffect and slider components, setting current page w state
  // useEffect(()=>{
  //   setCurrentPage('CityDetailsPage');
  // }, []);

  //this page for showing the details of a specific city
  const {cityId} = useParams()
  const [properties, setProperties] = useState('')
  const [propertyImages, setPropertyImages] = useState([])

  useEffect(()=>{
    //make axios call to retrieve data
    //store data in state
    axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
    .then(res=>{
      console.log(res.data.response)
      setProperties(res.data.response)
    })
    .catch(err=>console.log(err))
  },[])


  //i need to somehow store the array of property images into state, and then I can map them into 
  //property cards

  return (
    <div className='city-details-container'>
      <Slider header={"Search Accomodation"} paragraph={"Whatever you’re after, we can help you find the right student accommodation for you."} />
      <div className='properties-container'>
      {
            // properties.map(property=>
            // <div key={property?._id} className='property-card'>
            //   <img src={`url("${property?.image_url}")`}/> 
            //    <h2>{`${property?.name}`}</h2>
            //   <p>{`${property?.property_count} properties`}</p>
            //  </div>
            // )
            }
      </div>
    </div>
  )
}

export default CityDetailsPage