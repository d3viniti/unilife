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
import midImg from '../../assets/city-details-img.png'




function CityDetailsPage({property}) {
  
    //imported useEffect and slider components, setting current page w state
  // useEffect(()=>{
  //   setCurrentPage('CityDetailsPage');
  // }, []);

//need to create state for selections for the dropdown, link to an
//event and then do an api call with query


  //this page for showing the details of a specific city
  const {cityId} = useParams()
  const [properties, setProperties] = useState([])
  const [cityName, setCityName] = useState('');
  const [uniDescription, setUniDescription] = useState('')
  const [studentLife, setStudentLife] = useState('')



    //{query:{

    //}}
  //create state for all dropdown options
  const [selectedBedroomOption, setSelectedBedroomOption] = useState()
  //what do I want to intialize the above state to?
  const bedroomOptions = [1, 2, 3, 4, 5, 6]  
  const [selectedBathroomOption, setSelectedBathroomOption] = useState()
  const bathroomOptions = [1, 2, 3, 4, 5, 6]  
  const [selectedPriceOption, setSelectedPriceOption] = useState()
  const priceOptions = [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 250000]
  const [selectedTypeOption, setSelectedTypeOption] = useState()
  const typeOptions = ['Apartment', 'Detached', 'Semi-Detached']

  //useEffect to run anytime there is a change in the dropdowns selected
useEffect(()=>{
  axios.post(`https://unilife-server.herokuapp.com/properties/filter`,{
    query:{
      city_id: cityId,
      bedroom_count: selectedBedroomOption,
      bathroom_count: selectedBedroomOption,
      property_type: selectedTypeOption,
      rent: selectedPriceOption
    }
  })
  .then(res=>setProperties(res.data.response))
  .catch(err=>console.log(err))
},[selectedBedroomOption, selectedBathroomOption, selectedPriceOption, selectedTypeOption])

useEffect(()=>{
  axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
  .then(res=> {
    console.log(res.data)
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

  useEffect(()=>{
    axios.get(`https://unilife-server.herokuapp.com/cities/${cityId}`)
    .then(res=>{
      console.log(res.data.data[0].universities)
      setUniDescription(res.data.data[0].universities)
      console.log(res.data.data[0].student_life)
      setStudentLife(res.data.data[0].student_life)
    })
    .catch(err=>console.log(err))
  }, [])
  

  //i need to somehow store the array of property images into state, and then I can map them into 
  //property cards

  return (
    <div className='city-details-container'>
      <Slider header={"Search Accomodation"} paragraph={"Whatever you’re after, we can help you find the right student accommodation for you."} />
      <select onChange={(e)=>setSelectedBedroomOption(e.target.value)}>
        <option value=''>Any Bedroom</option>
        {
          bedroomOptions.map((item)=><option key={item} value={item}>{item}</option>)
        }
      </select>
      <select onChange={(e)=>setSelectedBathroomOption(e.target.value)}>
        <option>Any Bathroom</option>
        {
          bathroomOptions.map((item)=><option key={item} value={item}>{item}</option>)
        }
      </select>
      <select onChange={(e)=>setSelectedPriceOption(e.target.value)}>
        <option>Any Price</option>
        {
          priceOptions.map((item)=><option key={item} value={item}>{item === 250000 ? '5,000+' : `Less than $${item}` }</option>)
        }
      </select>
      <select onChange={(e)=>setSelectedTypeOption(e.target.value)}>
        <option>Any Type</option>
        {
          typeOptions.map((item)=><option key={item} value={item}>{item}</option>)
        }
      </select>
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
          <p className="count">{property?.bedroom_count}</p>
        </div>
        <div className="bath">
          <MdOutlineBathtub className='bath-icon pad-left-10' />
          <p className="count">{property?.bathroom_count}</p>
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
      <Link to={`/homeDetails/${property?._id}`} key={property?._id} className='view-home-link'>
        <BsHouseDoor className='house-icon' alt="House Icon" />
        <p className='view-home-text sixteen'>View Home</p>
      </Link>
  </div>  
  )
  }

      </div>
      <div className="middle-container">
        <div className="middle-container-text">
          <h3 className='middle-container-header'>Being a student in {cityName}</h3>
          <p className='middle-container-paragraph'>{uniDescription}</p>
          <p className='middle-container-paragraph'>{studentLife}</p>
        </div>
        <img className="middle-container-img" src={midImg}></img>
      </div>
    </div>
  )
}


//how can I add just the first img of each objects' imgs to my state and map them to their respective card?
export default CityDetailsPage

