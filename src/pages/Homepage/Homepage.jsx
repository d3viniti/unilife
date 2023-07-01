import React from 'react'
import './Homepage.css'
import Slider from '../../components/Slider/Slider'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import bills from '../../assets/Vectorbills.png'
import search from '../../assets/Vectorsearch.png'
import compare from '../../assets/Vectorcompare.png'
import handhome from '../../assets/Vectorhandhome.png'
import favoriteheart from '../../assets/Vectorfavorite.png'
import textman from '../../assets/textman.png'


function Homepage({city}) {

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
// where is my student accomodations heading? Also need to retouch footer styling

  return (
    <div className='homepage-container'>
      <Slider header={"Find student homes with bills included"} paragraph={"A simple and faster way to search for student accommodation"} />
      <div className="cities-container">
        <div className="dropdown">
            <select id='select-city'>
              {
              cityData.map(city=><option key={city?.id}>{`${city?.name}`}</option>)
              }
            </select>
            <button type='submit'>Find Homes</button>
        </div>
        <h3>Student Accomodations in our top cities</h3>
        <div className="top-city-container">
            {
            topCities.map(city=>
            <Link to={`/citydetails/${city?._id}`} key={city?.id} className='city-link'>
            <div className='top-city-card' 
              style={{backgroundImage:`url("${city?.image_url}")`, 
              backgroundSize:'cover', backgroundPosition:'center',
              backgroundRepeat:'no-repeat'}}>
              <h2 className='city-card-name'>{`${city?.name}`}</h2>
              <p className='spacing'>{`${city?.property_count} properties`}</p>
             </div>
             </Link>
            )
            }
        </div>
        <Link to='/SeeAllCities' className='btn'>See All Cities</Link>
        <div className="middle-container1">
            <h2>Compare all inclusive student homes.</h2>
            <div className="value-props">
              <div className="value-box">
                <img className='search-icon' src={search}/>
                <p className='title'>Search</p>
                <p>Find your dream home in the perfect area near your university.</p>
              </div>
              <div className="value-box">
                <img className='compare-icon' src={compare}/>
                <p className='title'>Compare</p>
                <p>Compare student accommodation to find the right home for you.</p>
              </div>
              <div className="value-box">
                <img className='bills-icon'src={bills}/>
                <p className='title'>Bills Included</p>
                <p>Bills are included in all rent prices. No hidden fees.</p>
              </div>
            </div>
        </div>
        <div className="middle-container2">
            <div className="text">
              <div className="section">
                <img src={handhome} alt="offering-icon" className='offering-icon'/>
                <div className="section-text p">
                  <p className="section-title p">Best Selection</p>
                  <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
                </div>
              </div>
              <div className="section">
                <img src={favoriteheart} alt="heart-icon" className='heart-icon' />
                <div className="section-text">
                  <p className="section-title">Your favourite</p>
                  <p>Shortlist your favourite properties and send enquiries in one click.</p>
                </div>
              </div>
              <Link to='#' className='btn search-compare-btn'>Search & Compare</Link>
            </div>
            <img src={textman} className='textman'/>
        </div>
      </div>
    </div>
  )
}

export default Homepage

//next, filter cities from the dropdown menu with ricky and morty lesson 4, thurs am at 20"
//how can I set the background image of the top city cards after I map the data? I ttied style={backgroundImage: `url("${city?.image_url}")`} in the div