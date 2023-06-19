import React from 'react'
import './Homepage.css'
import Slider from '../../components/Slider/Slider'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Homepage() {

  //create state for the number of cities
  const [cityData, setCityData] = useState([]);
  const [options, setOptions] = useState([]);
  const [topCities, setTopCities] = useState([]);

    //when page loads I need to know how many cities
    useEffect(
      ()=>{
        //make api call to get number of cities
        //https://unilife-server.herokuapp.com/cities
        axios.get(`https://unilife-server.herokuapp.com/cities`)
        .then(res=>{
          // console.log(res.data.response) //log this data to ensure you can access it
          //need to create an array from one to this value
          setCityData(res.data.response)
            //check in react components to see if it is stored in state, next map!
          }
        )
        .catch(err=>console.log(err))
      }, [] //empty means tun only when page loads
    )

    //need to make a useEffect to get first 9 cities in API database
    useEffect(
      ()=>{
        //https://unilife-server.herokuapp.com/cities?limit=9 to limit to first 9 results
        axios.get('https://unilife-server.herokuapp.com/cities?limit=9')
        .then(res=>{
          console.log(res.data.response)
          setTopCities(res.data.response)
        })
        .catch(err=>console.log(err))
      }, []
    )


  return (
    <div className='homepage-container'>
      <Slider header={"Find student homes with bills included"} paragraph={"A simple and faster way to search for student accommodation"} />
      <div className="cities-container">
        <div className="dropdown">
            <select id='select-city'>
              {
              cityData.map(city=><option key={city.id}>{`${city?.name}`}</option>)
              }
            </select>
            <button type='submit'>Find Homes</button>
        </div>
        <h3>Student Accomodations in our top cities</h3>
        <div className="top-city-container">
            {
            topCities.map(city=>
            <div className='top-city-card' key={city?.id} 
            style={{backgroundImage:`url("${city?.image_url}")`, 
            backgroundSize:'cover', backgroundPosition:'center',
            backgroundRepeat:'no-repeat'}}>
            <h2>{`${city?.name}`}</h2>
            <p>{`${city?.property_count} properties`}</p>
             </div>
            )
            }
        </div>
      </div>
    </div>
  )
}

export default Homepage

//next, filter cities from the dropdown menu with ricky and morty lesson 4, thurs am at 20"
//how can I set the background image of the top city cards after I map the data? I ttied style={backgroundImage: `url("${city?.image_url}")`} in the div