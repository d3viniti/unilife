import React from 'react'
import './HomeDetailsPage.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function HomeDetailsPage() {

  //useParams is for passing data through the URL, make sure the param
  //set as a const here is the EXACT same as in the route path (app.jsx) followed by a :
const {propertyId} = useParams()
  // useEffect(()=>{
  //   setCurrentPage('HomeDetailsPage');
  // }, []);

  //create state to hold property data
  const [home, setHome] = useState('')


  //633d45d461f49f86a21caa1a
  useEffect(()=>{
    axios.get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  },[])


  return (
    <div>{propertyId}</div>
  )
}

export default HomeDetailsPage