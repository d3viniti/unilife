import { useEffect, useState } from 'react'
import './CityDetailsPage.css'
import Slider from '../../components/Slider/Slider'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BiBed } from "react-icons/bi";
import { MdOutlineBathtub } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";


function CityDetailsPage() {

    //imported useEffect and slider components, setting current page w state
  // useEffect(()=>{
  //   setCurrentPage('CityDetailsPage');
  // }, []);

  //this page for showing the details of a specific city
  const {cityId} = useParams()
  const [properties, setProperties] = useState([])
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
      // console.log(res.data)
      setProperties(res.data.response)
    })
    .catch(err=>console.log(err))
  },[])

  console.log(properties)
  useEffect(()=>{
    axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
    .then(res=>{
      for(let i=0; i < res.data.response.length; i++){
      console.log(res.data.response[i].images)
      console.log(res.data.response)
      setPropertyImages(res.data.response[i].images)
      }
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
            properties.map((property, index)=>
            <div className='property-card' key={property?._id}>
              <img className='property-card-img' src={property.images[0]}/>
              <div className='blue-info'>
                <div className='bills'>
                  <p className='price'>£{property?.rent}</p>
                  <p className='text'>pppw including bills</p>
                </div>
                <div className='icons'>
                  <div className="bed">
                    <BiBed className='bed-icon sixteen'/>
                    <p className="bed-number sixteen pad-left-10">{property?.bedroom_count}</p>
                  </div>
                  <div className="bath">
                    <MdOutlineBathtub className='bath-icon pad-left-10' />
                    <p className="bath-number">{property?.bathroom_count}</p>
                  </div>
                </div>    
              </div>
              <div className="add-details">
                <p className="add-details-child">{property?.property_type}</p>
                <p className="add-details-child">{property?.furnished}</p>
              </div>
              <div className="address">
                <MdOutlineLocationOn className='pin' alt='pin-icon' />
                <p className="twelve address-text">{property?.address.street}, {property?.address.city}, {property?.address.postcode}</p>
              </div>
                <Link to='#' className='view-home'>
                  <BsHouseDoor className='house-icon' alt="House Icon" />
                  <p className='view-home-text sixteen'>View Home</p>
                </Link>
            </div>  
            )
            }
      </div>
    </div>
  )
}


//how can I add just the first img of each objects' imgs to my state and map them to their respective card?
export default CityDetailsPage
