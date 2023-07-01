import { useEffect, useState } from 'react'
import './CityDetailsPage.css'
import Slider from '../../components/Slider/Slider'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'



function CityDetailsPage() {

    //imported useEffect and slider components, setting current page w state
  // useEffect(()=>{
  //   setCurrentPage('CityDetailsPage');
  // }, []);

  //this page for showing the details of a specific city
  const {cityId} = useParams()
  const [properties, setProperties] = useState([])
  const [propertyImages, setPropertyImages] = useState([])
  const [cityName, setCityName] = useState('');

useEffect(()=>{
  axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
  .then(res=> {
    console.log(res.data.city_name)
    setCityName(res.data.city_name)
  }
    )
  .catch(err=>console.log(err))
},[])

  useEffect(()=>{
    //make axios call to retrieve data
    //store data in state
    axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
    .then(res=>{
      console.log(res.data)
      setProperties(res.data.response)
    })
    .catch(err=>console.log(err))
  },[])

  useEffect(()=>{
    axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
    .then(res=>{
      console.log(res.data.response[0].images)
      //store data
      setPropertyImages(res.data.response[0].images)
    })
    .catch(err=>console.log(err))
  },[])
  


  

  //i need to somehow store the array of property images into state, and then I can map them into 
  //property cards

  return (
    <div className='city-details-container'>
      <Slider header={"Search Accomodation"} paragraph={"Whatever you’re after, we can help you find the right student accommodation for you."} />
      <h3 className='property-container-header'>{properties.length} homes in {cityName}</h3>
      <div className='properties-container'>
            {
            properties.map(property=>
            <div className='property-card' key={property?._id}>
              <img src='#'/>
              <div className='blue-info'>
                <div className='bills'>
                  <p className='price'>£{property?.rent}</p>
                  <p className='text'>pppw including bills</p>
                </div>
                <div className='icons'>
                  <div className="bed">
                  
                  </div>
                  <div className="bath">

                  </div>
                </div>    
              </div>
              {property?.availability}
            </div>  
            )
            }
      </div>
    </div>
  )
}


//how do I loop through the different images?
export default CityDetailsPage
//style={{backgroundImage:`url("${propertyImages[0]}")`, 
// backgroundSize:'cover', backgroundPosition:'center',
// backgroundRepeat:'no-repeat', width:'25rem', height: '16rem'