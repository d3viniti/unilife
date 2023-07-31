import React from 'react'
import './HomeDetailsPage.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BiBed } from "react-icons/bi";
import { MdOutlineBathtub } from "react-icons/md";
import { BiPound } from "react-icons/bi";

function HomeDetailsPage() {

  //useParams is for passing data through the URL, make sure the param
  //set as a const here is the EXACT same as in the route path (app.jsx) followed by a :
const {propertyId} = useParams()
  // useEffect(()=>{
  //   setCurrentPage('HomeDetailsPage');
  // }, []);

  //create state to hold property data
  const [home, setHome] = useState('')
  const [homeAddress, setHomeAddress] = useState({})

  //633d45d461f49f86a21caa1a
  useEffect(()=>{
    axios.get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
    .then(res=>{
      console.log(res.data)
      setHome(res.data)
      console.log(home)
      console.log(res.data.address)
      setHomeAddress(res.data.address)
      console.log(homeAddress)
    })
      
    .catch(err=>console.log(err))
  },[])


  return (
    <div className='home-details-container'>
    <div className="gallery"></div>
    <div className="home-info">
      <p className="address">{homeAddress?.street}, {homeAddress?.city}, {homeAddress?.postcode}</p>
      <div className="info-grid">
        <div className="grid-child">
          <p className='grid-child-heading'>Bedrooms</p>
          <div className="grid-child-info">
            <BiBed alt='bed-icon' />
            <p className='number'>{home?.bedroom_count}</p>
          </div>
        </div>
        <div className="grid-child">
          <p className='grid-child-heading'>Bathrooms</p>
          <div className="grid-child-info">
            <MdOutlineBathtub alt='bath-icon' />
            <p className='number'>{home?.bathroom_count}</p>
          </div>
        </div>
        <div className="grid-child">
          <p className='grid-child-heading'>Property Type</p>
          <p className="grid-child-info text">{home?.property_type}</p>
        </div>
        <div className="grid-child">
          <p className='grid-child-heading'>Price</p>
            <div className="grid-child-info">
              <BiPound alt='british-pound-icon' className='number'/>
              <p className='number'>{home?.rent}</p>
            </div>
        </div>
        <div className="grid-child">
          <p className='grid-child-heading'>Furnished Type</p>
          <div className="grid-child-info">
            <p className='text'>{home?.furnished}</p>
          </div>
        </div>
        <div className="grid-child">
          <p className='grid-child-heading'>Available from</p>
          <div className="grid-child-info">
            <p className='text'>{home?.availability}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomeDetailsPage